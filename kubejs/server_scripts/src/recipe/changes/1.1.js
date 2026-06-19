ServerEvents.recipes(event => { 

    const { create, vintageimprovements, cmm, minecraft } = event.recipes

    /**
     * 
     * @param {Internal.Ingredient_} mechine_id 
     */
    function remove_mechine_crafting_recipe(mechine_id) {
        event.remove({
            type: 'minecraft:crafting_shaped',
            output: mechine_id
        })
    }

    remove_mechine_crafting_recipe('create:mechanical_press')
    remove_mechine_crafting_recipe('create:mechanical_mixer')
    remove_mechine_crafting_recipe('create:mechanical_saw')
    remove_mechine_crafting_recipe('create:mechanical_drill')
    remove_mechine_crafting_recipe('create:deployer')
    remove_mechine_crafting_recipe('vintageimprovements:vacuum_chamber')
    remove_mechine_crafting_recipe('vintageimprovements:vibrating_table')
    remove_mechine_crafting_recipe('createaddition:rolling_mill')
    remove_mechine_crafting_recipe('vintageimprovements:spring_coiling_machine')
    remove_mechine_crafting_recipe('vintageimprovements:curving_press')

    remove_mechine_crafting_recipe('create:spout')
    remove_mechine_crafting_recipe('fluid:copper_tap')

    remove_mechine_crafting_recipe('vintageimprovements:belt_grinder')
    remove_mechine_crafting_recipe('vintageimprovements:centrifuge')
    remove_mechine_crafting_recipe('vintageimprovements:helve_hammer')

    minecraft.smithing_transform(
        'create:mechanical_press',
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_casing',
        'minecraft:iron_ingot'
    )

    minecraft.smithing_transform(
        'create:mechanical_mixer',
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_casing',
        'create:whisk'
    )

    minecraft.smithing_transform(
        'create:mechanical_saw',
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_casing',
        'create:iron_sheet'
    )

    minecraft.smithing_transform(
        'create:mechanical_drill',
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_casing',
        'minecraft:iron_nugget'
    )

    minecraft.smithing_transform(
        'create:deployer',
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_casing',
        'create:golden_sheet'
    )

    minecraft.smithing_transform(
        'vintageimprovements:vacuum_chamber',
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_casing',
        'create:mechanical_pump'
    )

    minecraft.smithing_transform(
        'vintageimprovements:vibrating_table',
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_casing',
        'vintageimprovements:andesite_spring'
    )

    minecraft.smithing_transform(
        'createaddition:rolling_mill',
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_casing',
        'create:shaft'
    )

    minecraft.smithing_transform(
        'vintageimprovements:spring_coiling_machine',
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_casing',
        'kubejs:precision_mechanism_2'
    )

    minecraft.smithing_transform(
        'vintageimprovements:curving_press',
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_casing',
        'vintageimprovements:andesite_sheet'
    )

    minecraft.smithing_transform(
        'create:spout',
        'kubejs:mechine_upgrade_smithing_template',
        'create:copper_casing',
        'kubejs:precision_mechanism_1'
    )

    minecraft.smithing_transform(
        'fluid:copper_tap',
        'kubejs:mechine_upgrade_smithing_template',
        'create:spout',
        'create:copper_sheet'
    )

    minecraft.smithing_transform(
        'vintageimprovements:belt_grinder',
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_casing',
        'kubejs:cardboard_mechanism'
    )

    minecraft.smithing_transform(
        'vintageimprovements:helve_hammer',
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_casing',
        'createdieselgenerators:hammer'
    )

    event.custom({
        type: "createdieselgenerators:hammering",
        ingredients: [{
            item: 'create:andesite_alloy_block'
        }],
        results: [
            {
                item: 'kubejs:mechine_upgrade_smithing_template'
            }
        ]
    })

    create.pressing(
        'kubejs:mechine_upgrade_smithing_template',
        'create:andesite_alloy_block'
    ).id('kubejs:pressing/andesite_changes/pressing_andesite_smithing_template_from_casing')

    /**
     * 
     * @param {InputItem_[]} inputs 
     * @param {OutputItem_} output_box 
     * @returns 
     */
    function create_box_from_casing(inputs, output_box) {
        /**
         * 
         * @param {OutputItem_} vertical_box 
         */
        function create_vertical(vertical_box) {
            event.remove({output: vertical_box})

            // basic_transmission
            if (!TechnologyTools.isActive('basic_transmission')) return

            create.mixing(
                [
                    vertical_box,
                    'create:andesite_casing'
                ],
                inputs.concat([
                    'create:andesite_casing',
                    'kubejs:precision_mechanism_1'
                ])
            ).id(`kubejs:andesite_changes/mixing_${output_box.replace(':', '_')}_from_casing`)
        }

        event.remove({output: output_box})

        // basic_transmission
        if (!TechnologyTools.isActive('basic_transmission')) return create_vertical

        create.compacting(
            [
                output_box,
                'create:andesite_casing'
            ],
            inputs.concat([
                'create:andesite_casing',
                'kubejs:precision_mechanism_1'
            ])
        ).id(`kubejs:andesite_changes/compacting_${output_box.replace(':', '_')}_from_casing`)
        
        
        return create_vertical
    }

    // 十字
    create_box_from_casing(
        [
            '4x create:cogwheel'
        ],
        'create:gearbox'
    )(
        'create:vertical_gearbox'
    )

    // 平行
    create_box_from_casing(
        [
            '4x create:cogwheel',
            'create:large_cogwheel'
        ],
        'create_connected:parallel_gearbox'
    )(
        'create_connected:vertical_parallel_gearbox'
    )

    // 六向
    create_box_from_casing(
        [
            '4x create:cogwheel',
            '2x create:large_cogwheel'
        ],
        'create_connected:six_way_gearbox'
    )(
        'create_connected:vertical_six_way_gearbox'
    )

    // 链式传动
    create_box_from_casing(
        [
            'create:shaft'
        ],
        'create:encased_chain_drive'
    )

    // 链式齿轮
    create_box_from_casing(
        [
            'create:shaft',
            'create:cogwheel'
        ],
        'create_connected:encased_chain_cogwheel'
    )

    // 反转
    create_box_from_casing(
        [
            'create:shaft',
            'minecraft:redstone'
        ],
        'create:gearshift'
    )('create_connected:inverted_gearshift')

    // 制动器
    create_box_from_casing(
        [
            'create:shaft',
            'minecraft:obsidian',
            'minecraft:redstone'
        ],
        'create_connected:brake'
    )

    // 飞轮离合器
    create_box_from_casing(
        [
            'create:shaft',
            'create:iron_sheet',
            'create:cogwheel'
        ],
        'create_connected:freewheel_clutch'
    )

    // 离心离合器
    create_box_from_casing(
        [
            'create:shaft',
            'create:iron_sheet',
            'create:speedometer'
        ],
        'create_connected:centrifugal_clutch'
    )

    create_box_from_casing(
        [
            'create:shaft',
            'create:iron_sheet',
            'create:stressometer'
        ],
        'create_connected:overstress_clutch'
    )

    create_box_from_casing(
        [
            'create:shaft',
            'minecraft:redstone'
        ],
        'create:clutch'
    )

    create_box_from_casing(
        [
            'create:shaft',
            'create:cogwheel'
        ],
        'create_dd:reversed_gearshift'
    )

    event.replaceInput(
        { id: 'create:crafting/kinetics/smart_fluid_pipe'},
        'create:electron_tube',
        'kubejs:precision_mechanism_2'
    )

    event.replaceInput(
        { id: 'create:crafting/kinetics/smart_fluid_pipe'},
        'create:brass_sheet',
        'create_dd:inductive_mechanism'
    )

    event.stonecutting(
        '4x create:shaft',
        'create:andesite_alloy'
    ).id('kubejs:andesite_changes/stonecutting_shafts_from_alloy')

    event.remove({id: 'ftbquests:screen_1'})
    event.shaped(
        'ftbquests:screen_1',
        [
            'aaa',
            'aba',
            'aaa'
        ],
        {
            a: 'kubejs:precision_mechanism_1',
            b: 'kubejs:precision_mechanism_2'
        }
    ).id('kubejs:andesite_changes/shaped_ftb_screen_1_from_precison_mechanisms')

    // 破碎轮装配（现在添加.id()）
    create.sequenced_assembly(
        'create:crushing_wheel',
        'create:large_cogwheel',
        [
            create.deploying(
                [
                    'create:large_cogwheel'
                ],
                [
                    'create:large_cogwheel',
                    'create:andesite_alloy_block'
                ]
            ),
            create.pressing(
                [
                    'create:large_cogwheel'
                ],
                [
                    'create:large_cogwheel'
                ]
            ),
        ],
        'create:large_cogwheel',
        1
    ).id('kubejs:andesite_changes/sequenced_assembly_crushing_wheel_from_large_cogwheel')

    create.deploying(
        'minecraft:redstone_torch',
        [
            'minecraft:redstone',
            'minecraft:stick'
        ]
    ).id('kubejs:andesite_changes/deploying_redstone_torch_from_redstone_and_stick')

    create.compacting(
        Item.of('kubejs:precision_mechanism_2').withChance(0.75),
        [
            '2x minecraft:redstone_block',
            'create:golden_sheet'
        ]
    ).id('kubejs:compacting/andesite_changes/precision_mechanism_2_from_redstone_blocks')

    event.replaceInput(
        {id: 'create:crafting/kinetics/mechanical_press'},
        'minecraft:iron_block',
        'minecraft:iron_ingot'
    )

    create.filling(
        'minecraft:gunpowder',
        [
            Fluid.of('kubejs:gunpowder_catalyst', 250),
            'create:cinder_flour'
        ]
    ).id('kubejs:andesite_changes/filling_gunpowder_from_cinder_flour')

    create.mixing(
        [
            Fluid.of('kubejs:gunpowder_catalyst', 100),
            'minecraft:gunpowder'
        ],
        [
            Fluid.of('kubejs:redstone_catalyst', 100),
            'minecraft:gunpowder'
        ]
    ).id('kubejs:andesite_changes/mixing_gunpowder_catalyst_from_redstone_catalyst')

    create.pressing(
        'createaddition:straw',
        'createaddition:iron_wire'
    ).id('kubejs:andesite_changes/pressing_straw_from_iron_wire')

    event.remove('minecraft:dried_kelp_block')

    event.remove('create:crafting/kinetics/belt_connector')
    event.remove('create_dd:crafting/mechanical_belt_from_rubber')

    create.deploying(
        'create:item_vault',
        [
            'kubejs:wood_set',
            'create:iron_sheet'
        ]
    ).id('kubejs:andesite_changes/deploying_item_vault_from_wood_set_and_iron_sheet')

    create.deploying(
        'create:fluid_tank',
        [
            'kubejs:wood_set',
            'create:copper_sheet'
        ]
    ).id('kubejs:andesite_changes/deploying_fluid_tank_from_wood_set_and_copper_sheet')

    event.remove({type: 'minecraft:crafting_shaped', output: 'create:fluid_pipe'})
    create.sequenced_assembly(
        '6x create:fluid_pipe',
        'create:copper_sheet',
        [
            create.deploying(
                'kubejs:incomplete_copper_products',
                [
                    'kubejs:incomplete_copper_products',
                    'minecraft:copper_ingot'
                ]
            ),

            vintageimprovements.vibrating(
                'kubejs:incomplete_copper_products',
                'kubejs:incomplete_copper_products'
            )
        ],
        'kubejs:incomplete_copper_products',
        1
    ).id('kubejs:sequenced_assembly/andesite_changes/pipe')

    event.replaceInput(
        { id: 'create:crafting/logistics/factory_gauge'},
        'create:precision_mechanism',
        'create:golden_sheet'
    )

    event.replaceInput(
        { id: 'create_factory_logistics:factory_fluid_gauge' },
        'create_factory_logistics:fluid_mechanism',
        'create:copper_sheet'
    )

    create.deploying(
        'minecraft:sugar_cane',
        [
            'createaddition:iron_rod',
            'minecraft:lime_dye'
        ]
    )

    // create.deploying(
    //     'minecraft:bone',
    //     [
    //         'createaddition:iron_rod',
    //         'minecraft:iron_nugget'
    //     ]
    // ).id('kubejs:deploying/andesite_changes/bone_from_iron_rod')

    create.sequenced_assembly(
        'minecraft:bone',
        'createaddition:iron_rod',
        [
            create.deploying('kubejs:incomplete_iron_products', ['kubejs:incomplete_iron_products', 'minecraft:iron_nugget']),
            create.deploying('kubejs:incomplete_iron_products', ['kubejs:incomplete_iron_products', 'minecraft:iron_nugget']),
            create.pressing('kubejs:incomplete_iron_products', 'kubejs:incomplete_iron_products')
        ],
        'kubejs:incomplete_iron_products', 2
    ).id('kubejs:/sequenced_assembly/andesite_changes/bone_from_iron')

    create.deploying(
        ['minecraft:lapis_ore'],
        [
            'stone', 'lapis_lazuli'
        ]
    ).id('kubejs:deploying/andesite_changes/lapis_ore_from_stone')

    event.replaceInput({output: 'create_dd:industrial_casing', type: 'create:item_application'}, 'create_dd:zinc_casing', 'create:andesite_casing')

    event.custom({
        type: 'createdieselgenerators:distillation',
        ingredients: [
            {
                fluid: 'kubejs:chaotic_ore_flux',
                amount: 5000
            }
        ],
        heatRequirement: "superheated",
        processingTime: 100,
        results: [
            {
                fluid: 'kubejs:assembly_molten_andesite_alloy',
                amount: 5
            },
            {
                fluid: 'kubejs:assembly_molten_iron',
                amount: 5
            },
            {
                fluid: 'kubejs:assembly_molten_copper',
                amount: 5
            },
            {
                fluid: 'kubejs:assembly_molten_gold',
                amount: 5
            },
            {
                fluid: 'minecraft:lava',
                amount: 3980
            },
            {
                fluid: 'kubejs:chaotic_ore_flux',
                amount: 1000
            }
        ]
    }).id('kubejs:distillation/andesite_changes/chaotic_ore_flux')

    event.remove({id: 'create:crafting/kinetics/filter'})
    event.remove({id: 'create:crafting/kinetics/attribute_filter'})
    event.stonecutting(
        'create:attribute_filter',
        'create:golden_sheet'
    )
    event.remove({id: 'create:crafting/kinetics/package_filter'})
    event.stonecutting(
        'create:package_filter',
        'create:iron_sheet'
    )
    event.remove({id: 'createdieselgenerators:crafting/entity_filter'})
    event.stonecutting(
        'createdieselgenerators:entity_filter',
        'create:golden_sheet'
    )
    event.remove({id: 'fluid:fluid_manifest'})
    event.stonecutting(
        'fluid:fluid_manifest',
        'create:copper_sheet'
    )

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
    ).id('kubejs:sequenced_assembly/andesite_changes/iron_and_gold_set')

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
    ).id('kubejs:sequenced_assembly/andesite_changes/redstone_and_copper_set')

    create.compacting(
        ['kubejs:basic_ore_set'],
        [
            'kubejs:iron_and_gold_set', 'kubejs:redstone_and_copper_set',
            Fluid.of('lava', 500),
        ]
    ).id('kubejs:compacting/andesite_changes/basic_ore_set')

    event.remove({id: 'industrial_platform:platform'})
    event.remove({id: 'industrial_platform:platform_2'})

    create.compacting(
        ['cmpackagecouriers:cardboard_plane_parts'],
        [
            '4x stick',
            '2x create:cardboard',
            'gunpowder'
        ]
    ).id('kubejs:compacting/andesite_changes/cardboard_plane_parts')

    create.sequenced_assembly(
        ['create:blaze_burner'],
        ['create:empty_blaze_burner'],
        [
            create.filling(
                'kubejs:incomplete_andesite_mechine',
                [
                    'kubejs:incomplete_andesite_mechine',
                    Fluid.of('minecraft:lava', 500)
                ]
            ),

            create.deploying(
                'kubejs:incomplete_andesite_mechine',
                [
                    'kubejs:incomplete_andesite_mechine',
                    'minecraft:blaze_rod'
                ]
            ),

            create.deploying(
                'kubejs:incomplete_andesite_mechine',
                [
                    'kubejs:incomplete_andesite_mechine',
                    'minecraft:blaze_powder'
                ]
            ),

            cmm.item_combine(
                'kubejs:incomplete_andesite_mechine',
                [
                    'kubejs:incomplete_andesite_mechine',
                    'minecraft:blaze_rod',
                    'minecraft:blaze_powder'
                ]
            )
        ],
        'kubejs:incomplete_andesite_mechine'
    )

    event.remove({id: 'minecraft:shulker_box_coloring'})
    event.remove({id: 'minecraft:shulker_box'})

    let colors = [
        'red', 'orange', 'yellow', 'green', 'lime', 'cyan', 
        'light_blue', 'blue', 'purple', 'magenta', 'pink', 
        'black', 'gray', 'light_gray', 'white', 'brown'
    ]

    colors.forEach(color => {
        event.remove({output: String(`${color}_wool`)})
        event.remove({input: String(`${color}_wool`)})
    })

    event.replaceInput({input: 'white_wool'},
        'white_wool',
        'iron_block'
    )

    event.remove({id: 'create_dd:mixing/bronze_ingot'})

    event.remove({type: 'minecraft:crafting_shaped', output: 'create:andesite_alloy'})
    event.remove({type: 'create:mixing', output: 'create:andesite_alloy'})
    cmm.item_combine(
        [
            'create:andesite_alloy'
        ],
        [
            'minecraft:cobblestone',
            'minecraft:iron_ingot'
        ]
    )
    event.remove({input: 'unify:wrought_iron_ingot'})
    event.remove({output: 'unify:wrought_iron_ingot'})

    create.compacting(
        ['unify:cast_iron_ingot'],
        ['iron_ingot']
    ).heated().id('kubejs:compacting/andesite_changes/cast_iron_ingot')

    // 火药稀释剂压缩
    create.compacting(
        Fluid.of('kubejs:gunpowder_diluent', 500),
        [
            Fluid.of('minecraft:water', 500),
            '3x minecraft:gunpowder'
        ]
    ).id('kubejs:andesite_changes/compacting_gunpowder_diluent')

    // 液体燃烧配方
    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluidTag: 'kubejs:gunpowder_diluent',
            amount: 1000
        },
        burnTime: 6000,
        superheated: true
    }).id('kubejs:andesite_changes/custom_liquid_burning_gunpowder_diluent')
    event.remove({output: 'minecraft:blast_furnace'})
    event.replaceInput({input: 'minecraft:blast_furnace'},
        'minecraft:blast_furnace',
        'kubejs:mechanical_furnace'
    )
    event.remove({id: 'unify:mixing/bronze_ingot'})
    function removeSmeltingRecipe(outputItem) {
        event.remove({output: outputItem, type: 'minecraft:smelting'})
        event.remove({output: outputItem, type: 'minecraft:blasting'})
    }
    removeSmeltingRecipe('create:zinc_ingot')
    removeSmeltingRecipe('unify:tin_ingot')
    removeSmeltingRecipe('unify:silver_ingot')
    event.remove({mod: 'unify', type: 'create:splashing'})
    event.remove({type: 'create_dd:superheating'})
    event.remove({type: 'create_dd:freezing'})

    event.remove({output: 'create_dd:steel_ingot'})
})