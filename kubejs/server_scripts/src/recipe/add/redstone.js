ServerEvents.recipes(event => { 
    const { create } = event.recipes

    // 红石矿石相关
    create.deploying(
        'minecraft:redstone_ore',
        [
            'minecraft:stone',
            'minecraft:redstone'
        ]
    ).id('kubejs:redstone/deploying_redstone_ore')

    // 红石催化剂混合
    create.mixing(
        [
            Fluid.of('kubejs:redstone_catalyst', 1000),
            'minecraft:redstone_ore'
        ],
        [
            Fluid.of('minecraft:water', 100),
            'minecraft:redstone_ore'
        ],
        1
    ).id('kubejs:redstone/mixing_redstone_catalyst_from_ore')

    // 稀释剂制作
    create.compacting(
        Fluid.of('kubejs:redstone_diluent', 500),
        [
            Fluid.of('minecraft:water', 500),
            '3x minecraft:redstone'
        ]
    ).id('kubejs:redstone/compacting_redstone_diluent')

    // 红石填充
    create.filling(
        'minecraft:redstone',
        [
            Fluid.of('kubejs:redstone_catalyst', 250),
            'create:cinder_flour'
        ]
    ).id('kubejs:redstone/filling_redstone_from_cinder')

    // 下界岩填充
    create.filling(
        'minecraft:netherrack',
        [
            Fluid.of('minecraft:lava', 100),
            'minecraft:cobblestone'
        ]
    ).id('kubejs:redstone/filling_netherrack')

    // 圆石制作
    create.mixing(
        '16x minecraft:cobblestone',
        [
            Fluid.of('minecraft:lava', 100),
            Fluid.of('minecraft:water', 100),
        ]
    ).id('kubejs:redstone/mixing_cobblestone')

    // 熔岩粉制作
    create.crushing(
        '8x create:cinder_flour',
        'minecraft:magma_block'
    ).id('kubejs:redstone/crushing_cinder_flour')

    // 红石精密机械转换
    create.mixing(
        [
            'kubejs:redstone_catalyst_bucket',
            'kubejs:redstone_precision_mechanism'
        ],
        [
            'minecraft:bucket',
            'kubejs:redstone_precision_mechanism'
        ]
    ).id('kubejs:redstone/mixing_redstone_catalyst_bucket')
})