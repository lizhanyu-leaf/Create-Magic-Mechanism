// ==================== 科技解锁配方 ====================

TechSystemEvents.onTechLoad('cmm:industrial_iron_smelting', event => {
    const {create} = event.recipes

    create.compacting(
        ['2x create_dd:industrial_iron_ingot'],
        [
            Fluid.of('minecraft:lava', 250),
            '2x minecraft:iron_ingot',
            'minecraft:redstone_block'
        ]
    ).superheated()
    .id('kubejs:compacting/industrial_iron_smelting')
})

TechSystemEvents.onTechLoad('cmm:sturdy_sheet_smithing', event => {
    const {create} = event.recipes

    create.compacting(
        '2x create:sturdy_sheet',
        [
            'minecraft:obsidian',
            Fluid.of('minecraft:lava', 250)
        ]
    ).superheated()
    .id('kubejs:compacting/sturdy_sheet_smithing')
})

TechSystemEvents.onTechLoad('cmm:tin_smelting', event => {
    const {kubejs} = event.recipes

    kubejs.mechanical_furnace_recipe()
        .id('kubejs:mechanical_furnace_recipe/tin_smelting')
        .inputItems('5x unify:raw_tin')
        .inputFluids('kubejs:strange_potion 1000')
        .outputItems('2x unify:tin_ingot')
})

TechSystemEvents.onTechLoad('cmm:silver_smelting', event => {
    const {kubejs} = event.recipes

    kubejs.mechanical_furnace_recipe()
        .id('kubejs:mechanical_furnace_recipe/silver_smelting')
        .inputItems('5x unify:raw_silver')
        .inputFluids('kubejs:strange_potion 1000')
        .outputItems('2x unify:silver_ingot')
})

TechSystemEvents.onTechLoad('cmm:zinc_smelting', event => {
    const {kubejs} = event.recipes

    kubejs.mechanical_furnace_recipe()
        .id('kubejs:mechanical_furnace_recipe/zinc_smelting')
        .inputItems('5x create:raw_zinc')
        .inputFluids('kubejs:strange_potion 1000')
        .outputItems('2x create:zinc_ingot')
})

TechSystemEvents.onTechLoad('cmm:obsidian_smelting', event => {
    const {create, kubejs} = event.recipes

    kubejs.mechanical_furnace_recipe()
        .id('kubejs:mechanical_furnace_recipe/obsidian_smelting/1')
        .inputFluids('minecraft:lava 2000', 'minecraft:water 2000')
        .outputItems('2x minecraft:obsidian')

    kubejs.mechanical_furnace_recipe()
        .id('kubejs:mechanical_furnace_recipe/obsidian_smelting/2')
        .inputItems('5x minecraft:obsidian')
        .inputFluids('kubejs:strange_potion 1000')
        .outputItems('2x kubejs:obsidian_ingot')
})

TechSystemEvents.onTechLoad('cmm:steel_smelting', event => {
    const {create, kubejs} = event.recipes

    create.compacting(
        ['3x kubejs:incomplete_steel'],
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
})

TechSystemEvents.onTechLoad('cmm:redstone_circuit', event => {
    const {create, vintageimprovements} = event.recipes

    create.sequenced_assembly(
        'kubejs:redstone_sheet',
        'kubejs:charging_iron_sheet',
        [
            create.cutting('kubejs:incomplete_redstone_sheet', 'kubejs:incomplete_redstone_sheet'),
            create.deploying('kubejs:incomplete_redstone_sheet', ['kubejs:incomplete_redstone_sheet', 'kubejs:precision_redstone']),
            create.deploying('kubejs:incomplete_redstone_sheet', ['kubejs:incomplete_redstone_sheet', 'minecraft:redstone_block']),
            create.filling('kubejs:incomplete_redstone_sheet', ['kubejs:incomplete_redstone_sheet', Fluid.of('kubejs:redstone_diluent', 250)]),
            create.pressing('kubejs:incomplete_redstone_sheet', 'kubejs:incomplete_redstone_sheet'),
            create.deploying('kubejs:incomplete_redstone_sheet', ['kubejs:incomplete_redstone_sheet', 'minecraft:redstone'])
        ],
        'kubejs:incomplete_redstone_sheet', 5
    )
    .id('kubejs:sequenced_assembly/redstone_circuit')

    vintageimprovements.vibrating(
        'vintageimprovements:redstone_module',
        'kubejs:redstone_sheet'
    )
    .id('kubejs:vibrating/redstone_circuit')
})

TechSystemEvents.onTechLoad('cmm:inductive_mechanism', event => {
    const {create} = event.recipes

    event.remove({output: 'create_dd:inductive_mechanism'})

    create.sequenced_assembly(
        ['create_dd:inductive_mechanism'],
        ['create_dd:andesite_sheet'],
        [
            create.deploying('create_dd:incomplete_inductive_mechanism',
                ['create_dd:incomplete_inductive_mechanism', 'create:cogwheel']),

            create.deploying('create_dd:incomplete_inductive_mechanism',
                ['create_dd:incomplete_inductive_mechanism', 'create:chain_conveyor']),

            create.deploying('create_dd:incomplete_inductive_mechanism',
                ['create_dd:incomplete_inductive_mechanism', 'create:andesite_alloy']),

            create.deploying('create_dd:incomplete_inductive_mechanism',
                ['create_dd:incomplete_inductive_mechanism', 'unify:steel_rod']),

            create.deploying('create_dd:incomplete_inductive_mechanism',
                ['create_dd:incomplete_inductive_mechanism', 'kubejs:sturdy_knob']),

            create.deploying('create_dd:incomplete_inductive_mechanism',
                ['create_dd:incomplete_inductive_mechanism', 'createorexcavation:drill']).keepHeldItem(),
        ],
        'create_dd:incomplete_inductive_mechanism', 8
    )
    .id('kubejs:sequenced_assembly/inductive_mechanism')
})

TechSystemEvents.onTechLoad('cmm:package_system', event => {
    const {event} = event.recipes

    event.remove({output: 'createadditionallogistics:package_editor'})
    event.remove({output: 'createadditionallogistics:package_accelerator'})
    event.remove({output: 'fluid:can_filler'})
    event.remove({output: 'create:packager'})

    event.shaped(
        'create:packager',
        [
            ' i ',
            'ibi',
            'sis'
        ],
        {
            i: 'minecraft:iron_ingot',
            b: 'minecraft:iron_block',
            s: 'minecraft:redstone'
        }
    )

    event.shapeless(
        'createadditionallogistics:package_editor',
        'create:packager'
    )

    event.shapeless(
        'create:packager',
        'createadditionallogistics:package_editor'
    )

    event.shapeless(
        'createadditionallogistics:package_accelerator',
        'create:packager'
    )

    event.shapeless(
        'create:packager',
        'createadditionallogistics:package_accelerator'
    )

    event.shapeless(
        'fluid:can_filler',
        'create:packager'
    )

    event.shapeless(
        'create:packager',
        'fluid:can_filler'
    )
})

TechSystemEvents.onTechLoad('cmm:chain_logistics', event => {
    const {create, minecraft} = event.recipes

    event.remove({output: 'minecraft:chain'})
    event.remove({output: 'create:transmitter'})
    event.remove({id:'create:crafting/kinetics/chain_conveyor'})
    event.remove({id:'create:crafting/logistics/package_frogport'})

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
                    'unify:steel_sheet'
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
    )
    .id('kubejs:sequenced_assembly/chain_logistics')

    create.sequenced_assembly(
        'create:package_frogport',
        'create:item_vault',
        [
            create.deploying(
                'kubejs:incomplete_andesite_mechine',
                [
                    'kubejs:incomplete_andesite_mechine',
                    'minecraft:slime_ball'
                ]
            ),

            create.deploying(
                'kubejs:incomplete_andesite_mechine',
                [
                    'kubejs:incomplete_andesite_mechine',
                    'create_dd:andesite_sheet'
                ]
            )
        ],
        'kubejs:incomplete_andesite_mechine', 1
    )
    .id('kubejs:sequenced_assembly/chain_logistics/package_frogport')

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

    create.sequenced_assembly(
        'create:transmitter',
        'create:copper_sheet',
        [
            create.deploying('kubejs:incomplete_copper_products',
                ['kubejs:incomplete_copper_products', 'createaddition:copper_rod']),

            create.deploying('kubejs:incomplete_copper_products',
                ['kubejs:incomplete_copper_products', 'createaddition:copper_wire']),

            create.deploying('kubejs:incomplete_copper_products',
                ['kubejs:incomplete_copper_products', 'minecraft:redstone_block'])
        ],
        'kubejs:incomplete_copper_products', 2
    )
    .id('kubejs:sequenced_assembly/chain_logistics/transmitter')
})

TechSystemEvents.onTechLoad('cmm:strange_potion', event => {
    const {create, vintageimprovements} = event.recipes

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
    )
    .id('kubejs:mixing/strange_potion/strange_potion_base')

    create.mixing(
        Fluid.of('kubejs:strange_potion', 500),
        [
            Fluid.of('minecraft:water', 500),
            'minecraft:chorus_fruit'
        ]
    )
    .id('kubejs:mixing/strange_potion/strange_potion_from_chorus_fruit')

    vintageimprovements.pressurizing(
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
    )
    .processingTime(60)
    .id('kubejs:pressurizing/strange_potion/chorus_fruit')
})

TechSystemEvents.onTechLoad('cmm:andesite_input_and_output', event => {
    const {create} = event.recipes

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
    )
    .id('kubejs:sequenced_assembly/andesite_input_and_output/andesite_input')

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
    )
    .id('kubejs:sequenced_assembly/andesite_input_and_output/andesite_output')
})

TechSystemEvents.onTechLoad('cmm:incomplete_precision_gear_set', event => {
    const {create} = event.recipes

    create.sequenced_assembly(
        'kubejs:incomplete_precision_gear_set',
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
    )
    .id('kubejs:sequenced_assembly/incomplete_precision_gear_set')
})

TechSystemEvents.onTechLoad('cmm:precision_gear_set', event => {
    const {create} = event.recipes

    create.sequenced_assembly(
        'kubejs:precision_gear_set',
        'kubejs:incomplete_precision_gear_set',
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
        TechnologyTools.isActive('simple_precision_gear_set_recipe') ? 4 : 16
    )
    .id('kubejs:sequenced_assembly/precision_gear_set')
})

TechSystemEvents.onTechLoad('cmm:bronze_smelting', event => {
    const {create} = event.recipes

    create.compacting(
        'unify:bronze_ingot',
        [
            'unify:tin_ingot',
            'minecraft:copper_ingot'
        ]
    ).heated()
    .id('kubejs:compacting/bronze_ingot')
})

TechSystemEvents.onTechLoad('cmm:seed_oil', event => {
    const {create, vintageimprovements} = event.recipes

    vintageimprovements.pressurizing(
        [
            Fluid.of('createaddition:seed_oil', 500)
        ],
        [
            'wheat_seeds',
            'wheat_seeds'
        ]
    )
    .processingTime(60)
    .heated()
    .id('kubejs:pressurizing/seed_oil/seed_oil')

    vintageimprovements.vacuumizing(
        Fluid.of('kubejs:slime', 100),
        [
            Fluid.of('createaddition:seed_oil', 100),
            'minecraft:slime_ball',
            Fluid.of('minecraft:water', 500)
        ]
    )
    .secondaryFluidInput(1)
    .id('kubejs:vacuumizing/seed_oil/slime')
})

TechSystemEvents.onTechLoad('cmm:electron_tube', event => {
    const {create, vintageimprovements} = event.recipes

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
            create.deploying('kubejs:electron_tube_substrate', ['kubejs:electron_tube_substrate', 'kubejs:sturdy_knob']),
            create.cutting('kubejs:electron_tube_substrate', ['kubejs:electron_tube_substrate', 'kubejs:electron_tube_substrate'])
        ],
        'kubejs:electron_tube_substrate', 8
    )
    .id('kubejs:sequenced_assembly/electron_tube')
})

TechSystemEvents.onTechLoad('cmm:intermediate_storage_upgrade', event => {
    const {event} = event.recipes

    event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_3' })
    event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_4' })
    event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_5' })
    event.remove({ output: 'sophisticatedstorage:stack_upgrade_omega_tier' })

    event.shaped(
        'sophisticatedstorage:stack_upgrade_tier_3',
        [
            'aaa',
            'aba',
            'aaa'
        ],
        {
            a: 'unify:bronze_block',
            b: 'sophisticatedstorage:stack_upgrade_tier_2'
        }
    )

    event.shaped(
        'sophisticatedstorage:stack_upgrade_tier_4',
        [
            'aaa',
            'aba',
            'aaa'
        ],
        {
            a: 'unify:silver_block',
            b: 'sophisticatedstorage:stack_upgrade_tier_3'
        }
    )

    event.shaped(
        'sophisticatedstorage:stack_upgrade_tier_5',
        [
            'aaa',
            'aba',
            'aaa'
        ],
        {
            a: 'kubejs:obsidian_sheet',
            b: 'sophisticatedstorage:stack_upgrade_tier_4'
        }
    )
})

TechSystemEvents.onTechLoad('cmm:smart_storage', event => {
    const {event} = event.recipes

    event.remove({ output: 'sophisticatedstorage:storage_output' })
    event.remove({ output: 'sophisticatedstorage:storage_input' })
    event.remove({ output: 'sophisticatedstorage:storage_io' })
    event.remove({ output: 'sophisticatedstorage:controller' })

    event.shaped(
        'sophisticatedstorage:controller',
        [
            'oso',
            'wcw',
            'oso'
        ],
        {
            o: 'kubejs:sturdy_knob',
            s: 'kubejs:redstone_sheet',
            w: 'kubejs:wood_set',
            c: 'minecraft:barrel'
        }
    )

    event.shaped(
        'sophisticatedstorage:storage_io',
        [
            'owo',
            'scs',
            'owo'
        ],
        {
            o: 'kubejs:sturdy_knob',
            s: 'kubejs:redstone_sheet',
            w: 'kubejs:wood_set',
            c: 'minecraft:barrel'
        }
    )

    event.shaped(
        'sophisticatedstorage:storage_input',
        [
            'owo',
            'scm',
            'owo'
        ],
        {
            o: 'kubejs:sturdy_knob',
            s: 'kubejs:redstone_sheet',
            w: 'kubejs:wood_set',
            c: 'minecraft:barrel',
            m: 'kubejs:mechanical_mechanism'
        }
    )

    event.shaped(
        'sophisticatedstorage:storage_output',
        [
            'owo',
            'mcs',
            'owo'
        ],
        {
            o: 'kubejs:sturdy_knob',
            s: 'kubejs:redstone_sheet',
            w: 'kubejs:wood_set',
            c: 'minecraft:barrel',
            m: 'kubejs:mechanical_mechanism'
        }
    )
})

TechSystemEvents.onTechLoad('cmm:bedrock', event => {
    const {create, vintageimprovements, event} = event.recipes

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
    )
    .id('kubejs:sequenced_assembly/bedrock/bedrock_from_deepslate')

    vintageimprovements.pressurizing(
        'kubejs:unshaped_bedrock',
        [
            'minecraft:bedrock',
            Fluid.of('kubejs:strange_potion', 100),
            Fluid.of('minecraft:lava', 100)
        ]
    )
    .processingTime(187)
    .superheated()
    .id('kubejs:bedrock/pressurizing_unshaped_bedrock')

    create.compacting(
        [
            'kubejs:blaze_mechanism',
            'kubejs:unshaped_bedrock',
            Item.of('kubejs:bedrock_powder').withChance(0.25),
            Item.of('kubejs:bedrock_powder').withChance(0.05),
        ],
        [
            'kubejs:blaze_mechanism',
            'minecraft:bedrock',
            Fluid.of('kubejs:strange_potion', 100),
            Fluid.of('minecraft:lava', 100)
        ]
    )
    .superheated()
    .id('kubejs:compacting/bedrock/blaze_mechanism_with_unshaped_bedrock')

    create.crushing(
        [
            Item.of('kubejs:bedrock_powder'),
            Item.of('minecraft:ancient_debris').withChance(0.25),
            Item.of('kubejs:unshaped_bedrock').withChance(0.75)
        ],
        'kubejs:unshaped_bedrock',
        5000
    )
    .id('kubejs:crushing/bedrock/unshaped_bedrock_to_bedrock_powder')

    create.deploying(
        'kubejs:bedrock_ingot',
        [
            'minecraft:netherite_ingot',
            'kubejs:bedrock_powder'
        ]
    )
    .id('kubejs:deploying/bedrock/bedrock_ingot_from_netherite_and_powder')

    vintageimprovements.hammering(
        'kubejs:bedrock_sheet',
        'kubejs:bedrock_ingot',
        20
    )
    .id('kubejs:hammering/bedrock/bedrock_sheet')
})

TechSystemEvents.onTechLoad('cmm:blaze_mechanism', event => {
    const {event, create} = event.recipes

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
    )
    .id('kubejs:blaze/item_application_blaze_burner_with_mechanism')

    create.mixing(
        [Fluid.of('kubejs:charged_orange_dye_solution', 125)],
        [
            'create_dd:blaze_gold',
            Fluid.of('kubejs:high_temperature_magma', 1000)
        ]
    )
    .processingTime(90)
    .superheated()
    .id('kubejs:mixing/blaze_mechanism/blaze_gold_to_charged_orange_dye_solution')
})

TechSystemEvents.onTechLoad('cmm:brass', event => {
    const {create} = event.recipes

    create.mixing(
        [
            'kubejs:sturdy_mechanism',
            'kubejs:blaze_mechanism',
            'create:brass_ingot'
        ],
        [
            'kubejs:sturdy_mechanism',
            'kubejs:blaze_mechanism',
            'kubejs:solar_particle',
            'minecraft:copper_ingot',
            'create:zinc_ingot',
            Fluid.of('kubejs:charged_brown_dye_solution', 125),
            Fluid.of('kubejs:charged_light_gray_dye_solution', 125)
        ]
    )
    .id('kubejs:mixing/brass_tech')
})

TechSystemEvents.onTechLoad('cmm:coolant', event => {
    const {create, vintageimprovements} = event.recipes

    create.sequenced_assembly(
        'kubejs:cryogenic_powder',
        'minecraft:quartz',
        [
            vintageimprovements.pressurizing(
                'kubejs:incomplete_cryogenic_powder',
                [
                    'kubejs:incomplete_cryogenic_powder',
                    Fluid.of('kubejs:soul_magma', 500)
                ]
            ),

            create.filling(
                'kubejs:incomplete_cryogenic_powder',
                [
                    'kubejs:incomplete_cryogenic_powder',
                    Fluid.of('minecraft:water', 250)
                ]
            ),

            create.filling(
                'kubejs:incomplete_cryogenic_powder',
                [
                    'kubejs:incomplete_cryogenic_powder',
                    Fluid.of('kubejs:charged_light_blue_dye_solution', 250)
                ]
            ),

            create.deploying(
                ['kubejs:incomplete_cryogenic_powder'],
                ['kubejs:incomplete_cryogenic_powder', 'minecraft:blue_ice']
            )
        ],
        'kubejs:incomplete_cryogenic_powder', 4
    )
    .id('kubejs:sequenced_assembly/cryogenic_powder')

    create.mixing(
        Fluid.of('kubejs:coolant', 1000),
        [
            'kubejs:cryogenic_powder',
            Fluid.of('minecraft:water', 1000)
        ]
    )
    .superheated()
    .id('kubejs:mixing/coolant')
})

TechSystemEvents.onTechLoad('cmm:precision_mechanism', event => {
    const {create, vintageimprovements} = event.recipes

    create.sequenced_assembly(
        [
            '2x create:precision_mechanism',
            '3x create:precision_mechanism'
        ],
        'kubejs:loose_precision_mechanism',
        [
            create.filling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', Fluid.of('kubejs:high_temperature_magma', 250)]),
            create.filling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', Fluid.of('kubejs:charged_yellow_dye_solution', 125)]),
            vintageimprovements.curving(
                'create:incomplete_precision_mechanism',
                'create:incomplete_precision_mechanism',
            ).head('kubejs:sturdy_mechanism'),
            create.pressing('create:incomplete_precision_mechanism','create:incomplete_precision_mechanism'),
            vintageimprovements.vibrating('create:incomplete_precision_mechanism','create:incomplete_precision_mechanism'),
            create.pressing('create:incomplete_precision_mechanism','create:incomplete_precision_mechanism'),
            create.pressing('create:incomplete_precision_mechanism','create:incomplete_precision_mechanism'),
            create.filling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', Fluid.of('kubejs:coolant', 250)]),
        ],
        'create:incomplete_precision_mechanism',
        2
    )
    .id('kubejs:sequenced_assembly/precision_mechanism/precision_mechanism_from_loose')

    vintageimprovements.vibrating(
        'kubejs:loose_precision_mechanism',
        'create:precision_mechanism', 500
    )
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
    )
    .id('kubejs:sequenced_assembly/precision_mechanism/loose_precision_mechanism')
})
