ServerEvents.recipes(event => { 

    const { create, vintageimprovements } = event.recipes
    event.remove({id: 'create:filling/blaze_cake'})
    event.remove({id: 'create:compacting/blaze_cake'})

    // 烈焰蛋糕底料混合
    create.mixing(
        'create:blaze_cake_base',
        [
            Fluid.of('minecraft:lava', 1000),
            'create:dough',
            '4x minecraft:blaze_powder',
            '16x create:cinder_flour'
        ]
    ).id('kubejs:blazecake/mixing_blaze_cake_base')

    // 烈焰蛋糕材料混合
    create.mixing(
        [
            '3x create:blaze_cake_base',
        ],
        [
            Fluid.of('minecraft:lava', 500),
            '4x create:cinder_flour',
            '2x minecraft:blaze_powder',
            'create:blaze_cake'
        ]
    ).superheated().id('kubejs:blazecake/mixing_blaze_cake_materials')

    // 烈焰蛋糕装配1（现在添加.id()）
    create.sequenced_assembly(
        'create:blaze_cake',
        'create:blaze_cake_base',
        [
            vintageimprovements.pressurizing('create:blaze_cake_base', [Fluid.of('minecraft:lava', 500), 'create:blaze_cake_base']).processingTime(200),
            create.deploying('create:blaze_cake_base', ['create:blaze_cake_base', 'minecraft:blaze_powder'])
        ],
        'create:blaze_cake_base',
        5
    ).id('kubejs:blazecake/sequenced_assembly_blaze_cake')

    // 烈焰蛋糕装配2（现在添加.id()）
    create.sequenced_assembly(
        'create:blaze_cake',
        'create:blaze_cake_base',
        [
            vintageimprovements.curving('create:blaze_cake_base', 'create:blaze_cake_base').head('create:blaze_cake'),
            create.filling('create:blaze_cake_base', ['create:blaze_cake_base', Fluid.of('minecraft:lava', 100)]),
        ],
        'create:blaze_cake_base',
        3
    ).id('kubejs:blazecake/sequenced_assembly_blaze_cake_alternative')

    // 烈焰棒弯曲
    vintageimprovements.curving('minecraft:blaze_rod', 'minecraft:stick').head('create:blaze_cake').id('kubejs:blazecake/curving_blaze_rod_to_stick')

    // 烈焰粉压制
    create.pressing([Item.of('minecraft:blaze_powder', 2), Item.of('minecraft:blaze_rod').withChance(0.5)], 'minecraft:blaze_rod').id('kubejs:blazecake/pressing_blaze_powder_from_rod')

    // 玫瑰石英弯曲
    vintageimprovements.curving('create:polished_rose_quartz', 'create:rose_quartz').head('create:blaze_cake').id('kubejs:blazecake/curving_polished_rose_quartz')

    // 烈焰蛋糕压缩
    create.compacting(
        Fluid.of('minecraft:lava', 1000),
        'create:blaze_cake'
    ).id('kubejs:blazecake/compacting_lava_from_blaze_cake')

    create.filling(
        'minecraft:blaze_powder',
        [
            'createdieselgenerators:wood_chip',
            Fluid.of('minecraft:lava', 100)
        ]
    )
})