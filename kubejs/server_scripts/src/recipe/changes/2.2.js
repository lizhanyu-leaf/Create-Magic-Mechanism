ServerEvents.recipes(event => {
    const { create, vintageimprovements } = event.recipes

    // iron
    vintageimprovements.pressurizing(
        Fluid.of('kubejs:assembly_molten_iron', 10),
        [
            'kubejs:pack_iron',
            Fluid.of('kubejs:heat_lava', 200)
        ]
    ).secondaryFluidInput(0).id('kubejs:pressurizing/aggregation_changes/assembly_molten_iron_from_pack')

    create.compacting(
        ['12x iron_ingot'],
        Fluid.of('kubejs:assembly_molten_iron', 1)
    ).id('kubejs:compacting/aggregation_changes/iron_ingot_from_molten')

    // gold
    vintageimprovements.pressurizing(
        Fluid.of('kubejs:assembly_molten_gold', 10),
        [
            'kubejs:pack_gold',
            Fluid.of('kubejs:heat_lava', 200)
        ]
    ).secondaryFluidInput(0)

    create.compacting(
        ['12x gold_ingot'],
        Fluid.of('kubejs:assembly_molten_gold', 1)
    ).id('kubejs:compacting/aggregation_changes/gold_ingot_from_molten')

    // diamond
    vintageimprovements.pressurizing(
        Fluid.of('kubejs:assembly_molten_diamond', 10),
        [
            'kubejs:pack_diamond',
            Fluid.of('kubejs:heat_lava', 200)
        ]
    ).secondaryFluidInput(0)

    create.compacting(
        ['12x diamond'],
        Fluid.of('kubejs:assembly_molten_diamond', 1)
    ).id('kubejs:compacting/aggregation_changes/diamond_from_molten')

    // copper
    vintageimprovements.pressurizing(
        Fluid.of('kubejs:assembly_molten_copper', 10),
        [
            'kubejs:pack_copper',
            Fluid.of('kubejs:heat_lava', 200)
        ]
    ).secondaryFluidInput(0)

    create.compacting(
        ['12x copper_ingot'],
        Fluid.of('kubejs:assembly_molten_copper', 1)
    ).id('kubejs:compacting/aggregation_changes/copper_ingot_from_molten')

    // andesite_alloy
    vintageimprovements.pressurizing(
        Fluid.of('kubejs:assembly_molten_andesite_alloy', 10),
        [
            'kubejs:pack_andesite_alloy',
            Fluid.of('kubejs:heat_lava', 200)
        ]
    ).secondaryFluidInput(0)

    create.compacting(
        ['12x create:andesite_alloy'],
        Fluid.of('kubejs:assembly_molten_andesite_alloy', 1)
    ).id('kubejs:compacting/aggregation_changes/andesite_alloy_from_molten')

    // brass
    vintageimprovements.pressurizing(
        Fluid.of('kubejs:assembly_molten_brass', 10),
        [
            'kubejs:pack_brass',
            Fluid.of('kubejs:heat_lava', 200)
        ]
    ).secondaryFluidInput(0)

    create.compacting(
        ['12x create:brass_ingot'],
        Fluid.of('kubejs:assembly_molten_brass', 1)
    ).id('kubejs:compacting/aggregation_changes/brass_ingot_from_molten')

    // zinc
    vintageimprovements.pressurizing(
        Fluid.of('kubejs:assembly_molten_zinc', 10),
        [
            'kubejs:pack_zinc',
            Fluid.of('kubejs:heat_lava', 200)
        ]
    ).secondaryFluidInput(0)

    create.compacting(
        ['12x create:zinc_ingot'],
        Fluid.of('kubejs:assembly_molten_zinc', 1)
    ).id('kubejs:compacting/aggregation_changes/zinc_ingot_from_molten')

    // stone
    vintageimprovements.pressurizing(
        Fluid.of('kubejs:assembly_molten_stone', 10),
        [
            'kubejs:pack_stone',
            Fluid.of('kubejs:heat_lava', 200)
        ]
    ).secondaryFluidInput(0)

    create.sequenced_assembly(
        [
            'kubejs:assembly_block',
            Item.of('kubejs:pack_stone').withChance(0.01),
            Item.of('kubejs:pack_zinc').withChance(0.01),
            Item.of('kubejs:pack_brass').withChance(0.01),
            Item.of('kubejs:pack_andesite_alloy').withChance(0.01),
            Item.of('kubejs:pack_copper').withChance(0.01),
            Item.of('kubejs:pack_diamond').withChance(0.01),
            Item.of('kubejs:pack_gold').withChance(0.01),
            Item.of('kubejs:pack_iron').withChance(0.01)
        ],
        'kubejs:precision_mechanism_1',
        [
            create.filling(
                'kubejs:incomplete_assembly_block',
                [
                    'kubejs:incomplete_assembly_block',
                    Fluid.of('kubejs:assembly_molten_iron', 10)
                ]
            ),

            create.filling(
                'kubejs:incomplete_assembly_block',
                [
                    'kubejs:incomplete_assembly_block',
                    Fluid.of('kubejs:assembly_molten_gold', 10)
                ]
            ),

            create.filling(
                'kubejs:incomplete_assembly_block',
                [
                    'kubejs:incomplete_assembly_block',
                    Fluid.of('kubejs:assembly_molten_copper', 10)
                ]
            ),

            create.filling(
                'kubejs:incomplete_assembly_block',
                [
                    'kubejs:incomplete_assembly_block',
                    Fluid.of('kubejs:assembly_molten_diamond', 10)
                ]
            ),

            create.filling(
                'kubejs:incomplete_assembly_block',
                [
                    'kubejs:incomplete_assembly_block',
                    Fluid.of('kubejs:assembly_molten_andesite_alloy', 10)
                ]
            ),

            create.filling(
                'kubejs:incomplete_assembly_block',
                [
                    'kubejs:incomplete_assembly_block',
                    Fluid.of('kubejs:assembly_molten_zinc', 10)
                ]
            ),

            create.filling(
                'kubejs:incomplete_assembly_block',
                [
                    'kubejs:incomplete_assembly_block',
                    Fluid.of('kubejs:assembly_molten_brass', 10)
                ]
            ),

            create.filling(
                'kubejs:incomplete_assembly_block',
                [
                    'kubejs:incomplete_assembly_block',
                    Fluid.of('kubejs:refrigerant', 1000)
                ]
            )
        ],
        'kubejs:incomplete_assembly_block',
        10
    )

    // Andesite
    create.sequenced_assembly(
        Item.of('kubejs:aggregated_andesite_alloy_mechanism').withChance(0.25),
        'kubejs:pack_andesite_alloy',
        [
            create.deploying(
                'kubejs:incomplete_aggregated_andesite_alloy_mechanism',
                [
                    'kubejs:incomplete_aggregated_andesite_alloy_mechanism',
                    'kubejs:assembly_block'
                ]
            ),

            create.deploying(
                'kubejs:incomplete_aggregated_andesite_alloy_mechanism',
                [
                    'kubejs:incomplete_aggregated_andesite_alloy_mechanism',
                    'vintageimprovements:andesite_rod'
                ]
            ),

            vintageimprovements.pressurizing(
                'kubejs:incomplete_aggregated_andesite_alloy_mechanism',
                [
                    'kubejs:incomplete_aggregated_andesite_alloy_mechanism',
                    Fluid.of('kubejs:heat_lava', 250)
                ]
            ),

            create.deploying(
                'kubejs:incomplete_aggregated_andesite_alloy_mechanism',
                [
                    'kubejs:incomplete_aggregated_andesite_alloy_mechanism',
                    'vintageimprovements:andesite_spring'
                ]
            ),

            create.filling(
                'kubejs:incomplete_aggregated_andesite_alloy_mechanism',
                [
                    'kubejs:incomplete_aggregated_andesite_alloy_mechanism',
                    Fluid.of('kubejs:assembly_molten_andesite_alloy', 25)
                ]
            ),

            create.filling(
                'kubejs:incomplete_aggregated_andesite_alloy_mechanism',
                [
                    'kubejs:incomplete_aggregated_andesite_alloy_mechanism',
                    Fluid.of('kubejs:refrigerant', 1000)
                ]
            )   
        ],
        'kubejs:incomplete_aggregated_andesite_alloy_mechanism', 1
    ).id('kubejs:aggregated_andesite_alloy_mechanism_sequenced_assembly')

    // Iron
    create.sequenced_assembly(
        Item.of('kubejs:aggregated_iron_mechanism').withChance(0.25),
        'kubejs:pack_iron',
        [
            create.deploying(
                'kubejs:incomplete_aggregated_iron_mechanism',
                [
                    'kubejs:incomplete_aggregated_iron_mechanism',
                    'kubejs:assembly_block'
                ]
            ),

            create.deploying(
                'kubejs:incomplete_aggregated_iron_mechanism',
                [
                    'kubejs:incomplete_aggregated_iron_mechanism',
                    'createaddition:iron_rod'
                ]
            ),

            vintageimprovements.pressurizing(
                'kubejs:incomplete_aggregated_iron_mechanism',
                [
                    'kubejs:incomplete_aggregated_iron_mechanism',
                    Fluid.of('kubejs:heat_lava', 250)
                ]
            ),

            create.deploying(
                'kubejs:incomplete_aggregated_iron_mechanism',
                [
                    'kubejs:incomplete_aggregated_iron_mechanism',
                    'vintageimprovements:iron_spring'
                ]
            ),

            create.filling(
                'kubejs:incomplete_aggregated_iron_mechanism',
                [
                    'kubejs:incomplete_aggregated_iron_mechanism',
                    Fluid.of('kubejs:assembly_molten_iron', 25)
                ]
            ),

            create.filling(
                'kubejs:incomplete_aggregated_iron_mechanism',
                [
                    'kubejs:incomplete_aggregated_iron_mechanism',
                    Fluid.of('kubejs:refrigerant', 1000)
                ]
            )   
        ],
        'kubejs:incomplete_aggregated_iron_mechanism', 1
    ).id('kubejs:aggregated_iron_mechanism_sequenced_assembly')

    // Gold
    create.sequenced_assembly(
        Item.of('kubejs:aggregated_gold_mechanism').withChance(0.25),
        'kubejs:pack_gold',
        [
            create.deploying(
                'kubejs:incomplete_aggregated_gold_mechanism',
                [
                    'kubejs:incomplete_aggregated_gold_mechanism',
                    'kubejs:assembly_block'
                ]
            ),
            create.deploying(
                'kubejs:incomplete_aggregated_gold_mechanism',
                [
                    'kubejs:incomplete_aggregated_gold_mechanism',
                    'createaddition:gold_rod'
                ]
            ),
            vintageimprovements.pressurizing(
                'kubejs:incomplete_aggregated_gold_mechanism',
                [
                    'kubejs:incomplete_aggregated_gold_mechanism',
                    Fluid.of('kubejs:heat_lava', 250)
                ]
            ),

            create.deploying(
                'kubejs:incomplete_aggregated_gold_mechanism',
                [
                    'kubejs:incomplete_aggregated_gold_mechanism',
                    'vintageimprovements:golden_spring'
                ]
            ),

            create.filling(
                'kubejs:incomplete_aggregated_gold_mechanism',
                [
                    'kubejs:incomplete_aggregated_gold_mechanism',
                    Fluid.of('kubejs:assembly_molten_gold', 25)
                ]
            ),

            create.filling(
                'kubejs:incomplete_aggregated_gold_mechanism',
                [
                    'kubejs:incomplete_aggregated_gold_mechanism',
                    Fluid.of('kubejs:refrigerant', 1000)
                ]
            )
        ],
        'kubejs:incomplete_aggregated_gold_mechanism', 1
    ).id('kubejs:aggregated_gold_mechanism_sequenced_assembly')

    // Diamond
    create.sequenced_assembly(
        Item.of('kubejs:aggregated_diamond_mechanism').withChance(0.25),
        'kubejs:pack_diamond',
        [
            create.deploying(
                'kubejs:incomplete_aggregated_diamond_mechanism',
                [
                    'kubejs:incomplete_aggregated_diamond_mechanism',
                    'kubejs:assembly_block'
                ]
            ),
            create.deploying(
                'kubejs:incomplete_aggregated_diamond_mechanism',
                [
                    'kubejs:incomplete_aggregated_diamond_mechanism',
                    'createaddition:diamond_grit'
                ]
            ),
            vintageimprovements.pressurizing(
                'kubejs:incomplete_aggregated_diamond_mechanism',
                [
                    'kubejs:incomplete_aggregated_diamond_mechanism',
                    Fluid.of('kubejs:heat_lava', 250)
                ]
            ),
            create.deploying(
                'kubejs:incomplete_aggregated_diamond_mechanism',
                [
                    'kubejs:incomplete_aggregated_diamond_mechanism',
                    'minecraft:diamond_pickaxe'
                ]
            ),
            create.filling(
                'kubejs:incomplete_aggregated_diamond_mechanism',
                [
                    'kubejs:incomplete_aggregated_diamond_mechanism',
                    Fluid.of('kubejs:assembly_molten_diamond', 25)
                ]
            ),

            create.filling(
                'kubejs:incomplete_aggregated_diamond_mechanism',
                [
                    'kubejs:incomplete_aggregated_diamond_mechanism',
                    Fluid.of('kubejs:refrigerant', 1000)
                ]
            )
        ],
        'kubejs:incomplete_aggregated_diamond_mechanism', 1
    ).id('kubejs:aggregated_diamond_mechanism_sequenced_assembly')

    // Zinc
    create.sequenced_assembly(
        Item.of('kubejs:aggregated_zinc_mechanism').withChance(0.25),
        'kubejs:pack_zinc',
        [
            create.deploying(
                'kubejs:incomplete_aggregated_zinc_mechanism',
                [
                    'kubejs:incomplete_aggregated_zinc_mechanism',
                    'kubejs:assembly_block'
                ]
            ),
            create.deploying(
                'kubejs:incomplete_aggregated_zinc_mechanism',
                [
                    'kubejs:incomplete_aggregated_zinc_mechanism',
                    'vintageimprovements:zinc_rod'
                ]
            ),
            vintageimprovements.pressurizing(
                'kubejs:incomplete_aggregated_zinc_mechanism',
                [
                    'kubejs:incomplete_aggregated_zinc_mechanism',
                    Fluid.of('kubejs:heat_lava', 250)
                ]
            ),
            create.deploying(
                'kubejs:incomplete_aggregated_zinc_mechanism',
                [
                    'kubejs:incomplete_aggregated_zinc_mechanism',
                    'vintageimprovements:zinc_spring'
                ]
            ),
            create.filling(
                'kubejs:incomplete_aggregated_zinc_mechanism',
                [
                    'kubejs:incomplete_aggregated_zinc_mechanism',
                    Fluid.of('kubejs:assembly_molten_zinc', 25)
                ]
            ),

            create.filling(
                'kubejs:incomplete_aggregated_zinc_mechanism',
                [
                    'kubejs:incomplete_aggregated_zinc_mechanism',
                    Fluid.of('kubejs:refrigerant', 1000)
                ]
            )
        ],
        'kubejs:incomplete_aggregated_zinc_mechanism', 1
    ).id('kubejs:aggregated_zinc_mechanism_sequenced_assembly')

    // Brass
    create.sequenced_assembly(
        Item.of('kubejs:aggregated_brass_mechanism').withChance(0.25),
        'kubejs:pack_brass',
        [
            create.deploying(
                'kubejs:incomplete_aggregated_brass_mechanism',
                [
                    'kubejs:incomplete_aggregated_brass_mechanism',
                    'kubejs:assembly_block'
                ]
            ),

            create.deploying(
                'kubejs:incomplete_aggregated_brass_mechanism',
                [
                    'kubejs:incomplete_aggregated_brass_mechanism',
                    'createaddition:brass_rod'
                ]
            ),

            vintageimprovements.pressurizing(
                'kubejs:incomplete_aggregated_brass_mechanism',
                [
                    'kubejs:incomplete_aggregated_brass_mechanism',
                    Fluid.of('kubejs:heat_lava', 250)
                ]
            ),

            create.deploying(
                'kubejs:incomplete_aggregated_brass_mechanism',
                [
                    'kubejs:incomplete_aggregated_brass_mechanism',
                    'vintageimprovements:brass_spring'
                ]
            ),

            create.filling(
                'kubejs:incomplete_aggregated_brass_mechanism',
                [
                    'kubejs:incomplete_aggregated_brass_mechanism',
                    Fluid.of('kubejs:assembly_molten_brass', 25)
                ]
            ),

            create.filling(
                'kubejs:incomplete_aggregated_brass_mechanism',
                [
                    'kubejs:incomplete_aggregated_brass_mechanism',
                    Fluid.of('kubejs:refrigerant', 1000)
                ]
            )
        ],
        'kubejs:incomplete_aggregated_brass_mechanism', 1
    ).id('kubejs:aggregated_brass_mechanism_sequenced_assembly')

    // Copper
    create.sequenced_assembly(
        Item.of('kubejs:aggregated_copper_mechanism').withChance(0.25),
        'kubejs:pack_copper',
        [
            create.deploying(
                'kubejs:incomplete_aggregated_copper_mechanism',
                [
                    'kubejs:incomplete_aggregated_copper_mechanism',
                    'kubejs:assembly_block'
                ]
            ),
            create.deploying(
                'kubejs:incomplete_aggregated_copper_mechanism',
                [
                    'kubejs:incomplete_aggregated_copper_mechanism',
                    'createaddition:copper_rod'
                ]
            ),
            vintageimprovements.pressurizing(
                'kubejs:incomplete_aggregated_copper_mechanism',
                [
                    'kubejs:incomplete_aggregated_copper_mechanism',
                    Fluid.of('kubejs:heat_lava', 250)
                ]
            ),
            create.deploying(
                'kubejs:incomplete_aggregated_copper_mechanism',
                [
                    'kubejs:incomplete_aggregated_copper_mechanism',
                    'vintageimprovements:copper_spring'
                ]
            ),
            create.filling(
                'kubejs:incomplete_aggregated_copper_mechanism',
                [
                    'kubejs:incomplete_aggregated_copper_mechanism',
                    Fluid.of('kubejs:assembly_molten_copper', 25)
                ]
            ),
            create.filling(
                'kubejs:incomplete_aggregated_copper_mechanism',
                [
                    'kubejs:incomplete_aggregated_copper_mechanism',
                    Fluid.of('kubejs:refrigerant', 1000)
                ]
            )
        ],
        'kubejs:incomplete_aggregated_copper_mechanism', 1
    ).id('kubejs:aggregated_copper_mechanism_sequenced_assembly')

    // Stone
    create.sequenced_assembly(
        Item.of('kubejs:aggregated_stone_mechanism').withChance(0.25),
        'kubejs:pack_stone',
        [
            create.deploying(
                'kubejs:incomplete_aggregated_stone_mechanism',
                [
                    'kubejs:incomplete_aggregated_stone_mechanism',
                    'kubejs:assembly_block'
                ]
            ),
            create.deploying(
                'kubejs:incomplete_aggregated_stone_mechanism',
                [
                    'kubejs:incomplete_aggregated_stone_mechanism',
                    'minecraft:stone_button'
                ]
            ),
            vintageimprovements.pressurizing(
                'kubejs:incomplete_aggregated_stone_mechanism',
                [
                    'kubejs:incomplete_aggregated_stone_mechanism',
                    Fluid.of('kubejs:heat_lava', 250)
                ]
            ),
            create.deploying(
                'kubejs:incomplete_aggregated_stone_mechanism',
                [
                    'kubejs:incomplete_aggregated_stone_mechanism',
                    'minecraft:stone_slab'
                ]
            ),
            create.filling(
                'kubejs:incomplete_aggregated_stone_mechanism',
                [
                    'kubejs:incomplete_aggregated_stone_mechanism',
                    Fluid.of('kubejs:assembly_molten_stone', 25)
                ]
            ),
            create.filling(
                'kubejs:incomplete_aggregated_stone_mechanism',
                [
                    'kubejs:incomplete_aggregated_stone_mechanism',
                    Fluid.of('kubejs:refrigerant', 1000)
                ]
            )
        ],
        'kubejs:incomplete_aggregated_stone_mechanism', 1
    ).id('kubejs:aggregated_stone_mechanism_sequenced_assembly')
})