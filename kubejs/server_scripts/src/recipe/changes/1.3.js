ServerEvents.recipes(event => { 

    const { create, vintageimprovements } = event.recipes

    event.remove({ id: 'create:mixing/brass_ingot' })
    // 黄铜锭混合
    create.mixing(
        [
            'kubejs:sturdy_mechanism',
            'kubejs:blaze_mechanism',
            'create:brass_ingot'
        ],
        [
            'kubejs:sturdy_mechanism',
            'kubejs:blaze_mechanism',
            'kubejs:precision_mechanism_4',
            'minecraft:copper_ingot',
            'create:zinc_ingot',
            Fluid.of('kubejs:charged_brown_dye_solution', 125),
            Fluid.of('kubejs:charged_light_gray_dye_solution', 125)
        ]
    ).id('kubejs:brass_changes/mixing_brass_ingot_from_precison_mechanisms')

    event.remove({id:'create:crafting/materials/electron_tube'})
    // event.shaped('create:electron_tube', [
    //     'a',
    //     'b',
    //     'c'
    // ],
    // {
    //     a: 'create:polished_rose_quartz',
    //     b: 'create:brass_sheet',
    //     c: 'create:precision_mechanism'
    // })
    event.stonecutting(
        'kubejs:electron_tube_substrate',
        'create:iron_sheet'
    ).id('kubejs:brass_changes/stonecutting_electron_tube_substrate_from_iron_sheet')
    
    event.replaceInput(
        {or: [
            {id: 'minecraft:repeater'}, 
            {id: 'minecraft:comparator'}
        ]},
        'minecraft:stone',
        'kubejs:redstone_sheet'
    )

    event.replaceInput(
        {or: [
            {id: 'minecraft:dispenser'},
            {id: "minecraft:dropper"},
            {id: "minecraft:observer"},
            {id: 'minecraft:piston'},
            {id: 'minecraft:powered_rail'},
            {id: 'minecraft:detector_rail'},
        ]},
        'minecraft:redstone',
        'kubejs:redstone_precision_mechanism'
    )

    // event.remove({id: 'create:item_application/railway_casing'})
    event.replaceInput(
        {id: 'create:item_application/railway_casing'},
        'create:sturdy_sheet',
        'kubejs:sturdy_mechanism'
    )
    event.remove({id: 'create:crafting/kinetics/mechanical_crafter'})
    // 机械制造台装配（现在添加.id()）
    create.sequenced_assembly(
        '5x create:mechanical_crafter',
        'create:brass_casing',
        [
            create.deploying('kubejs:incomplete_brass_mechine', ['kubejs:incomplete_brass_mechine', 'create:andesite_alloy']),
            create.deploying('kubejs:incomplete_brass_mechine', ['kubejs:incomplete_brass_mechine', 'create:electron_tube']),
            create.deploying('kubejs:incomplete_brass_mechine', ['kubejs:incomplete_brass_mechine', 'create:electron_tube']),
            create.deploying('kubejs:incomplete_brass_mechine', ['kubejs:incomplete_brass_mechine', 'kubejs:colorful_mechanism'])
        ],
        'kubejs:incomplete_brass_mechine',
        2
    ).id('kubejs:brass_changes/sequenced_assembly_mechanical_crafter_from_brass_casing')

    // // 精密机制激光切割
    // vintageimprovements.laser_cutting(
    //     'create:precision_mechanism',
    //     'create:golden_sheet',
    //     5000,
    //     250
    // ).id('kubejs:brass_changes/laser_cutting_precision_mechanism_from_golden_sheet')

    create.sequenced_assembly(
        [
            Item.of('create:precision_mechanism').withChance(0.2),
            Item.of('kubejs:loose_precision_mechanism').withChance(0.5),
            Item.of('create:brass_ingot', 2).withChance(0.15),
            Item.of('kubejs:precision_mechanism_3').withChance(0.05),
            Item.of('create:sturdy_sheet').withChance(0.05),
            Item.of('kubejs:precision_mechanism_1').withChance(0.05)
        ],
        'create:brass_sheet',
        [
            vintageimprovements.laser_cutting(
                'create:incomplete_precision_mechanism',
                'create:incomplete_precision_mechanism',
                100000,
                2500
            ),
            create.filling('create:incomplete_precision_mechanism', [Fluid.of('kubejs:heat_lava', 250), 'create:incomplete_precision_mechanism']),
            create.filling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', Fluid.of('kubejs:slime', 250)]),
            create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:sturdy_sheet']),
            create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'kubejs:precision_mechanism_3']),
            vintageimprovements.polishing(
                'create:incomplete_precision_mechanism',
                'create:incomplete_precision_mechanism',
            ).speedLimits(2),
            create.filling('create:incomplete_precision_mechanism', [Fluid.of('kubejs:refrigerant', 250), 'create:incomplete_precision_mechanism']),
        ],
        'create:incomplete_precision_mechanism',
        2
    ).id('kubejs:brass_changes/sequenced_assembly_precision_mechanism_from_brass_sheet')

    // 电子管激光切割
    // vintageimprovements.laser_cutting(
    //     '5x create:electron_tube',
    //     'create:polished_rose_quartz',
    //     5000,
    //     250
    // ).id('kubejs:brass_changes/laser_cutting_electron_tube_from_rose_quartz')

    // electron_tube_advanced

    if (TechnologyTools.isActive('electron_tube_advanced')) {
        create.sequenced_assembly(
            '3x create:electron_tube',
            'create:polished_rose_quartz',
            [
                create.deploying('kubejs:electron_tube_substrate', ['kubejs:electron_tube_substrate', 'kubejs:precision_mechanism_1']),
                vintageimprovements.laser_cutting(
                    'kubejs:electron_tube_substrate',
                    'kubejs:electron_tube_substrate',
                    5000,
                    250
                )
            ],
            'kubejs:electron_tube_substrate',
            1
        )
    }

    function replaceSlimeBall(id) {
        event.replaceInput(
            {id: id},
            'minecraft:slime_ball',
            'kubejs:slime_mechanism'
        )
    }

    replaceSlimeBall('create:crafting/kinetics/sticky_mechanical_piston')
    replaceSlimeBall('create:crafting/kinetics/sticker')    
    replaceSlimeBall('createaddition:crafting/large_connector_gold')
    replaceSlimeBall('createaddition:crafting/large_connector_electrum')
    replaceSlimeBall('create_sa:slime_boots_recipe')
    replaceSlimeBall('create_sa:slime_helmet_recipe')

    function replaceWoodenSlabs(id) {
        event.replaceInput(
            {id: id},
            '#minecraft:wooden_slabs',
            'kubejs:slime_mechanism'
        )
    }

    replaceWoodenSlabs('create:crafting/kinetics/gantry_carriage')
    replaceWoodenSlabs('create:crafting/kinetics/clockwork_bearing')
    replaceWoodenSlabs('create:crafting/kinetics/windmill_bearing')
    replaceWoodenSlabs('create:crafting/kinetics/mechanical_bearing')

    event.replaceInput(
        {id: 'vintageimprovements:mechanical_crafting/laser'},
        'minecraft:glowstone_dust',
        'kubejs:colorful_mechanism'
    )

    event.replaceInput(
        {id: 'vintageimprovements:craft/laser'},
        'minecraft:redstone_block',
        'kubejs:redstone_precision_mechanism'
    )

    event.replaceInput(
        {id: 'vintageimprovements:craft/laser'},
        'minecraft:quartz',
        'kubejs:sturdy_mechanism'
    )

    event.replaceInput(
        {id: 'vintageimprovements:craft/laser'},
        'create:cogwheel',
        'createaddition:capacitor'
    )

    // // 石英激光切割
    // vintageimprovements.laser_cutting(
    //     Item.of('minecraft:quartz'),
    //     'minecraft:white_dye',
    //     2000,
    //     200
    // ).id('kubejs:brass_changes/laser_cutting_quartz_from_white_dye')

    create.filling(
        'minecraft:quartz',
        [
            'minecraft:amethyst_shard',
            Fluid.of('kubejs:charged_light_gray_dye_solution', 125)
        ]
    ).id('kubejs:filling/brass_changes/quartz_from_charged_light_gray_dye_solution')

    // 电金 nugget 部署
    create.filling(
        'createaddition:electrum_nugget',
        [
            'create:brass_nugget',
            Fluid.of('kubejs:charged_white_dye_solution', 125)
        ]
    ).id('kubejs:filling/brass_changes/electrum_nugget_from_brass_and_white_dye')

    // 钇合金锭部署
    create.deploying(
        'createcasing:chorium_ingot',
        [
            'createaddition:electrum_ingot',
            'minecraft:chorus_fruit'
        ]
    ).id('kubejs:brass_changes/deploying_chorium_ingot_from_electrum_and_chorus_fruit')

    // create.deploying(
    //     'createcasing:creative_casing',
    //     [
    //         'create:industrial_iron_block',
    //         'createcasing:chorium_ingot'
    //     ]
    // )

    // 自定义应用配方 - 创造外壳
    event.custom(
        {
            type: 'create:item_application',
            ingredients: [
                {
                    item: 'minecraft:bedrock'
                },
                {
                    item: 'createcasing:chorium_ingot'
                }
            ],
            results: [
                {
                    item: 'createcasing:creative_casing'
                }
            ]
        }
    ).id('kubejs:brass_changes/custom_item_application_creative_casing')

    event.custom({
        type: 'create:item_application',
        ingredients: [
            {
                item: 'create_connected:empty_fan_catalyst'
            },
            {
                item: 'minecraft:redstone_block'
            }
        ],
        results: [
                {
                    item: 'kubejs:fan_charging_catalyst'
                }
        ]
    }).id('kubejs:brass_changes/custom_item_application_fan_charging_catalyst')

    // 自定义应用配方 - 床岩
    event.custom(
        {
            type: 'create:item_application',
            ingredients: [
                {
                    item: 'createcasing:creative_casing'
                },
                {
                    item: 'kubejs:bedrock_powder'
                }
            ],
            results: [
                {
                    item: 'minecraft:bedrock'
                }
            ]
        }
    ).id('kubejs:brass_changes/custom_item_application_bedrock')

    event.replaceInput(
        {id: 'vintageimprovements:mechanical_crafting/laser'},
        'minecraft:red_stained_glass',
        'minecraft:redstone_block'
    )

    event.shapeless(
        Item.of('create:wrench').enchant('minecraft:sharpness', 127),
        [
            'create:wrench',
            'create_sa:brass_sword'
        ]
    )

    event.custom({
        type: 'createdieselgenerators:basin_fermenting',
        ingredients: [
            {
                item: 'minecraft:amethyst_shard'
            },
            {
                item: 'kubejs:experience_mechanism'
            }
        ],
        results: [
            {
                fluid: 'createdieselgenerators:ethanol',
                amount: 250
            },
            {
                item: 'kubejs:experience_mechanism'
            }
        ],
        processingTime: 10
    })

    event.custom({
        type: 'createdieselgenerators:basin_fermenting',
        ingredients: [
            {
                item: 'minecraft:charcoal'
            },
            {
                item: 'kubejs:experience_mechanism'
            },
            {
                fluid: 'kubejs:magic_potion',
                amount: 50
            }
        ],
        results: [
            {
                fluid: 'createdieselgenerators:crude_oil',
                amount: 500
            },
            {
                item: 'kubejs:experience_mechanism'
            }
        ],
        processingTime: 5
    })

    create.sequenced_assembly(
        'kubejs:mechanical_core',
        'create:polished_rose_quartz',
        [
            create.deploying(
                'kubejs:incomplete_mechanical_core',
                [
                    'kubejs:incomplete_mechanical_core',
                    'createcasing:railway_depot'
                ]
            ),

            create.deploying(
                'kubejs:incomplete_mechanical_core',
                [
                    'kubejs:incomplete_mechanical_core',
                    'create:railway_casing'
                ]
            ),

            create.deploying(
                'kubejs:incomplete_mechanical_core',
                [
                    'kubejs:incomplete_mechanical_core',
                    'create_sa:brass_pickaxe'
                ]
            ),

            create.deploying(
                'kubejs:incomplete_mechanical_core',
                [
                    'kubejs:incomplete_mechanical_core',
                    'kubejs:slime_mechanism'
                ]
            ),
        ],
        'kubejs:incomplete_mechanical_core',
        1
    ).id('kubejs:brass_changes/sequenced_assembly_mechanical_core')

    event.replaceInput(
        {id: 'vintageimprovements:craft/belt_grinder'},
        'vintageimprovements:grinder_belt',
        'kubejs:cardboard_mechanism'
    )

    event.remove({id: 'create_dd:compacting/industrial_iron_ingot'})
    event.remove({id:"vintageimprovements:pressing/andesite_alloy"})
    event.remove({id:"vintageimprovements:pressing/tin_ingot"})
    event.remove({id:"vintageimprovements:pressing/zinc_ingot"})
    event.remove({id:"createaddition:pressing/zinc_ingot"})

    event.remove({id:'create_dd:sequenced_assembly/integrated_circuit'})
    create.sequenced_assembly(
        'create_dd:integrated_circuit',
        'create_dd:lapis_sheet',
        [
            create.deploying(
                'create_dd:incomplete_integrated_circuit',
                [
                    'create_dd:incomplete_integrated_circuit',
                    'kubejs:redstone_sheet'
                ]
            ),

            vintageimprovements.laser_cutting(
                'create_dd:incomplete_integrated_circuit',
                'create_dd:incomplete_integrated_circuit',
                50000,
                1000
            ),

            create.filling(
                'create_dd:incomplete_integrated_circuit',
                [
                    'create_dd:incomplete_integrated_circuit',
                    Fluid.of('kubejs:slime', 250)
                ]
            ),

            create.deploying(
                'create_dd:incomplete_integrated_circuit',
                [
                    'create_dd:incomplete_integrated_circuit',
                    'create:brass_nugget'
                ]
            )
        ],
        'create_dd:incomplete_integrated_circuit', 2
    ).id('kubejs:sequenced_assembly/brass_changes/integrated_circuit')

    event.replaceInput(
        {id:'create:crafting/materials/transmitter'},
        'minecraft:redstone',
        'create_dd:integrated_circuit'
    )

    event.replaceInput(
        {id:'create:crafting/materials/transmitter'},
        'minecraft:lightning_rod',
        'kubejs:redstone_precision_mechanism'
    )
})