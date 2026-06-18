ServerEvents.recipes(event => {
    const {create, createoreexcavation, 
        vintageimprovements, minecraft, kubejs} = event.recipes

    // unlock_sturdy_knob
    if (global.technology.get_technology('unlock_sturdy_knob')) {
        event.replaceInput(
            { input: 'minecraft:dried_kelp'},
            'minecraft:dried_kelp',
            'kubejs:precision_mechanism_1'
        )
    } else {
        event.remove(
            { input: 'minecraft:dried_kelp'}
        )
    }
    
    // basic_logistics
    if (global.technology.get_technology('basic_logistics')) {
        minecraft.crafting_shaped(
            'create:belt_connector',
            [
                'aaa',
                'bbb'
            ],
            {
                a: 'create:sturdy_sheet',
                b: 'createcompression:compressed_obsidian_1x'
            }
        )
    } else {
        event.remove({id: 'create:crafting/logistics/andesite_funnel'})
        event.remove({id: 'create:crafting/logistics/andesite_tunnel'})
    }

    // basic_storage
    if (global.technology.get_technology('basic_storage')) {
        event.replaceInput(
            {mod: 'sophisticatedstorage', input: 'minecraft:lever'},
            'minecraft:lever',
            'kubejs:precision_mechanism_1'
        )
    } else {
        event.remove({mod: 'sophisticatedstorage', input: 'minecraft:lever'})
        event.remove({type: 'sophisticatedstorage:generic_wood_storage'})
    }

    // basic_storage_upgrade
    if (!global.technology.get_technology('basic_storage_upgrade')) {
        event.remove({output: 'sophisticatedstorage:stack_upgrade_tier_1'})
        event.remove({output: 'sophisticatedstorage:stack_upgrade_tier_1_plus'})
        event.remove({output: 'sophisticatedstorage:stack_upgrade_tier_2'})
    }

    // industrial_iron_smelting
    if (global.technology.get_technology('industrial_iron_smelting')){
        create.compacting(
            [
                '2x create_dd:industrial_iron_ingot'
            ],
            [
                Fluid.of('minecraft:lava', 250),
                '2x minecraft:iron_ingot',
                'minecraft:redstone_block'
            ]
        ).superheated()
        .id('kubejs:compacting/industrial_iron_smelting')
    }

    // sturdy_sheet_smithing
    event.remove({id: 'create:sequenced_assembly/sturdy_sheet'})
    if (global.technology.get_technology('sturdy_sheet_smithing'))
        create.compacting(
            '2x create:sturdy_sheet',
            [
                'minecraft:obsidian',
                Fluid.of('minecraft:lava', 250)
            ]
        ).superheated().id('kubejs:compacting/sturdy_sheet_smithing')

    // mb_mechanical_furnace
    if (!global.technology.get_technology('mb_mechanical_furnace'))
        event.remove({type: 'kubejs:mechanical_furnace_recipe'})
    else {
        create.deploying(
            'kubejs:mechanical_furnace',
            [
                'minecraft:iron_block',
                'create:sturdy_sheet'
            ]
        )
        kubejs.mechanical_furnace_recipe()
            .id('kubejs:mechanical_furnace_recipe/mb_mechanical_furnace/1')
            .inputItems('5x minecraft:iron_ingot')
            .inputFluids('minecraft:lava 2500')
            .outputItems('10x create:andesite_alloy')

        // Tin
        if (global.technology.get_technology('tin_smelting')) {
            kubejs.mechanical_furnace_recipe()
                .id('kubejs:mechanical_furnace_recipe/tin_smelting')
                .inputItems('5x unify:raw_tin')
                .inputFluids('kubejs:strange_potion 1000')
                .outputItems('2x unify:tin_ingot')
        }

        // Silver
        if (global.technology.get_technology('silver_smelting')) {
            kubejs.mechanical_furnace_recipe()
                .id('kubejs:mechanical_furnace_recipe/silver_smelting')
                .inputItems('5x unify:raw_silver')
                .inputFluids('kubejs:strange_potion 1000')
                .outputItems('2x unify:silver_ingot')
        }

        // Zinc
        if (global.technology.get_technology('zinc_smelting')) {
            kubejs.mechanical_furnace_recipe()
                .id('kubejs:mechanical_furnace_recipe/zinc_smelting')
                .inputItems('5x create:raw_zinc')
                .inputFluids('kubejs:strange_potion 1000')
                .outputItems('2x create:zinc_ingot')
        }

        // obsidian
        if (global.technology.get_technology('obsidian_smelting')) {
            kubejs.mechanical_furnace_recipe()
                .id('kubejs:mechanical_furnace_recipe/obsidian_smelting/1')
                .inputFluids('minecraft:lava 2000', 'minecraft:water 2000')
                .outputItems('2x minecraft:obsidian')

            kubejs.mechanical_furnace_recipe()
                .id('kubejs:mechanical_furnace_recipe/obsidian_smelting/2')
                .inputItems('5x minecraft:obsidian')
                .inputFluids('kubejs:strange_potion 1000')
                .outputItems('2x kubejs:obsidian_ingot')
        }
    }

    // steel_smelting
    if (global.technology.get_technology('steel_smelting')) {
        create.compacting(
            [
                '3x kubejs:incomplete_steel'
            ],
            [
                '2x create:sturdy_sheet',
                '4x create_dd:industrial_iron_ingot'
            ]
        ).superheated()
        .id('kubejs:compacting/steel_smelting/1')

        kubejs.mechanical_furnace_recipe()
            .id('kubejs:mechanical_furnace_recipe/steel_smelting/2')
            .inputItems('5x kubejs:incomplete_steel')
            .inputFluids('kubejs:redstone_diluent 2500', 'kubejs:strange_potion 1000')
            .outputItems('unify:steel_ingot')
    }

    // redstone_circuit
    if (global.technology.get_technology('redstone_circuit')) {
        create.sequenced_assembly(
            'kubejs:redstone_sheet',
            'kubejs:charging_iron_sheet',
            [
                create.cutting('kubejs:incomplete_redstone_sheet', 'kubejs:incomplete_redstone_sheet'),
                create.deploying('kubejs:incomplete_redstone_sheet', ['kubejs:incomplete_redstone_sheet', 'kubejs:precision_mechanism_2']),
                create.deploying('kubejs:incomplete_redstone_sheet', ['kubejs:incomplete_redstone_sheet', 'minecraft:redstone_block']),
                create.filling('kubejs:incomplete_redstone_sheet', ['kubejs:incomplete_redstone_sheet', Fluid.of('kubejs:redstone_diluent', 250)]),
                create.pressing('kubejs:incomplete_redstone_sheet', 'kubejs:incomplete_redstone_sheet'),
                create.deploying('kubejs:incomplete_redstone_sheet', ['kubejs:incomplete_redstone_sheet', 'minecraft:redstone'])
            ],
            'kubejs:incomplete_redstone_sheet', 5
        ).id('kubejs:sequenced_assembly/redstone_circuit')

        vintageimprovements.vibrating(
            'vintageimprovements:redstone_module',
            'kubejs:redstone_sheet'
        ).id('kubejs:vibrating/redstone_circuit')
    }

    // inductive_mechanism
    event.remove({output: 'create_dd:inductive_mechanism'})
    if (global.technology.get_technology('inductive_mechanism')) {
        create.sequenced_assembly(
            ['create_dd:inductive_mechanism'],
            ['create_dd:andesite_sheet'],
            [
                create.deploying('create_dd:incomplete_inductive_mechanism',
                    ['create_dd:incomplete_inductive_mechanism', 'create:cogwheel']),

                create.deploying('create_dd:incomplete_inductive_mechanism',
                    ['create_dd:incomplete_inductive_mechanism', 'create:large_cogwheel']),

                create.deploying('create_dd:incomplete_inductive_mechanism',
                    ['create_dd:incomplete_inductive_mechanism', 'create:andesite_alloy']),

                create.deploying('create_dd:incomplete_inductive_mechanism',
                    ['create_dd:incomplete_inductive_mechanism', 'unify:steel_rod']),

                create.deploying('create_dd:incomplete_inductive_mechanism',
                    ['create_dd:incomplete_inductive_mechanism', 'kubejs:precision_mechanism_1']),

                create.deploying('create_dd:incomplete_inductive_mechanism',
                    ['create_dd:incomplete_inductive_mechanism', 'createoreexcavation:drill']).keepHeldItem(),
            ],
            'create_dd:incomplete_inductive_mechanism', 8
        ).id('kubejs:sequenced_assembly/inductive_mechanism')
    }

    //basic_chain_transmission
    event.remove({output: 'minecraft:chain'})
    if (global.technology.get_technology('basic_chain_transmission')) {
        create.sequenced_assembly(
            'create:chain_conveyor',
            'create:large_cogwheel',
            [
                create.deploying(
                    'kubejs:incomplete_andesite_mechine',
                    [
                        'kubejs:incomplete_andesite_mechine',
                        'create:andesite_casing'
                    ]
                ),
                create.deploying(
                    'kubejs:incomplete_andesite_mechine',
                    [
                        'kubejs:incomplete_andesite_mechine',
                        'create_dd:inductive_mechanism'
                    ]
                ),
                create.deploying(
                    'kubejs:incomplete_andesite_mechine',
                    [
                        'kubejs:incomplete_andesite_mechine',
                        'unify:steel_sheet'
                    ]
                )
            ],
            'kubejs:incomplete_andesite_mechine', 4
        ).id('kubejs:sequenced_assembly/basic_chain_transmission')
        minecraft.crafting_shaped(
            'minecraft:chain',
            [
                'n',
                'i',
                'n'
            ],
            {
                n: 'unify:steel_nugget',
                i: 'unify:steel_ingot'
            }
        )
    }

    // strange_potion
    if (global.technology.get_technology('strange_potion')) {
        // 奇异药水混合
        create.mixing(
            [
                Fluid.of('kubejs:strange_potion', 100)
            ],
            [
                Fluid.of('kubejs:redstone_diluent', 250),
                Fluid.of('minecraft:water', 250),
                'kubejs:redstone_sheet',
                'purple_dye'
            ],
            500
        ).id('kubejs:mixing/strange_potion/strange_potion_base')

        // 紫颂果奇异药水混合
        create.mixing(
            Fluid.of('kubejs:strange_potion', 500),
            [
                Fluid.of('minecraft:water', 500),
                'minecraft:chorus_fruit'
            ]
        ).id('kubejs:mixing/strange_potion/strange_potion_from_chorus_fruit')

        // 紫颂果加压
        event.recipes.vintageimprovements.pressurizing(
            [
                Item.of('minecraft:chorus_fruit', 5),
                Item.of('minecraft:chorus_fruit', 1).withChance(0.5),
                Item.of('minecraft:chorus_fruit', 1).withChance(0.2),
                Item.of('minecraft:chorus_fruit', 1).withChance(0.2),
                Item.of('minecraft:chorus_fruit').withChance(0.1),
            ],
            [
                Fluid.of('kubejs:strange_potion', 1000),
            ]
        ).id('kubejs:pressurizing/strange_potion/chorus_fruit')
    }

    // andesite_input_and_output
    if (global.technology.get_technology('andesite_input_and_output')) {
        create.sequenced_assembly(
            ['kubejs:andesite_input'],
            ['create:andesite_casing'],
            [
                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'minecraft:emerald']),

                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'kubejs:redstone_sheet']),

                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'unify:steel_sheet']),

                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'create_dd:andesite_sheet']),
            ],
            'kubejs:incomplete_andesite_mechine', 8
        ).id('kubejs:sequenced_assembly/andesite_input_and_output/andesite_input')

        create.sequenced_assembly(
            ['kubejs:andesite_output'],
            ['create:andesite_casing'],
            [
                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'minecraft:redstone']),

                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'kubejs:redstone_sheet']),

                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'unify:steel_sheet']),

                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'create_dd:andesite_sheet']),
            ],
            'kubejs:incomplete_andesite_mechine', 8
        ).id('kubejs:sequenced_assembly/andesite_input_and_output/andesite_output')
    }

    // mb_automated_assembly_station
    if (global.technology.get_technology('mb_automated_assembly_station')) {
        create.sequenced_assembly(
            ['kubejs:automated_assembly_station'],
            ['create:andesite_casing'],
            [
                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'create:belt_connector']),

                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'kubejs:redstone_sheet']),

                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'unify:steel_sheet']),
            ],
            'kubejs:incomplete_andesite_mechine', 4
        ).id('kubejs:sequenced_assembly/mb_automated_assembly_station/automated_assembly_station')

        kubejs.automated_assembly_station()
            .id('kubejs:automated_assembly_station/belt')
            .duration(20)
            .inputItems(Item.of('create:sturdy_sheet', 5), Item.of('kubejs:precision_mechanism_1', 10))
            .outputItems(Item.of('create:belt_connector'))

        kubejs.automated_assembly_station()
            .id('kubejs:automated_assembly_station/simple_schematic/mechanical_furnace')
            .duration(20)
            .inputItems(Item.of('kubejs:mechanical_furnace'), Item.of('create:industrial_iron_block', 16), Item.of('create:blaze_burner', 10))
            .outputItems(Item.of('createsimpleschematic:simple_schematic', {File: "[多方块机器] 工业炉.nbt"}).strongNBT())
        
        kubejs.automated_assembly_station()
            .id('kubejs:automated_assembly_station/simple_schematic/automated_assembly_station')
            .duration(20)
            .inputItems(Item.of('kubejs:automated_assembly_station'), Item.of('create:andesite_casing', 32), Item.of('kubejs:andesite_input'), Item.of('kubejs:andesite_output'))
            .outputItems(Item.of('createsimpleschematic:simple_schematic', {File: "[多方块机器] 自动化装配站.nbt"}).strongNBT())
    }

    // set_tray
    if (global.technology.get_technology('set_tray')) {
        create.sequenced_assembly(
            [Item.of('kubejs:set_tray').withChance(0.7), 
                Item.of('create_dd:industrial_iron_ingot').withChance(0.25),
                Item.of('5x white_dye').withChance(0.05)],
            ['create_dd:industrial_iron_sheet'],
            [
                create.deploying(
                    'kubejs:incomplete_iron_products',
                    [
                        'kubejs:incomplete_iron_products',
                        'kubejs:precision_mechanism_2'
                    ]
                ),

                create.filling(
                    'kubejs:incomplete_iron_products',
                    [
                        'kubejs:incomplete_iron_products',
                        Fluid.of('kubejs:white_dye_diluent', 250)
                    ]
                ),

                vintageimprovements.vibrating(
                    'kubejs:incomplete_iron_products',
                    'kubejs:incomplete_iron_products'
                ).processingTime(90)
            ],
            'kubejs:incomplete_iron_products', 2
        ).id('kubejs:sequenced_assembly/set_tray')
    }

    // incomplete_precision_mechanism_3
    if (global.technology.get_technology('incomplete_precision_mechanism_3')) {
        create.sequenced_assembly(
            'kubejs:incomplete_precision_mechanism_3',
            'create:cogwheel',
            [
                create.deploying('kubejs:incomplete_andesite_mechine', 
                    ['kubejs:incomplete_andesite_mechine', 'create:gearbox']),
                create.deploying('kubejs:incomplete_andesite_mechine', 
                    ['kubejs:incomplete_andesite_mechine', 'create:gearshift']),
                create.deploying('kubejs:incomplete_andesite_mechine', 
                    ['kubejs:incomplete_andesite_mechine', 'create_connected:encased_chain_cogwheel']),
                create.deploying('kubejs:incomplete_andesite_mechine', 
                    ['kubejs:incomplete_andesite_mechine', 'create:encased_chain_drive']),
                create.deploying('kubejs:incomplete_andesite_mechine', 
                    ['kubejs:incomplete_andesite_mechine', 'create_connected:parallel_gearbox']),
                create.deploying('kubejs:incomplete_andesite_mechine', 
                    ['kubejs:incomplete_andesite_mechine', 'create_connected:six_way_gearbox']),

            ],
            'kubejs:incomplete_andesite_mechine', 1
        ).id('kubejs:sequenced_assembly/incomplete_precision_mechanism_3')
    }

    // precision_mechanism_3
    if (global.technology.get_technology('precision_mechanism_3')) {
        create.sequenced_assembly(
            'kubejs:precision_mechanism_3',
            'kubejs:incomplete_precision_mechanism_3',
            [
                create.deploying('kubejs:incomplete_andesite_mechine', 
                    ['kubejs:incomplete_andesite_mechine', 'create_dd:andesite_sheet']),

                create.deploying('kubejs:incomplete_andesite_mechine', 
                    ['kubejs:incomplete_andesite_mechine', 'unify:steel_rod']),

                create.deploying('kubejs:incomplete_andesite_mechine', 
                    ['kubejs:incomplete_andesite_mechine', 'unify:steel_wire']),

                create.deploying('kubejs:incomplete_andesite_mechine', 
                    ['kubejs:incomplete_andesite_mechine', 'create:cogwheel']),

                create.deploying('kubejs:incomplete_andesite_mechine', 
                    ['kubejs:incomplete_andesite_mechine', 'create:large_cogwheel']),

                create.cutting('kubejs:incomplete_andesite_mechine', 'kubejs:incomplete_andesite_mechine')
            ],
            'kubejs:incomplete_andesite_mechine',
            global.technology.get_technology('simple_precision_mechanism_3_recipe') ? 4 : 16
        ).id('kubejs:sequenced_assembly/precision_mechanism_3')
    }

    // bronze_smelting
    if (global.technology.get_technology('bronze_smelting')) {
        create.compacting(
            'unify:bronze_ingot',
            [
                'unify:tin_ingot',
                'minecraft:copper_ingot'
            ]
        ).heated().id('kubejs:compacting/bronze_ingot')
    }

    // smart_logistics
    if (global.technology.get_technology('smart_logistics')) {
        event.shaped(
            'create:brass_funnel',
            [
                'a',
                'b',
                'c'
            ],
            {
                a: 'create_dd:inductive_mechanism',
                b: 'unify:bronze_ingot',
                c: 'kubejs:precision_mechanism_1'
            }
        ).id('kubejs:andesite_changes/shaped_brass_funnel_from_precison_mechanisms')

        event.shaped(
            'create:brass_tunnel',
            [
                'a ',
                'bb',
                'cc'
            ],
            {
                a: 'create_dd:inductive_mechanism',
                b: 'unify:bronze_ingot',
                c: 'kubejs:precision_mechanism_1'
            }
        ).id('kubejs:andesite_changes/shaped_brass_tunnel_from_precison_mechanisms')
    } else {
        event.remove({ output: 'create:brass_funnel' })
        event.remove({ output: 'create:brass_tunnel' })
    }

    // seed_oil
    if (global.technology.get_technology('seed_oil')) {
        vintageimprovements.pressurizing(
            [
                Fluid.of('createaddition:seed_oil', 500)
            ],
            [
                'wheat_seeds',
                'wheat_seeds'
            ]
        ).processingTime(60).heated().id('kubejs:pressurizing/seed_oil/seed_oil')

        vintageimprovements.vacuumizing(
            Fluid.of('kubejs:slime', 100),
            [
                Fluid.of('createaddition:seed_oil', 100),
                'minecraft:slime_ball',
                Fluid.of('minecraft:water', 500)
            ]
        ).secondaryFluidInput(1).id('kubejs:vacuumizing/seed_oil/slime')
    }

    // electron_tube
    if (global.technology.get_technology('electron_tube')) {
        create.sequenced_assembly(
            '6x create:electron_tube',
            'kubejs:electron_tube_substrate',
            [
                create.deploying('kubejs:electron_tube_substrate', ['kubejs:electron_tube_substrate', 'unify:steel_sheet']),
                create.filling('kubejs:electron_tube_substrate', ['kubejs:electron_tube_substrate', Fluid.of('kubejs:slime', 100)]),
                create.deploying('kubejs:electron_tube_substrate', ['kubejs:electron_tube_substrate', 'create:polished_rose_quartz']),
                vintageimprovements.vibrating(
                    'kubejs:electron_tube_substrate',
                    'kubejs:electron_tube_substrate'
                ),
                create.deploying('kubejs:electron_tube_substrate', ['kubejs:electron_tube_substrate', 'kubejs:precision_mechanism_1']),
                create.cutting('kubejs:electron_tube_substrate', ['kubejs:electron_tube_substrate', 'kubejs:electron_tube_substrate'])
            ],
            'kubejs:electron_tube_substrate', 8
        ).id('kubejs:sequenced_assembly/electron_tube')
    }

    // intermediate_storage_upgrade
    if (global.technology.get_technology('intermediate_storage_upgrade')) {
        event.replaceInput(
            { id: 'sophisticatedstorage:stack_upgrade_tier_3' },
            '#forge:storage_blocks/gold',
            'unify:bronze_block'
        )
        event.replaceInput(
            { id: 'sophisticatedstorage:stack_upgrade_tier_3' },
            '#forge:ingots/gold',
            'unify:bronze_ingot'
        )

        event.replaceInput(
            { id: 'sophisticatedstorage:stack_upgrade_tier_4' },
            '#forge:storage_blocks/diamond',
            'unify:silver_block'
        )

        event.replaceInput(
            { id: 'sophisticatedstorage:stack_upgrade_tier_4' },
            '#forge:gems/diamond',
            'unify:silver_ingot'
        )

        event.replaceInput(
            { id: 'sophisticatedstorage:stack_upgrade_tier_5' },
            '#forge:storage_blocks/netherite',
            'kubejs:obsidian_ingot'
        )

        event.replaceInput(
            { id: 'sophisticatedstorage:stack_upgrade_tier_5' },
            '#forge:ingots/netherite',
            'create:sturdy_sheet'
        )

    } else {
        event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_3' })
        event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_4' })
        event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_5' })
        event.remove({ output: 'sophisticatedstorage:stack_upgrade_omega_tier' })
    }

    // smart_storage
    if (!global.technology.get_technology('smart_storage')) {
        event.remove({ output: 'sophisticatedstorage:storage_output' })
        event.remove({ output: 'sophisticatedstorage:storage_input' })
        event.remove({ output: 'sophisticatedstorage:storage_io' })
        event.remove({ output: 'sophisticatedstorage:controller' })
    }
})