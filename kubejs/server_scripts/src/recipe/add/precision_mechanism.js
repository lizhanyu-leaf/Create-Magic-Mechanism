ServerEvents.recipes(event => { 
    event.remove({id: 'create:sequenced_assembly/precision_mechanism'})

    const { create, vintageimprovements } = event.recipes

    function deploying(incomplete, input){
        return create.deploying(incomplete, [incomplete, input])
    }

    var incomplete = 'create:incomplete_precision_mechanism'
    // 精密机制装配1（现在添加.id()）
    create.sequenced_assembly(
        Item.of('kubejs:loose_precision_mechanism'),
        Item.of('kubejs:precision_mechanism_substrate'),
        [
            create.cutting(incomplete, incomplete),
            create.deploying(incomplete, [incomplete, 'kubejs:precision_mechanism_1']),
            create.deploying(incomplete, [incomplete, 'kubejs:redstone_precision_mechanism']),
            create.deploying(incomplete, [incomplete, 'kubejs:precision_mechanism_3']),
            create.deploying(incomplete, [incomplete, 'create:brass_ingot']),
            vintageimprovements.curving(incomplete, incomplete).head('kubejs:blaze_mechanism')
        ],
        incomplete,
        1
    ).id('kubejs:sequenced_assembly/precision_mechanism/loose_precision_mechanism')

    var incomplete_1 = 'create:golden_sheet'
    // 精密机制基材装配（现在添加.id()）
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
    var incomplete_2 = 'kubejs:incomplete_precision_mechanism_1'
    // 精密机制1装配（现在添加.id()）
    if (TechnologyTools.isActive('unlock_sturdy_knob')){
        create.sequenced_assembly(
            '6x kubejs:precision_mechanism_1',
            'create:sturdy_sheet',
            [
                create.filling(incomplete_2, [incomplete_2, Fluid.of('kubejs:slime', 500)]),
                vintageimprovements.curving(incomplete_2, incomplete_2, 1),
            ],
            incomplete_2,
            1
        ).id('kubejs:sequenced_assembly/precision_mechanism/precision_mechanism_1_from_sturdy_sheet')
    }

    var incomplete_3 = 'kubejs:incomplete_precision_mechanism_2'
    // 精密机制2装配（现在添加.id()）
    create.sequenced_assembly(
        'kubejs:precision_mechanism_2',
        'minecraft:redstone_block',
        [
            create.pressing(incomplete_3, incomplete_3),
            create.deploying(incomplete_3, [incomplete_3, 'minecraft:redstone_torch']),
            create.deploying(incomplete_3, [incomplete_3, 'create:golden_sheet'])
        ],
        incomplete_3,
        3
    ).id('kubejs:sequenced_assembly/precision_mechanism/precision_mechanism_2')
    var incomplete_6 = 'create:copper_nugget'
    // 精密机制4装配（现在添加.id()）
    create.sequenced_assembly(
        'kubejs:precision_mechanism_4',
        'create:copper_nugget',
        [
            deploying(incomplete_6, 'minecraft:blaze_powder'),
            create.filling(incomplete_6, [incomplete_6, Fluid.of('minecraft:lava', 1000)])
        ],
        incomplete_6,
        5
    ).id('kubejs:sequenced_assembly/precision_mechanism/precision_mechanism_4')

    // 精密机制压缩
    // create.compacting(
    //     [
    //         'create:precision_mechanism',
    //         'kubejs:blaze_mechanism',
    //         'kubejs:sturdy_mechanism'
    //     ],
    //     [
    //         'kubejs:loose_precision_mechanism',
    //         'kubejs:blaze_mechanism',
    //         'kubejs:sturdy_mechanism'
    //     ]
    // ).superheated().id('kubejs:precision_mechanism/compacting_precision_mechanism_from_loose')

    create.sequenced_assembly(
        [
            '2x create:precision_mechanism',
            '3x create:precision_mechanism'
        ],
        'kubejs:loose_precision_mechanism',
        [
            create.filling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', Fluid.of('kubejs:heat_lava', 250)]),
            create.filling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', Fluid.of('kubejs:charged_yellow_dye_solution', 125)]),
            vintageimprovements.curving(
                'create:incomplete_precision_mechanism',
                'create:incomplete_precision_mechanism',
            ).head('kubejs:sturdy_mechanism'),
            create.pressing('create:incomplete_precision_mechanism','create:incomplete_precision_mechanism'),
            vintageimprovements.vibrating('create:incomplete_precision_mechanism','create:incomplete_precision_mechanism'),
            create.pressing('create:incomplete_precision_mechanism','create:incomplete_precision_mechanism'),
            create.pressing('create:incomplete_precision_mechanism','create:incomplete_precision_mechanism'),
            create.filling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', Fluid.of('kubejs:refrigerant', 250)]),
        ],
        'create:incomplete_precision_mechanism',
        2
    ).id('kubejs:sequenced_assembly/precision_mechanism/precision_mechanism_from_loose')

    vintageimprovements.vibrating(
        'kubejs:loose_precision_mechanism',
        'create:precision_mechanism', 500
    ).id('kubejs:vibrating/precision_mechanism/loose_precision_mechanism')

    var incomplete_7 = 'kubejs:incomplete_precision_mechanism_1'
    // 精密机制1装配2（现在添加.id()）
    if (TechnologyTools.isActive('unlock_sturdy_knob')){    
            create.sequenced_assembly(
            [
                Item.of('kubejs:precision_mechanism_1').withChance(0.65),
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
        ).id('kubejs:sequenced_assembly/precision_mechanism/precision_mechanism_1_from_obsidian')
    }
    // 精密机制4部署
    create.deploying(
        '10x kubejs:precision_mechanism_4',
        [
            'minecraft:copper_ingot',
            'kubejs:blaze_mechanism'
        ]
    ).keepHeldItem().id('kubejs:deploying/precision_mechanism/precision_mechanism_4')
    if (TechnologyTools.isActive('precision_mechanism_2_advanced')) {
        create.sequenced_assembly(
            'kubejs:precision_mechanism_2',
            'create:golden_sheet',
            [
                vintageimprovements.curving('kubejs:incomplete_precision_mechanism_2', 'kubejs:incomplete_precision_mechanism_2').head('kubejs:redstone_precision_mechanism'),
                vintageimprovements.laser_cutting('kubejs:incomplete_precision_mechanism_2', 'kubejs:incomplete_precision_mechanism_2', 5000, 250),
            ],
            'kubejs:incomplete_precision_mechanism_2',
            1
        ).id('kubejs:sequenced_assembly/precision_mechanism/precision_mechanism_2')
    }

    // #region Use

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

    // 精密机制1激光切割
    if (TechnologyTools.isActive('unlock_sturdy_knob')){
        event.recipes.vintageimprovements.laser_cutting(
            '3x kubejs:precision_mechanism_1',
            'create:sturdy_sheet',
            300000,
            5000
        ).id('kubejs:laser_cutting/precision_mechanism/precision_mechanism_1')
    }
    // #endregion
})