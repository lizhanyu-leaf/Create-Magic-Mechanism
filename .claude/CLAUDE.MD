# 项目背景：Minecraft 整合包（Forge 1.20.1 + KubeJS 6.5 + Create 6.0.8）

## 关于本项目

这是一个运行在 **Forge 47.4.10**（Minecraft 1.20.1）上的 Minecraft 整合包。核心玩法围绕 **Create（机械动力）6.0.8** 模组展开，所有自定义玩法逻辑、配方和机械交互都通过 **KubeJS 6.5** 来实现。

**核心依赖：**
- Forge：`47.4.10`
- Minecraft：`1.20.1`
- KubeJS：`6.5`
- Create（机械动力）：`6.0.8`
- Rhino：KubeJS 的 JavaScript 运行时环境
- Architectury API：跨模组加载器的兼容层

## KubeJS 目录结构

所有脚本都存放在整合包根目录的 `kubejs/` 文件夹中：

| 目录 | 用途 | 使用场景 |
| :--- | :--- | :--- |
| `startup_scripts/` | 全局配置、注册物品/方块 | 游戏启动时只需运行一次的代码 |
| `server_scripts/` | 服务端逻辑、事件监听、命令 | 配方修改、事件监听、Create 机械交互、数据持久化 |
| `client_scripts/` | 客户端渲染、HUD 界面 | UI 界面、客户端专属交互 |
| `data/` | 数据包内容 | 配方、战利品表、标签 |
| `assets/` | 资源包内容 | 纹理、模型、语言文件 |

## 编码规范与最佳实践

### 通用规则

1. **版本注意事项：** 
   - 物品 ID 统一使用 `mod:物品名` 格式（如 `create:andesite_alloy`）
   - KubeJS 6.5 运行在 **Forge** 环境下，调用 API 时注意区分
   - Create 6.0.8 的物品 ID 前缀为 `create:`

2. **类型提示：** 配合 VS Code + **ProbeJS** 可获取自动补全。在游戏内运行 `/probejs dump` 后，重启 VS Code 的 TypeScript 服务器即可刷新提示。

3. **事件作用域：** 持久性/全局改动用 `ServerEvents`，只有 UI 相关才用 `ClientEvents`。

4. **数据持久化：** 需要跨服务器重启保留的数据，使用 `server.persistentData` 存储。

5. **全局配置：** 把常量配置定义在 `startup_scripts` 中，通过 `global.xxxConfig` 暴露，避免重复定义。

6. **性能考虑：** 避免在 `tick` 类事件中写重逻辑。尽量使用防抖或节流处理。

## 权威 资料 / Wiki

1. KubeJS Wiki : https://kubejs.com/wiki

2. 数据包 资料 : https://zh.minecraft.wiki/w/%E6%95%B0%E6%8D%AE%E5%8C%85

3. 资源包 资料 : https://zh.minecraft.wiki/w/%E8%B5%84%E6%BA%90%E5%8C%85

4. KubeJS GitHub : https://github.com/kube-mods/kubejs

5. 机械动力 (Create) GitHub : https://github.com/Creators-of-Create/Create/tree/mc1.20.1/dev

6. JEI GitHub : https://github.com/mezz/JustEnoughItems