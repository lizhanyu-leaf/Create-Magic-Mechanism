ServerEvents.recipes(event => {
    const { create, vintageimprovements } = event.recipes

    event.remove({ id: 'createdieselgenerators:compacting/plant_oil'})

    // 锌锭注液
    create.filling(
        'create:zinc_ingot',
        [
            'create:andesite_alloy',
            Fluid.of('kubejs:charged_cyan_dye_solution', 125)
        ]
    ).id('kubejs:filling/redstone_changes/zinc_ingot_from_andesite_alloy')

    // event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_4'})

    event.remove({ id: 'vintageimprovements:sequenced_assembly/redstone_module'})

    event.remove({ output: 'vintageimprovements:spring_coiling_machine_wheel'})
    event.replaceInput(
        { input: 'vintageimprovements:spring_coiling_machine_wheel' },
        'vintageimprovements:spring_coiling_machine_wheel',
        'kubejs:precision_mechanism_2'
    )

    event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' })
    // 工业铁块部署
    create.deploying(
        'create:industrial_iron_block',
        [
            'minecraft:iron_block',
            'create_dd:industrial_iron_sheet'
        ]
    ).id('kubejs:redstone_changes/deploying_industrial_iron_block_from_iron_and_bedrock_powder')

    event.replaceInput(
        'createaddition:crafting/capacitor_1',
        'minecraft:redstone_torch',
        'kubejs:redstone_precision_mechanism'
    ),

    event.replaceInput(
        'createaddition:crafting/capacitor_1',
        'create:copper_sheet',
        'create:brass_sheet'
    )

    event.replaceInput(
        'createaddition:crafting/capacitor_2',
        'minecraft:redstone_torch',
        'kubejs:redstone_precision_mechanism'
    ),

    event.replaceInput(
        'createaddition:crafting/capacitor_2',
        'create:copper_sheet',
        'create:brass_sheet'
    )

    event.remove({ mod: 'createcasing'})

    // 自定义应用配方 - 工业平台
    event.custom(
        {
            type: 'create:item_application',
            ingredients: [
                {
                    item: 'create:andesite_casing'
                },
                {
                    item: 'kubejs:redstone_sheet'
                }
            ],
            results: [
                {
                    item: 'industrial_platform:industrial_platform'
                }
            ]
        }
    ).id('kubejs:redstone_changes/custom_item_application_industrial_platform')

    create.mixing(
        [
            'kubejs:experience_mechanism',
            Fluid.of('create:honey', 250)
        ],
        [
            'kubejs:experience_mechanism',
            Fluid.of('kubejs:strange_potion', 250),
            'minecraft:orange_dye'
        ]
    ).id('kubejs:redstone_changes/mixing_honey')

    vintageimprovements.pressurizing(
        [
            'minecraft:white_dye',
            'kubejs:colorful_mechanism',
            Fluid.of('kubejs:iridescent_concentrate', 125)
        ],
        [
            Fluid.of('minecraft:water', 200),
            Fluid.of('kubejs:strange_potion', 1000),
            'kubejs:colorful_mechanism'
        ]
    ).processingTime(90).secondaryFluidInput(0).secondaryFluidOutput(0).id('kubejs:pressurizing/dyes/white_dye_with_colorful_mechanism')

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
        ).processingTime(125).id(`kubejs:mixing/redstone_changes/${dye}_diluent`)

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
        ).processingTime(125).id(`kubejs:mixing/redstone_changes/${dye}_diluent_1000`)

        vintageimprovements.vacuumizing(
            [
                Fluid.of(`kubejs:${dye}_concentrate`, 250),
                Item.of(dye).withChance(0.25)
            ],
            [
                Fluid.of(`kubejs:${dye}_diluent`, 550),
                Fluid.of('kubejs:iridescent_concentrate', 50)
            ]
        ).processingTime(90).secondaryFluidInput(1).id(`kubejs:vacuumizing/redstone_changes/${dye}_concentrate`)

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
        ).processingTime(90).heated().secondaryFluidInput(1).secondaryFluidOutput(0).heated().id(`kubejs:pressurizing/redstone_changes/refined_${dye}_solution`)

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
        ).processingTime(60).heated().secondaryFluidInput(1).secondaryFluidOutput(0).heated().id(`kubejs:pressurizing/redstone_changes/refined_${dye}_solution_with_colorful_mechanism`)

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
        ).processingTime(156).secondaryFluidInput(0).secondaryFluidOutput(0).id(`kubejs:pressurizing/redstone_changes/refined_${dye}_with_colorful_mechanism`)

        create.mixing(
            [
                Fluid.of(`kubejs:refined_${dye}_solution`, 140)
            ],
            [
                `kubejs:refined_${dye}`,
                Fluid.of('minecraft:water', 120),
                Fluid.of('kubejs:iridescent_concentrate', 20)
            ]
        ).heated().id(`kubejs:mixing/redstone_changes/${dye}_solution`)

        if (dye != 'white_dye') {
            create.filling(
                `kubejs:refined_${dye}`,
                [
                    'kubejs:refined_white_dye',
                    Fluid.of(`kubejs:refined_${dye}_solution`, 120)
                ]
            ).id(`kubejs:filling/redstone_changes/refined_${dye}_with_refined_white_dye`)
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
        ).id(`kubejs:sequenced_assembly/redstone_changes/charged_${dye}`)

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
        ).superheated().id(`kubejs:mixing/redstone_changes/charged_${dye}_solution`)

        if (dye != 'white_dye') {
            create.filling(
                dye,
                [
                    'minecraft:white_dye',
                    Fluid.of(`kubejs:charged_${dye}_solution`, 5)
                ]
            ).id(`kubejs:filling/redstone_changes/white_dye_with_charged_${dye}`)

            create.filling(
                dye,
                [
                    'minecraft:white_dye',
                    Fluid.of(`kubejs:refined_${dye}_solution`, 95)
                ]
            ).id(`kubejs:filling/redstone_changes/white_dye_with_refined_${dye}`)
        }

    //     event.custom({
    //     type: 'createaddition:liquid_burning',
    //     input: {
    //         fluidTag: 'kubejs:gunpowder_diluent',
    //         amount: 1000
    //     },
    //     burnTime: 6000,
    //     superheated: true
    // }).id('kubejs:strange_potion/custom_liquid_burning_gunpowder_diluent')

        // event.custom({
        //     type: 'createaddition:liquid_burning',
        //     input: {
        //         fluid: `kubejs:${dye}_diluent`,
        //         amount: 1000
        //     },
        //     burnTime: 6000,
        //     superheated: true
        // }).id(`kubejs:strange_potion/custom_liquid_burning_${dye}_diluent`)

        // event.custom({
        //     type: 'createaddition:liquid_burning',
        //     input: {
        //         fluid: `kubejs:refined_${dye}_solution`,
        //         amount: 1000
        //     },
        //     burnTime: 36000,
        //     superheated: true
        // }).id(`kubejs:strange_potion/custom_liquid_burning_refined_${dye}_solution`)


        // event.custom({
        //     type: 'createaddition:liquid_burning',
        //     input: {
        //         fluid: `kubejs:charged_${dye}_solution`,
        //         amount: 1000
        //     },
        //     burnTime: 144000,
        //     superheated: true
        // }).id(`kubejs:strange_potion/custom_liquid_burning_charged_${dye}_solution`)
    })

    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:yellow_dye_diluent`,
            amount: 1000
        },
        burnTime: 12000,
        superheated: false
    }).id(`kubejs:liquid_burning/redstone_changes/burning_yellow_dye_diluent`)

    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:refined_yellow_dye_solution`,
            amount: 1000
        },
        burnTime: 72000,
        superheated: false
    }).id(`kubejs:liquid_burning/redstone_changes/burning_refined_yellow_dye_solution`)

    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:charged_yellow_dye_solution`,
            amount: 1000
        },
        burnTime: 288000,
        superheated: false
    }).id(`kubejs:liquid_burning/redstone_changes/burning_charged_yellow_dye_solution`)

    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:blue_dye_diluent`,
            amount: 1000
        },
        burnTime: 6000,
        superheated: true
    }).id(`kubejs:liquid_burning/redstone_changes/burning_blue_dye_diluent`)

    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:refined_blue_dye_solution`,
            amount: 1000
        },
        burnTime: 36000,
        superheated: true
    }).id(`kubejs:liquid_burning/redstone_changes/burning_refined_blue_dye_solution`)

    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:charged_blue_dye_solution`,
            amount: 1000
        },
        burnTime: 144000,
        superheated: true
    }).id(`kubejs:liquid_burning/redstone_changes/burning_charged_blue_dye_solution`)


    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:charged_blue_dye_solution`,
            amount: 1000
        },
        burnTime: 144000,
        superheated: true
    }).id(`kubejs:strange_potion/custom_liquid_burning_charged_blue_dye_solution`)

    // #region 
    event.remove({id: 'createaddition:compacting/seed_oil'})

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
    ).processingTime(187).secondaryFluidInput(0).superheated().id(`kubejs:pressurizing/redstone_changes/charged_white_dye_solution_with_iron_block`)

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
    ).processingTime(187).secondaryFluidInput(0).superheated().id(`kubejs:pressurizing/redstone_changes/charged_black_dye_solution_with_netherite_block`)

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
    ).processingTime(187).secondaryFluidInput(0).superheated().id(`kubejs:pressurizing/redstone_changes/charged_yellow_dye_solution_with_gold_block`)

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
    ).processingTime(187).secondaryFluidInput(0).superheated().id(`kubejs:pressurizing/redstone_changes/charged_orange_dye_solution_with_copper_block`)

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
    ).processingTime(187).secondaryFluidInput(0).superheated().id(`kubejs:pressurizing/redstone_changes/charged_lime_dye_solution_with_emerald_block`)

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
    ).processingTime(187).secondaryFluidInput(0).superheated().id(`kubejs:pressurizing/redstone_changes/charged_light_blue_dye_solution_with_diamond_block`)

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
    ).processingTime(187).secondaryFluidInput(0).superheated().id(`kubejs:pressurizing/redstone_changes/charged_light_blue_dye_solution_with_diamond_block_and_black_dye_solution`)

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
    ).processingTime(187).secondaryFluidInput(0).superheated().id(`kubejs:pressurizing/redstone_changes/charged_red_dye_solution_with_redstone_block`)

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
    ).processingTime(187).secondaryFluidInput(0).superheated().id(`kubejs:pressurizing/redstone_changes/charged_green_dye_solution_with_andesite_alloy_block`)

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
    ).processingTime(187).secondaryFluidInput(0).superheated().id(`kubejs:pressurizing/redstone_changes/charged_cyan_dye_solution_with_zinc_block`)
    
    vintageimprovements.pressurizing(
        [
            'kubejs:ore_set',
            '6x create_dd:tin_block',
            Fluid.of('kubejs:iridescent_concentrate', 250)
        ],
        [
            'kubejs:ore_set',
            'create_dd:tin_block',
            Fluid.of('kubejs:charged_light_gray_dye_solution', 250)
        ]
    ).processingTime(187).secondaryFluidInput(0).superheated().id(`kubejs:pressurizing/redstone_changes/charged_light_gray_dye_solution_with_tin_block`)
    
    // endregion

    create.sequenced_assembly(
        'kubejs:iridescent_alloy',
        'create:andesite_alloy',
        // [
        //     vintageimprovements.pressurizing(
        //         'create:andesite_alloy',
        //         [
        //             Fluid.of('kubejs:assembly_molten_zinc', 5),
        //             'create:andesite_alloy'
        //         ]
        //     ),
        // ],
        [vintageimprovements.pressurizing('create:andesite_alloy',[Fluid.of('kubejs:assembly_molten_gold', 5),'create:andesite_alloy'])].concat(
            dyes.map(dye => {
               return create.filling('create:andesite_alloy', ['create:andesite_alloy', Fluid.of(`kubejs:charged_${dye}_solution`, 125)])})),
        'create:andesite_alloy',
        1
    ).id('kubejs:sequenced_assembly/redstone_changes/iridescent_alloy_from_andesite')
    event.remove({id:'minecraft:ender_eye'})
    event.remove({id: 'create_dd:mixing/chromatic_compound'})
    vintageimprovements.pressurizing(
        [
            'create_dd:chromatic_compound',
            'kubejs:colorful_mechanism',
            Fluid.of('minecraft:water', 1000)
        ],
        [
            'kubejs:colorful_mechanism',
            '16x create:powdered_obsidian',
            'create:polished_rose_quartz',
            'kubejs:iridescent_alloy',
            'create_dd:polished_spectral_ruby',
            Fluid.of('kubejs:charged_purple_dye_solution', 125),
            Fluid.of('kubejs:iridescent_concentrate', 1000)
        ]
    ).superheated().secondaryFluidInput(1).secondaryFluidOutput(0).id('kubejs:pressurizing/redstone_changes/chromatic_compound')

    // event.replaceInput({id:'create_dd:mixing/mithril_ingot'}, 'create_dd:glowberry_milkshake', 'kubejs:charged_lime_dye_solution')
    event.remove({id:'create_dd:mixing/mithril_ingot'})
    create.mixing(
        'create_dd:mithril_ingot',
        [
            'create_dd:steel_ingot',
            'create_dd:bronze_ingot',
            'create_dd:chromatic_compound',
            'create:experience_nugget',
            Fluid.of('kubejs:charged_lime_dye_solution', 500)
        ]
    ).superheated().processingTime(90).id('kubejs:mixing/redstone_changes/mithril_ingot')
    event.replaceInput({id: 'beyonddimensions:unstable_space_time_fragment'},
        'tnt', 'create_dd:mithril_nugget'
    )
    event.replaceInput({id: 'beyonddimensions:unstable_space_time_fragment'},
        'nether_star', 'create_dd:experience_mass'
    )
    event.replaceInput({id: 'beyonddimensions:net_creater'},
        'netherite_ingot', 'create_dd:stargaze_singularity'
    )

    create.deploying(
        'milk_bucket',
        [
            'bucket',
            'createaddition:biomass'
        ]
    ).id('kubejs:deploying/milk_bucket')

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
    ).id('kubejs:sequenced_assembly/redstone_changes/ore_set')

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
    ).id('kubejs:compacting/redstone_changes/basic_ore_set_with_ore_set')
})