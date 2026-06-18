global.technology = {
    /**
     * 
     * @returns file 'config.json' path
     */
    get_path: function() {
        if (global.seed_int == null) {
            return null
        }

        var fileName = 'config' + '.json';
        var fileDir = `kubejs/technology/${global.seed_int}/`
        var filePath = fileDir + fileName;

        // // 如果目录不存在，先创建目录
        // if (!FilesJS.exists(fileDir)) {
        //     // 创建目录
        //     FilesJS.createDirectory(fileDir)
        // }


        // 确保文件存在
        if (!FilesJS.exists(filePath)) {
            return null
        }

        return filePath
    },

    /**
     * 
     * @param {string} id 达成的科技的Id
     * @param {Internal.MinecraftServer} server 服务端对象
     */
    grant_technology: function(id, server) {
        const path = this.get_path()
        if (path == null) {
            console.log('[Technology] 解锁科技失败')
            return;
        }

        if (this.get_technology(id)) {
            return;
        }

        try {
            if (FilesJS.exists(path)) {
                var file = FilesJS.readFile(path);
                var content = JSON.parse(file)
                content.push(id);
                console.log('[Technology] 科技解锁：' + id)
                console.log(content)
                FilesJS.writeFile(path, JSON.stringify(content, null, 2))

                global.should_reload_technology = true
                server.getPlayerList().getPlayers()[0].runCommand('enable_technology')
            }
        } catch(e) {
            console.error('[Technology] 读取失败: ' + e);
        }

    },

    /**
     * 
     * @param {string} id 获取的科技的Id
     * @returns {boolean} 获取结果
     */
    get_technology: function(id) {

        console.log('[Technology] 获取科技：' + id)

        const path = this.get_path()
        if (path == null) {
            console.log('[Technology] 获取科技失败')
            return false;
        }

        try {
            if (FilesJS.exists(path)) {
                var file = FilesJS.readFile(path);
                var content = JSON.parse(file)
                console.log('[Technology] 获取科技成功')
                let returned = content.includes(id)
                console.log('[Technology] 获取科技：' + returned)
                return returned
            }
        } catch(e) {
            console.error('[Technology] 读取失败: ' + e);
            return false
        }
    }
}

ServerEvents.loaded(event => {
    global.should_reload_technology = true

    const fileName = 'config' + '.json';
    const fileDir = `kubejs/technology/${global.seed_int}/`
    const filePath = fileDir + fileName;

    // 如果目录不存在，先创建目录
    if (!FilesJS.exists(fileDir)) {
        // 创建目录
        FilesJS.createDirectory(fileDir)
    }


    // 确保文件存在
    if (!FilesJS.exists(filePath)) {
        // 创建文件
        FilesJS.writeFile(filePath, '[]');
    }
})

PlayerEvents.loggedIn(event => {
    const player = event.player
    console.log(`[Technology] 玩家 ${player.name} 登录，同步科技...`);
    
    // 为玩家同步科技
    player.runCommand('enable_technology')
    
    console.log(`[Technology] 玩家 ${player.name} 科技同步完成`);
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(
        Commands.literal('enable_technology')
            .requires(source => source.hasPermission(0))
            .executes(ctx => {
                if (!global.should_reload_technology) {
                    ctx.source.player.tell('§a科技已启用')
                    return 0
                }

                if (ctx.source.player) {
                    ctx.source.player.tell('§a正在启用科技...')
                }

                // 执行原版的 /reload 命令
                let server = ctx.source.server
                server.runCommandSilent('reload')

                global.should_reload_technology = false

                const fileName = 'config' + '.json';
                const fileDir = `kubejs/technology/${global.seed_int}/`
                const filePath = fileDir + fileName;

                // 如果目录不存在，先创建目录
                if (!FilesJS.exists(fileDir)) {
                    // 创建目录
                    FilesJS.createDirectory(fileDir)
                }


                // 确保文件存在
                if (!FilesJS.exists(filePath)) {
                    // 创建文件
                    FilesJS.writeFile(filePath, '[]');
                }

                if (ctx.source.player) {
                    ctx.source.player.tell('§a启用科技成功')
                }
                
                return 1 // 返回成功
            })
    )
})