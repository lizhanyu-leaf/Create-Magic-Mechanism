ServerEvents.recipes(event => {
    const {create, createoreexcavation, 
        vintageimprovements, minecraft, kubejs} = event.recipes

    // unlock_sturdy_knob
    if (TechnologyTools.isActive('unlock_sturdy_knob')) {
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
    if (TechnologyTools.isActive('basic_logistics')) {
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
    if (TechnologyTools.isActive('basic_storage')) {
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
    if (!TechnologyTools.isActive('basic_storage_upgrade')) {
        event.remove({output: 'sophisticatedstorage:stack_upgrade_tier_1'})
        event.remove({output: 'sophisticatedstorage:stack_upgrade_tier_1_plus'})
        event.remove({output: 'sophisticatedstorage:stack_upgrade_tier_2'})
    }

    // industrial_iron_smelting
    if (TechnologyTools.isActive('industrial_iron_smelting')){
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
    if (TechnologyTools.isActive('sturdy_sheet_smithing'))
        create.compacting(
            '2x create:sturdy_sheet',
            [
                'minecraft:obsidian',
                Fluid.of('minecraft:lava', 250)
            ]
        ).superheated().id('kubejs:compacting/sturdy_sheet_smithing')

    // mb_mechanical_furnace
    if (!TechnologyTools.isActive('mb_mechanical_furnace'))
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
        if (TechnologyTools.isActive('tin_smelting')) {
            kubejs.mechanical_furnace_recipe()
                .id('kubejs:mechanical_furnace_recipe/tin_smelting')
                .inputItems('5x unify:raw_tin')
                .inputFluids('kubejs:strange_potion 1000')
                .outputItems('2x unify:tin_ingot')
        }

        // Silver
        if (TechnologyTools.isActive('silver_smelting')) {
            kubejs.mechanical_furnace_recipe()
                .id('kubejs:mechanical_furnace_recipe/silver_smelting')
                .inputItems('5x unify:raw_silver')
                .inputFluids('kubejs:strange_potion 1000')
                .outputItems('2x unify:silver_ingot')
        }

        // Zinc
        if (TechnologyTools.isActive('zinc_smelting')) {
            kubejs.mechanical_furnace_recipe()
                .id('kubejs:mechanical_furnace_recipe/zinc_smelting')
                .inputItems('5x create:raw_zinc')
                .inputFluids('kubejs:strange_potion 1000')
                .outputItems('2x create:zinc_ingot')
        }

        // obsidian
        if (TechnologyTools.isActive('obsidian_smelting')) {
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
    if (TechnologyTools.isActive('steel_smelting')) {
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
    if (TechnologyTools.isActive('redstone_circuit')) {
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
    if (TechnologyTools.isActive('inductive_mechanism')) {
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
    if (TechnologyTools.isActive('basic_chain_transmission')) {
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
    if (TechnologyTools.isActive('strange_potion')) {
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
    if (TechnologyTools.isActive('andesite_input_and_output')) {
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
    if (TechnologyTools.isActive('mb_automated_assembly_station')) {
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
    if (TechnologyTools.isActive('set_tray')) {
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
    if (TechnologyTools.isActive('incomplete_precision_mechanism_3')) {
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
    if (TechnologyTools.isActive('precision_mechanism_3')) {
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
            TechnologyTools.isActive('simple_precision_mechanism_3_recipe') ? 4 : 16
        ).id('kubejs:sequenced_assembly/precision_mechanism_3')
    }

    // bronze_smelting
    if (TechnologyTools.isActive('bronze_smelting')) {
        create.compacting(
            'unify:bronze_ingot',
            [
                'unify:tin_ingot',
                'minecraft:copper_ingot'
            ]
        ).heated().id('kubejs:compacting/bronze_ingot')
    }

    // smart_logistics
    if (TechnologyTools.isActive('smart_logistics')) {
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
    if (TechnologyTools.isActive('seed_oil')) {
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
    if (TechnologyTools.isActive('electron_tube')) {
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
    if (TechnologyTools.isActive('intermediate_storage_upgrade')) {
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
    if (!TechnologyTools.isActive('smart_storage')) {
        event.remove({ output: 'sophisticatedstorage:storage_output' })
        event.remove({ output: 'sophisticatedstorage:storage_input' })
        event.remove({ output: 'sophisticatedstorage:storage_io' })
        event.remove({ output: 'sophisticatedstorage:controller' })
    }

    // Dyes
    let dyes = ['red_dye', 'orange_dye', 'yellow_dye', 'green_dye', 'lime_dye', 'cyan_dye', 'light_blue_dye', 'blue_dye', 'purple_dye', 'magenta_dye', 'pink_dye', 'black_dye', 'gray_dye', 'light_gray_dye', 'white_dye', 'brown_dye']

    dyes.forEach(dye => {
        create.mixing(
            [
                Fluid.of(`kubejs:${dye}_diluent`, 250)
            ],
            [
                dye,
                Fluid.of('minecraft:water', 250)
            ]
        ).processingTime(125).id(`kubejs:mixing/dyes/${dye}_diluent`)
        .technology('dye_dilution')

        create.mixing(
            [
                'kubejs:colorful_mechanism',
                Fluid.of(`kubejs:${dye}_diluent`, 1000)
            ],
            [
                'kubejs:colorful_mechanism',
                dye,
                Fluid.of('minecraft:water', 250)
            ]
        ).processingTime(125).id(`kubejs:mixing/dyes/${dye}_diluent_1000`)
        .technology('colorful_mechanism')

        vintageimprovements.vacuumizing(
            [
                Fluid.of(`kubejs:${dye}_concentrate`, 250),
                Item.of(dye).withChance(0.25)
            ],
            [
                Fluid.of(`kubejs:${dye}_diluent`, 550),
                Fluid.of('kubejs:iridescent_concentrate', 50)
            ]
        ).processingTime(90).secondaryFluidInput(1).id(`kubejs:vacuumizing/dyes/${dye}_concentrate`)
        .technology('colorful_mechanism')

        vintageimprovements.pressurizing(
            [
                Fluid.of(`kubejs:refined_${dye}_solution`, 95),
                Fluid.of('minecraft:water', 250)
            ],
            [
                Fluid.of(`kubejs:${dye}_concentrate`, 100),
                Fluid.of('createaddition:seed_oil', 950),
                Fluid.of('kubejs:iridescent_concentrate', 20)
            ]
        ).processingTime(90).heated().secondaryFluidInput(1).secondaryFluidOutput(0).heated().id(`kubejs:pressurizing/dyes/refined_${dye}_solution`)
        .technology('dye_refining')

        vintageimprovements.pressurizing(
            [
                'kubejs:colorful_mechanism',
                Fluid.of(`kubejs:refined_${dye}_solution`, 95)
            ],
            [
                'kubejs:colorful_mechanism',
                Fluid.of(`kubejs:${dye}_concentrate`, 100),
                Fluid.of('createaddition:seed_oil', 950),
                Fluid.of('kubejs:iridescent_concentrate', 20)
            ]
        ).processingTime(60).heated().secondaryFluidInput(1).secondaryFluidOutput(0).heated().id(`kubejs:pressurizing/dyes/refined_${dye}_solution_with_colorful_mechanism`)
        .technology('dye_refining')

        vintageimprovements.pressurizing(
            [
                `kubejs:refined_${dye}`,
                'kubejs:colorful_mechanism',
                Fluid.of('minecraft:water', 100)
            ],
            [
                dye,
                'kubejs:colorful_mechanism',
                Fluid.of(`kubejs:refined_${dye}_solution`, 140),
                Fluid.of(`kubejs:${dye}_diluent`, 500)
            ]
        ).processingTime(156).secondaryFluidInput(0).secondaryFluidOutput(0).id(`kubejs:pressurizing/dyes/refined_${dye}_with_colorful_mechanism`)
        .technology('dye_refining')

        create.mixing(
            [
                Fluid.of(`kubejs:refined_${dye}_solution`, 140)
            ],
            [
                `kubejs:refined_${dye}`,
                Fluid.of('minecraft:water', 120),
                Fluid.of('kubejs:iridescent_concentrate', 20)
            ]
        ).heated().id(`kubejs:mixing/dyes/${dye}_solution`)
        .technology('dye_refining')

        if (dye != 'white_dye') {
            create.filling(
                `kubejs:refined_${dye}`,
                [
                    'kubejs:refined_white_dye',
                    Fluid.of(`kubejs:refined_${dye}_solution`, 120)
                ]
            ).id(`kubejs:filling/dyes/refined_${dye}_with_refined_white_dye`)
            .technology('dye_refining')
        }

        create.sequenced_assembly(
            `kubejs:charged_${dye}`,
            `kubejs:refined_${dye}`,
            [
                create.filling(dye, [dye, Fluid.of(`kubejs:refined_${dye}_solution`, 120)]),
                vintageimprovements.vibrating(dye, dye, 150),
                create.filling(dye, [dye, Fluid.of('kubejs:redstone_diluent', 1000)]),
                create.deploying(dye, [dye, 'minecraft:redstone_block']),
                vintageimprovements.pressurizing(dye, [dye, Fluid.of('kubejs:iridescent_concentrate', 200)]),
                vintageimprovements.vacuumizing(dye, [dye, Fluid.of('kubejs:strange_potion', 200)]).superheated()
            ],
            dye, 3
        ).id(`kubejs:sequenced_assembly/dyes/charged_${dye}`)
        .technology('dye_charging')

        create.mixing(
            [
                'kubejs:redstone_precision_mechanism',
                '2x minecraft:redstone_block',
                Fluid.of(`kubejs:charged_${dye}_solution`, 400)
            ],
            [
                `kubejs:charged_${dye}`,
                'kubejs:redstone_precision_mechanism',
                Fluid.of(`kubejs:refined_${dye}_solution`, 300),
                Fluid.of('kubejs:iridescent_concentrate', 500)
            ]
        ).superheated().id(`kubejs:mixing/dyes/charged_${dye}_solution`)
        .technology('dye_charging')

        if (dye != 'white_dye') {
            create.filling(
                dye,
                [
                    'minecraft:white_dye',
                    Fluid.of(`kubejs:charged_${dye}_solution`, 5)
                ]
            ).id(`kubejs:filling/dyes/white_dye_with_charged_${dye}`)
            .technology('dye_charging')

            create.filling(
                dye,
                [
                    'minecraft:white_dye',
                    Fluid.of(`kubejs:refined_${dye}_solution`, 95)
                ]
            ).id(`kubejs:filling/dyes/white_dye_with_refined_${dye}`)
            .technology('dye_charging')
        }
    })

    // #region Ore
    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '6x minecraft:iron_block',
            Fluid.of('kubejs:iridescent_concentrate', 250)
        ],
        [
            'kubejs:ore_set',
            'minecraft:iron_block',
            Fluid.of('kubejs:charged_white_dye_solution', 250)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated()
    .technology('mineral_block_dyeing').id(`kubejs:pressurizing/redstone_changes/charged_white_dye_solution_with_iron_block`)

    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '6x minecraft:netherite_block',
            Fluid.of('kubejs:iridescent_concentrate', 250)
        ],
        [
            'kubejs:ore_set',
            'minecraft:diamond_block',
            'minecraft:diamond_block',
            'minecraft:diamond_block',
            'minecraft:diamond_block',
            'minecraft:diamond_block',
            'minecraft:netherite_block',
            Fluid.of('kubejs:charged_black_dye_solution', 250)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated()
    .technology('mineral_block_dyeing').id(`kubejs:pressurizing/redstone_changes/charged_black_dye_solution_with_netherite_block`)

    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '6x minecraft:gold_block',
            Fluid.of('kubejs:iridescent_concentrate', 250)
        ],
        [
            'kubejs:ore_set',
            'minecraft:gold_block',
            Fluid.of('kubejs:charged_yellow_dye_solution', 250)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated()
    .technology('mineral_block_dyeing').id(`kubejs:pressurizing/redstone_changes/charged_yellow_dye_solution_with_gold_block`)

    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '6x minecraft:copper_block',
            Fluid.of('kubejs:iridescent_concentrate', 250)
        ],
        [
            'kubejs:ore_set',
            'minecraft:copper_block',
            Fluid.of('kubejs:charged_orange_dye_solution', 250)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated()
    .technology('mineral_block_dyeing').id(`kubejs:pressurizing/redstone_changes/charged_orange_dye_solution_with_copper_block`)

    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '6x minecraft:emerald_block',
            Fluid.of('kubejs:iridescent_concentrate', 250)
        ],
        [
            'kubejs:ore_set',
            'minecraft:emerald_block',
            Fluid.of('kubejs:charged_lime_dye_solution', 250)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated()
    .technology('mineral_block_dyeing').id(`kubejs:pressurizing/redstone_changes/charged_lime_dye_solution_with_emerald_block`)

    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '6x minecraft:diamond_block',
            Fluid.of('kubejs:iridescent_concentrate', 250)
        ],
        [
            'kubejs:ore_set',
            'minecraft:diamond_block',
            Fluid.of('kubejs:charged_light_blue_dye_solution', 250)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated()
    .technology('mineral_block_dyeing').id(`kubejs:pressurizing/redstone_changes/charged_light_blue_dye_solution_with_diamond_block`)

    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '11x minecraft:diamond_block',
            Fluid.of('kubejs:iridescent_concentrate', 500),
            Fluid.of('kubejs:charged_black_dye_solution', 100)
        ],
        [
            'kubejs:ore_set',
            'minecraft:diamond_block',
            'minecraft:netherite_block',
            'minecraft:netherite_block',
            Fluid.of('kubejs:charged_light_blue_dye_solution', 500)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated()
    .technology('mineral_block_dyeing').id(`kubejs:pressurizing/redstone_changes/charged_light_blue_dye_solution_with_diamond_block_and_black_dye_solution`)

    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '21x minecraft:redstone_block',
            Fluid.of('kubejs:iridescent_concentrate', 1000)
        ],
        [
            'kubejs:ore_set',
            'minecraft:redstone_block',
            Fluid.of('kubejs:charged_red_dye_solution', 1000)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated()
    .technology('mineral_block_dyeing').id(`kubejs:pressurizing/redstone_changes/charged_red_dye_solution_with_redstone_block`)

    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '6x create:andesite_alloy_block',
            Fluid.of('kubejs:iridescent_concentrate', 250)
        ],
        [
            'kubejs:ore_set',
            'create:andesite_alloy_block',
            Fluid.of('kubejs:charged_green_dye_solution', 250)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated()
    .technology('mineral_block_dyeing').id(`kubejs:pressurizing/redstone_changes/charged_green_dye_solution_with_andesite_alloy_block`)

    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '6x create:zinc_block',
            Fluid.of('kubejs:iridescent_concentrate', 250)
        ],
        [
            'kubejs:ore_set',
            'create:andesite_alloy_block',
            'create:andesite_alloy_block',
            'create:andesite_alloy_block',
            'create:andesite_alloy_block',
            'create:andesite_alloy_block',
            'create:zinc_block',
            Fluid.of('kubejs:charged_cyan_dye_solution', 250)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated()
    .technology('mineral_block_dyeing').id(`kubejs:pressurizing/redstone_changes/charged_cyan_dye_solution_with_zinc_block`)
    
    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '6x unify:tin_block',
            Fluid.of('kubejs:iridescent_concentrate', 250)
        ],
        [
            'kubejs:ore_set',
            'unify:tin_block',
            Fluid.of('kubejs:charged_light_gray_dye_solution', 250)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated().technology('mineral_block_dyeing')
    .id(`kubejs:pressurizing/redstone_changes/charged_light_gray_dye_solution_with_tin_block`)

    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '6x unify:silver_block',
            Fluid.of('kubejs:iridescent_concentrate', 250)
        ],
        [
            'kubejs:ore_set',
            'unify:silver_block',
            Fluid.of('kubejs:charged_gray_dye_solution', 250)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated().technology('mineral_block_dyeing')
    .id(`kubejs:pressurizing/redstone_changes/charged_gray_dye_solution_with_silver_block`)
    
    // #endregion
    
    create.sequenced_assembly(
        [
            Item.of('kubejs:iron_and_gold_set').withChance(0.9),
            Item.of('minecraft:iron_nugget').withChance(0.05),
            Item.of('minecraft:gold_nugget').withChance(0.05)
        ],
        ['kubejs:set_tray'],
        [
            create.deploying(
                'kubejs:set_tray',
                [
                    'kubejs:set_tray',
                    'createaddition:iron_rod'
                ]
            ),
            create.deploying(
                'kubejs:set_tray',
                [
                    'kubejs:set_tray',
                    'vintageimprovements:iron_spring'
                ]
            ),
            create.deploying(
                'kubejs:set_tray',
                [
                    'kubejs:set_tray',
                    'createaddition:gold_rod'
                ]
            ),
            create.deploying(
                'kubejs:set_tray',
                [
                    'kubejs:set_tray',
                    'vintageimprovements:golden_spring'
                ]
            )
        ],
        'kubejs:set_tray', 4
    ).technology('basic_ore_set')
    .id('kubejs:sequenced_assembly/basic_ore_set/iron_and_gold_set')

    create.sequenced_assembly(
        [
            Item.of('kubejs:redstone_and_copper_set').withChance(0.9),
            Item.of('create:copper_nugget').withChance(0.05),
            Item.of('minecraft:redstone').withChance(0.05)
        ],
        ['kubejs:set_tray'],
        [
            create.deploying(
                'kubejs:set_tray',
                [
                    'kubejs:set_tray',
                    'createaddition:copper_rod'
                ]
            ),
            create.deploying(
                'kubejs:set_tray',
                [
                    'kubejs:set_tray',
                    'vintageimprovements:copper_spring'
                ]
            ),
            create.deploying(
                'kubejs:set_tray',
                [
                    'kubejs:set_tray',
                    'redstone_block'
                ]
            ),
            create.deploying(
                'kubejs:set_tray',
                [
                    'kubejs:set_tray',
                    'minecraft:redstone_torch'
                ]
            )
        ],
        'kubejs:set_tray', 4
    ).technology('basic_ore_set').id('kubejs:sequenced_assembly/basic_ore_set/redstone_and_copper_set')

    create.compacting(
        ['kubejs:basic_ore_set'],
        [
            'kubejs:iron_and_gold_set', 'kubejs:redstone_and_copper_set',
            Fluid.of('lava', 500),
        ]
    ).technology('basic_ore_set').id('kubejs:compacting/basic_ore_set/basic_ore_set')

    create.sequenced_assembly(
        ['kubejs:ore_set'],
        ['kubejs:basic_ore_set'],
        [
            create.deploying('kubejs:incomplete_iron_products', [
                'kubejs:incomplete_iron_products', 'createcompression:compressed_cobblestone_2x']),
            create.deploying('kubejs:incomplete_iron_products', [
                'kubejs:incomplete_iron_products', 'createcompression:compressed_gravel_2x']),
            create.deploying('kubejs:incomplete_iron_products', [
                'kubejs:incomplete_iron_products', 'createcompression:compressed_iron_2x']),
            create.deploying('kubejs:incomplete_iron_products', [
                'kubejs:incomplete_iron_products', 'createcompression:compressed_gold_2x']),
            create.deploying('kubejs:incomplete_iron_products', [
                'kubejs:incomplete_iron_products', 'createcompression:compressed_copper_2x']),
            create.deploying('kubejs:incomplete_iron_products', [
                'kubejs:incomplete_iron_products', 'createcompression:compressed_redstone_2x']),
            create.deploying('kubejs:incomplete_iron_products', [
                'kubejs:incomplete_iron_products', 'createcompression:compressed_andesite_alloy_2x']),
            create.deploying('kubejs:incomplete_iron_products', [
                'kubejs:incomplete_iron_products', 'createcompression:compressed_diamond_2x']),
            create.deploying('kubejs:incomplete_iron_products', [
                'kubejs:incomplete_iron_products', 'createcompression:compressed_amethyst_2x']),
            create.deploying('kubejs:incomplete_iron_products', [
                'kubejs:incomplete_iron_products', 'createcompression:compressed_netherite_2x']),
            create.deploying('kubejs:incomplete_iron_products', [
                'kubejs:incomplete_iron_products', 'createcompression:compressed_brass_2x']),
            create.deploying('kubejs:incomplete_iron_products', [
                'kubejs:incomplete_iron_products', 'createcompression:compressed_experience_2x']),
        ],
        'kubejs:incomplete_iron_products', 1
    ).technology('ore_set')
    .id('kubejs:sequenced_assembly/ore_set/ore_set')

    create.compacting(
        [
            'kubejs:ore_set',
            '56x kubejs:basic_ore_set'
        ],
        [
            'kubejs:ore_set',
            'createcompression:compressed_copper_1x',
            'createcompression:compressed_redstone_1x',
            'createcompression:compressed_gold_1x',
            'createcompression:compressed_iron_2x'
        ]
    ).technology('ore_set')
    .id('kubejs:compacting/ore_set/basic_ore_set_with_ore_set')

    create.sequenced_assembly(
        'minecraft:bedrock',
        'minecraft:deepslate',
        [
            create.filling('minecraft:deepslate', [Fluid.of('kubejs:charged_black_dye_solution', 125), 'minecraft:deepslate']),
            create.cutting('minecraft:deepslate', 'minecraft:deepslate').processingTime(750),
            create.pressing('minecraft:deepslate', 'minecraft:deepslate'),
            vintageimprovements.pressurizing(
                'minecraft:deepslate',
                [
                    'minecraft:deepslate',
                    Fluid.of('minecraft:lava', 100)
                ]
            ).superheated()
        ],
        'minecraft:deepslate',
        5
    ).technology('bedrock').id('kubejs:sequenced_assembly/bedrock/bedrock_from_deepslate')

    event.recipes.vintageimprovements.pressurizing(
        'kubejs:raw_bedrock',
        [
            'minecraft:bedrock',
            Fluid.of('kubejs:strange_potion', 100),
            Fluid.of('minecraft:lava', 100)
        ]
    ).technology('bedrock').processingTime(187).superheated().id('kubejs:bedrock/pressurizing_raw_bedrock')

    create.compacting(
        [
            'kubejs:blaze_mechanism',
            'kubejs:raw_bedrock',
            Item.of('kubejs:bedrock_powder').withChance(0.25),
            Item.of('kubejs:bedrock_powder').withChance(0.05),
        ],
        [
            'kubejs:blaze_mechanism',
            'minecraft:bedrock',
            Fluid.of('kubejs:strange_potion', 100),
            Fluid.of('minecraft:lava', 100)
        ]
    ).technology('bedrock').superheated().id('kubejs:compacting/bedrock/blaze_mechanism_with_raw_bedrock')

    create.crushing(
        [
            Item.of('kubejs:bedrock_powder'),
            Item.of('minecraft:ancient_debris').withChance(0.25),
            Item.of('kubejs:raw_bedrock').withChance(0.75)
        ],
        'kubejs:raw_bedrock',
        5000
    ).technology('bedrock').id('kubejs:crushing/bedrock/raw_bedrock_to_bedrock_powder')

    create.deploying(
        'kubejs:bedrock_ingot',
        [
            'minecraft:netherite_ingot',
            'kubejs:bedrock_powder'
        ]
    ).technology('bedrock').id('kubejs:deploying/bedrock/bedrock_ingot_from_netherite_and_powder')

    vintageimprovements.hammering(
        'kubejs:bedrock_sheet',
        'kubejs:bedrock_ingot',
        20
    ).technology('bedrock').id('kubejs:hammering/bedrock/bedrock_sheet')

    event.custom(
        {
            type: 'create:item_application',
            ingredients: [
                {
                    item: 'create:empty_blaze_burner'
                },
                {
                    item: 'kubejs:blaze_mechanism'
                }
            ],
            results: [
                {
                    item: 'create:blaze_burner'
                }
            ]
        }
    ).technology('blaze_mechanism')
    .id('kubejs:blaze/item_application_blaze_burner_with_mechanism')

    create.mixing(
        [Fluid.of('kubejs:charged_orange_dye_solution', 125)],
        [
            'create_dd:blaze_gold',
            Fluid.of('kubejs:heat_lava', 1000)
        ]
    ).processingTime(90).superheated().technology('blaze_mechanism')
    .id('kubejs:mixing/blaze_mechanism/blaze_gold_to_charged_orange_dye_solution')

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
    ).technology('brass').id('kubejs:mixing/brass_tech')

    create.sequenced_assembly(
        'kubejs:ice_powder',
        'minecraft:quartz',
        [
            vintageimprovements.pressurizing(
                'kubejs:incomplete_ice_powder',
                [
                    'kubejs:incomplete_ice_powder',
                    Fluid.of('kubejs:soul_lava', 500)
                ]
            ),

            create.filling(
                'kubejs:incomplete_ice_powder',
                [
                    'kubejs:incomplete_ice_powder',
                    Fluid.of('minecraft:water', 250)
                ]
            ),


            create.filling(
                'kubejs:incomplete_ice_powder',
                [
                    'kubejs:incomplete_ice_powder',
                    Fluid.of('kubejs:charged_light_blue_dye_solution', 250)
                ]
            ),

            create.deploying(
                ['kubejs:incomplete_ice_powder'],
                ['kubejs:incomplete_ice_powder', 'minecraft:blue_ice']
            )
        ],
        'kubejs:incomplete_ice_powder', 4
    ).technology('refrigerant').id('kubejs:sequenced_assembly/ice_powder')

    create.mixing(
        Fluid.of('kubejs:refrigerant', 1000),
        [
            'kubejs:ice_powder',
            Fluid.of('minecraft:water', 1000)
        ]
    ).technology('refrigerant').superheated().id('kubejs:mixing/refrigerant')

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
    ).technology('precision_mechanism')
    .id('kubejs:sequenced_assembly/precision_mechanism/precision_mechanism_from_loose')

    vintageimprovements.vibrating(
        'kubejs:loose_precision_mechanism',
        'create:precision_mechanism', 500
    ).technology('precision_mechanism')
    .id('kubejs:vibrating/precision_mechanism/loose_precision_mechanism')

    create.sequenced_assembly(
        Item.of('kubejs:loose_precision_mechanism'),
        Item.of('kubejs:precision_mechanism_substrate'),
        [
            create.cutting('create:incomplete_precision_mechanism',
                'create:incomplete_precision_mechanism'),
            create.deploying('create:incomplete_precision_mechanism', 
                ['create:incomplete_precision_mechanism', 'kubejs:mechanical_mechanism']),
            create.deploying('create:incomplete_precision_mechanism', 
                ['create:incomplete_precision_mechanism', 'kubejs:redstone_precision_mechanism']),
            create.deploying('create:incomplete_precision_mechanism', 
                ['create:incomplete_precision_mechanism', 'kubejs:sturdy_mechanism']),
                create.deploying('create:incomplete_precision_mechanism', 
                ['create:incomplete_precision_mechanism', 'kubejs:blaze_mechanism']),
            create.deploying('create:incomplete_precision_mechanism', 
                ['create:incomplete_precision_mechanism', 'create:brass_ingot'])
        ],
        'create:incomplete_precision_mechanism', 2
    ).technology('precision_mechanism')
    .id('kubejs:sequenced_assembly/precision_mechanism/loose_precision_mechanism')
})