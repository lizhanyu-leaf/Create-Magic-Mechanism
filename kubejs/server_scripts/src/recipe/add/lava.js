ServerEvents.recipes(event => { 

    const { create, v } = event.recipes

    // 熔岩和烈焰蛋糕混合
    create.mixing(
        [
            Fluid.of('minecraft:lava', 500),
            'create:blaze_cake'
        ],
        [
            Fluid.of('kubejs:redstone_diluent', 500),
            'create:blaze_cake'
        ]
    ).id('kubejs:lava/mixing_lava_with_blaze_cake')

    // 创造烈焰蛋糕压缩
    create.compacting(
        [
            Fluid.of('minecraft:lava', 500),
            'create:creative_blaze_cake'
        ],
        'create:creative_blaze_cake'
    ).id('kubejs:lava/compacting_creative_blaze_cake')

    // 熔岩和圆石混合
    create.mixing(
        [
            Fluid.of('minecraft:lava', 500),
            'create:blaze_cake'
        ],
        [
            '16x minecraft:cobblestone',
            'create:blaze_cake'
        ]
    ).id('kubejs:lava/mixing_lava_with_cobblestone_and_blaze_cake')

})