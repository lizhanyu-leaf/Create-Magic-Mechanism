// ==================== 基础精密机制配方 ====================

ServerEvents.recipes(event => {
    event.remove({id: 'create:sequenced_assembly/precision_mechanism'})

    const { create, vintageimprovements } = event.recipes

    function deploying(incomplete, input){
        return create.deploying(incomplete, [incomplete, input])
    }

    var incomplete_1 = 'create:golden_sheet'
    // 精密机制基材装配
    create.sequenced_assembly(
        'kubejs:precision_mechanism_substrate',
        'create:golden_sheet',
        [
            create.cutting(incomplete_1, incomplete_1),
            vintageimprovements.vibrating(incomplete_1, incomplete_1),
        ],
        incomplete_1,
        3
    ).id('kubejs:sequenced_assembly/precision_mechanism/precision_mechanism_substrate')

    var incomplete_3 = 'kubejs:incomplete_precision_redstone'
    // 精密机制2装配
    create.sequenced_assembly(
        'kubejs:precision_redstone',
        'minecraft:redstone_block',
        [
            create.pressing(incomplete_3, incomplete_3),
            create.deploying(incomplete_3, [incomplete_3, 'minecraft:redstone_torch']),
            create.deploying(incomplete_3, [incomplete_3, 'create:golden_sheet'])
        ],
        incomplete_3,
        3
    ).id('kubejs:sequenced_assembly/precision_mechanism/precision_redstone')

    var incomplete_7 = 'kubejs:incomplete_sturdy_knob'
    // 精密机制1装配2
    create.sequenced_assembly(
        [
            Item.of('kubejs:sturdy_knob').withChance(0.65),
            Item.of('create:sturdy_sheet').withChance(0.05),
            Item.of('minecraft:obsidian').withChance(0.3)
        ],
        'minecraft:obsidian',
        [
            create.pressing(incomplete_7, incomplete_7),
            create.pressing(incomplete_7, incomplete_7),
            create.pressing(incomplete_7, incomplete_7),
            vintageimprovements.curving(incomplete_7, incomplete_7).head('create:blaze_cake')
        ],
        incomplete_7,
        2
    ).technology('unlock_sturdy_knob')
    .id('kubejs:sequenced_assembly/precision_mechanism/sturdy_knob_from_obsidian')

    // 精密机制4部署
    create.deploying(
        '10x kubejs:solar_particle',
        [
            'minecraft:copper_ingot',
            'kubejs:blaze_mechanism'
        ]
    ).keepHeldItem().id('kubejs:deploying/precision_mechanism/solar_particle')

    // 精密机制和玫瑰石英混合
    create.mixing(
        [
            'create:precision_mechanism',
            'create:polished_rose_quartz'
        ],
        [
            'create:precision_mechanism',
            'minecraft:quartz',
            '8x minecraft:redstone'
        ]
    ).heated().id('kubejs:mixing/precision_mechanism/rose_quartz')
})

// ==================== 科技解锁配方 ====================

TechSystemEvents.onTechLoad('cmm:unlock_sturdy_knob', event => {
    const { create } = event.recipes
    var incomplete_2 = 'kubejs:incomplete_sturdy_knob'

    // 精密机制1装配
    create.sequenced_assembly(
        '6x kubejs:sturdy_knob',
        'create:sturdy_sheet',
        [
            create.filling(incomplete_2, [incomplete_2, Fluid.of('kubejs:slime', 500)]),
            vintageimprovements.curving(incomplete_2, incomplete_2, 1),
        ],
        incomplete_2,
        1
    ).id('kubejs:sequenced_assembly/precision_mechanism/sturdy_knob_from_sturdy_sheet')

    // 精密机制1激光切割
    event.recipes.vintageimprovements.laser_cutting(
        '3x kubejs:sturdy_knob',
        'create:sturdy_sheet',
        300000,
        5000
    ).id('kubejs:laser_cutting/precision_mechanism/sturdy_knob')
})

TechSystemEvents.onTechLoad('cmm:precision_redstone_advanced', event => {
    const { create, vintageimprovements } = event.recipes

    create.sequenced_assembly(
        'kubejs:precision_redstone',
        'create:golden_sheet',
        [
            vintageimprovements.curving('kubejs:incomplete_precision_redstone', 'kubejs:incomplete_precision_redstone').head('kubejs:redstone_precision_mechanism'),
            vintageimprovements.laser_cutting('kubejs:incomplete_precision_redstone', 'kubejs:incomplete_precision_redstone', 5000, 250),
        ],
        'kubejs:incomplete_precision_redstone',
        1
    ).id('kubejs:sequenced_assembly/precision_mechanism/precision_redstone')
})
