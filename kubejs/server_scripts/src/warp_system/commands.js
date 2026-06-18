// kubejs/server_scripts/warp_final.js
console.log('[Warp] 加载传送系统');

// ====== 文件系统操作 ======
const WarpManager = {
    // 获取玩家数据路径（兼容性写法）
    getPlayerDataPath: function(player) {
        try {
            // 方法1：直接构建绝对路径字符串
            
            
            // 获取游戏目录的绝对路径
            // 使用 File 类获取当前目录
            // const File = Java.loadClass('java.io.File');
            // const currentDir = new File('.').getCanonicalPath();
            
            // // 构建完整路径：游戏目录/kubejs/warps/玩家名.json
            // const warpsDir = currentDir + '/kubejs/warps/';
            // const filePath = warpsDir + fileName;
            
            // console.log(`[Warp] 数据路径: ${filePath}`);
            
            // // 确保目录存在
            // const warpsFile = new File(warpsDir);
            // if (!warpsFile.exists()) {
            //     warpsFile.mkdirs();
            // }

            var fileName = player.username.toLowerCase() + '.json';
            var fileDir = `kubejs/warps/${global.seed}/`
            var filePath = fileDir + fileName;

            // 如果目录不存在，先创建目录
            if (!FilesJS.exists(fileDir)) {
                // 创建目录
                FilesJS.createDirectory(fileDir)
            }


            // 确保文件存在
            if (!FilesJS.exists(filePath)) {
                // 创建文件
                FilesJS.writeFile(filePath, '{}');
            }
            
            return filePath;
        } catch(e) {
            console.error('[Warp] 路径错误: ' + e);
            return null;
        }
    },
    
    // 读取传送点
    readWarps: function(player) {
        const path = this.getPlayerDataPath(player);
        if (!path) return {};
        
        try {
            if (FilesJS.exists(path)) {
                var content = FilesJS.readFile(path);
                return JSON.parse(content);
            }
        } catch(e) {
            console.error('[Warp] 读取失败: ' + e);
        }
        return {};
    },
    
    // 保存传送点
    saveWarps: function(player, warps) {
        const path = this.getPlayerDataPath(player);
        if (!path) return false;
        
        try {
            // const Files = Java.loadClass('java.nio.file.Files');
            // Files.writeString(path, JSON.stringify(warps, null, 2));
            // return true;

            FilesJS.writeFile(path, JSON.stringify(warps, null, 2));
            return true;
        } catch(e) {
            console.error('[Warp] 保存失败: ' + e);
            return false;
        }
    },
    
    // 获取玩家位置
    getPlayerPosition: function(player) {
        console.log('[Warp] 获取玩家位置');

        const pos = player.blockPosition();

        console.log('[Warp] 获取玩家位置: ' + pos);
        const returned = {
            x: pos.x,
            y: pos.y,
            z: pos.z,
            dim: player.level.dimension.toString()
        };

        console.log('[Warp] 获取玩家位置: ' + returned);
        return returned;
    }
};

// ====== 指令系统（兼容性写法） ======
ServerEvents.commandRegistry(event => {
    console.log('[Warp] 注册指令系统');
    
    const { commands: Commands, arguments: Arguments } = event;
    
    // 创建主命令
    const warp = Commands.literal('warp')
        .requires(src => src.hasPermission(0))
        .executes(ctx => {
            ctx.source.sendSuccess(
                Component.literal('§6=== 传送点系统 ===\n' +
                               '§7/warp create <名称> §f- 创建传送点\n' +
                               '§7/warp to <名称> §f- 传送到标记点\n' +
                               '§7/warp delete <名称> §f- 删除传送点\n' +
                               '§7/warp list §f- 列出所有传送点'),
                false
            );
            return 1;
        });
    
    // ====== /warp create <名称> ======
    const createLiteral = Commands.literal('create');
    
    // 创建字符串参数 - 兼容性写法
    const stringArgument = Commands.argument('name', Arguments.STRING.create(event));
    
    createLiteral.then(stringArgument.executes(ctx => {
        const player = ctx.source.player;
        const name = Arguments.STRING.getResult(ctx, 'name');

        console.log('[Warp] 创建传送点: ' + name);
        
        if (!name || name.trim().length === 0) {
            ctx.source.sendFailure(Component.literal('§c请输入传送点名称'));
            return 0;
        }
        
        const trimmedName = name.trim();
        if (trimmedName.length > 20) {
            ctx.source.sendFailure(Component.literal('§c名称不能超过20字符'));
            return 0;
        }
        
        var warps = WarpManager.readWarps(player);
        if (warps[trimmedName]) {
            ctx.source.sendFailure(Component.literal(`§c传送点"${trimmedName}"已存在`));
            return 0;
        }

        console.log('[Warp] 正在创建传送点: ' + trimmedName);
        
        const pos = WarpManager.getPlayerPosition(player);

        console.log('[Warp] 正在加载传送点数据: ' + player.username);

        warps[trimmedName] = {
            x: pos.x,
            y: pos.y,
            z: pos.z,
            dim: pos.dim,
            created: new Date().toISOString()
        };

        console.log('[Warp] 正在保存数据...');
        
        if (WarpManager.saveWarps(player, warps)) {
            const dimName = pos.dim.split(':')[1] || pos.dim;
            ctx.source.sendSuccess(
                Component.literal(`§a传送点"${trimmedName}"已创建\n§7位置: §f${pos.x}, ${pos.y}, ${pos.z} §8(${dimName})`),
                true
            );
            console.log('[Warp] 保存成功');
            return 1;
        }
        
        ctx.source.sendFailure(Component.literal('§c保存失败'));
        console.log('[Warp] 保存失败');
        return 0;
    }));
    
    warp.then(createLiteral);
    
    // ====== /warp list ======
    warp.then(Commands.literal('list').executes(ctx => {
        const player = ctx.source.player;
        const warps = WarpManager.readWarps(player);
        console.log('[Warp] 读取传送点数据: ' + player.username + ': ' + Object.keys(warps).toString());
        
        if (Object.keys(warps).length === 0) {
            ctx.source.sendSuccess(Component.literal('§7你还没有创建任何传送点'), false);
            return 1;
        }
        
        ctx.source.sendSuccess(Component.literal('§6=== 你的传送点 ==='), false);
        
        let count = 0;
        for (const name of Object.keys(warps)) {
            count++;
            let data = warps[name];
            if (data == null) continue;
            const dimName = data.dim.split(':')[1] || data.dim;
            ctx.source.sendSuccess(
                Component.literal(`§e${name} §7→ §f${data.x}, ${data.y}, ${data.z} §8[${dimName}]`),
                false
            );
        }
        
        ctx.source.sendSuccess(
            Component.literal(`§7共计 §f${count}§7 个传送点`),
            false
        );
        
        return 1;
    }));
    
    // ====== /warp to <名称> ======
    const toLiteral = Commands.literal('to');
    const toNameArgument = Commands.argument('name', Arguments.STRING.create(event));
    
    // 添加Tab补全建议
    toNameArgument.suggests((ctx, builder) => {
        const player = ctx.source.player;
        if (player) {
            const warps = WarpManager.readWarps(player);
            Object.keys(warps).forEach(name => {
                builder.suggest(name);
            });
        }
        return builder.buildFuture();
    });
    
    toNameArgument.executes(ctx => {
        const player = ctx.source.player;
        const name = Arguments.STRING.getResult(ctx, 'name');
        
        if (!name) {
            ctx.source.sendFailure(Component.literal('§c请输入传送点名称'));
            return 0;
        }
        
        const warps = WarpManager.readWarps(player);
        const warp = warps[name];
        
        if (!warp) {
            ctx.source.sendFailure(Component.literal(`§c传送点"${name}"不存在`));
            return 0;
        }
        
        // 执行传送
        try {
            player.teleportTo(
                warp.dim,
                warp.x + 0.5, // 传送到方块中心
                warp.y,
                warp.z + 0.5,
                player.yaw || 0, // 保持当前朝向
                player.pitch || 0
            );
            
            ctx.source.sendSuccess(
                Component.literal(`§a已传送到"${name}"\n§7位置: §f${warp.x}, ${warp.y}, ${warp.z}`),
                true
            );
            return 1;
        } catch(e) {
            console.error('[Warp] 传送失败: ' + e);
            ctx.source.sendFailure(Component.literal('§c传送失败'));
            return 0;
        }
    });
    
    toLiteral.then(toNameArgument);
    warp.then(toLiteral);
    
    // ====== /warp delete <名称> ======
    const deleteLiteral = Commands.literal('delete');
    const deleteNameArgument = Commands.argument('name', Arguments.STRING.create(event));
    
    // Tab补全
    deleteNameArgument.suggests((ctx, builder) => {
        const player = ctx.source.player;
        if (player) {
            const warps = WarpManager.readWarps(player);
            Object.keys(warps).forEach(name => {
                builder.suggest(name);
            });
        }
        return builder.buildFuture();
    });
    
    deleteNameArgument.executes(ctx => {
        const player = ctx.source.player;
        const name = Arguments.STRING.getResult(ctx, 'name');
        
        if (!name) {
            ctx.source.sendFailure(Component.literal('§c请输入传送点名称'));
            return 0;
        }
        
        const warps = WarpManager.readWarps(player);
        if (!warps[name]) {
            ctx.source.sendFailure(Component.literal(`§c传送点"${name}"不存在`));
            return 0;
        }
        
        delete warps[name];
        
        if (WarpManager.saveWarps(player, warps)) {
            ctx.source.sendSuccess(Component.literal(`§a已删除传送点"${name}"`), true);
            return 1;
        }
        
        ctx.source.sendFailure(Component.literal('§c删除失败'));
        return 0;
    });
    
    deleteLiteral.then(deleteNameArgument);
    warp.then(deleteLiteral);
    
    // 注册命令
    event.register(warp);
    console.log('[Warp] 所有指令注册完成');
});

console.log('[Warp] 系统加载完成，等待游戏重启...');