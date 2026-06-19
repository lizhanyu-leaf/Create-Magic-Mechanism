ServerEvents.recipes(event => {
    const { create, vintageimprovements } = event.recipes

    // #region Use
    
    if (!TechnologyTools.isActive('strange_potion')) return;

    // #endregion

    // vintageimprovements.pressurizing(
    //     Fluid.of('kubejs:magenta_strange_potion', 500),
    //     [
    //         Fluid.of('kubejs:strange_potion', 250),
    //         Fluid.of('kubejs:redstone_diluent', 100),
    //         Fluid.of('kubejs:slime', 150),
    //         Fluid.of('createaddition:seed_oil', 500),
    //         'minecraft:magenta_dye'
    //     ],
    // ).secondaryFluidInput(3)

    create.sequenced_assembly(
        'kubejs:magenta_strange_potion_bucket',
        'kubejs:strange_potion_bucket',
        [
            vintageimprovements.pressurizing(
                'kubejs:strange_potion_bucket',
                [
                    'kubejs:strange_potion_bucket',
                    Fluid.of('kubejs:redstone_diluent', 200)
                ]
            ),

            vintageimprovements.pressurizing(
                'kubejs:strange_potion_bucket',
                [
                    'kubejs:strange_potion_bucket',
                    Fluid.of('kubejs:slime', 300)
                ]
            ),

            vintageimprovements.pressurizing(
                'kubejs:strange_potion_bucket',
                [
                    'kubejs:strange_potion_bucket',
                    Fluid.of('createaddition:seed_oil', 1000)
                ]
            ),

            create.filling(
                'kubejs:incomplete_magic_mechanism',
                [
                    'kubejs:incomplete_magic_mechanism',
                    Fluid.of('kubejs:charged_magenta_dye_solution', 1000)
                ]
            )
        ],
        'kubejs:strange_potion_bucket',
        1
    ).id('kubejs:strange_potion/sequenced_assembly_magenta_strange_potion_bucket')

    // vintageimprovements.vacuumizing(
    //     Fluid.of('kubejs:magic_potion', 100),
    //     [
    //         Fluid.of('createdieselgenerators:crude_oil', 200),
    //         Fluid.of('createdieselgenerators:biodiesel', 200),
    //         Fluid.of('kubejs:magenta_strange_potion', 250),
    //         Fluid.of('kubejs:gunpowder_diluent', 250),
    //         Fluid.of('createdieselgenerators:ethanol', 100),
    //         Fluid.of('kubejs:strange_potion', 1000),
    //         'createcasing:chorium_ingot'
    //     ]
    // ).secondaryFluidInput(5)

    create.sequenced_assembly(
        'kubejs:magic_potion_bucket',
        'kubejs:magenta_strange_potion_bucket',
        [
            vintageimprovements.pressurizing(
                'kubejs:magenta_strange_potion_bucket',
                [
                    'kubejs:magenta_strange_potion_bucket',
                    Fluid.of('createdieselgenerators:crude_oil', 200)
                ]
            ),

            vintageimprovements.pressurizing(
                'kubejs:magenta_strange_potion_bucket',
                [
                    'kubejs:magenta_strange_potion_bucket',
                    Fluid.of('createdieselgenerators:biodiesel', 200)
                ]
            ),

            vintageimprovements.pressurizing(
                'kubejs:magenta_strange_potion_bucket',
                [
                    'kubejs:magenta_strange_potion_bucket',
                    Fluid.of('kubejs:gunpowder_diluent', 250)
                ]
            ),

            vintageimprovements.pressurizing(
                'kubejs:magenta_strange_potion_bucket',
                [
                    'kubejs:magenta_strange_potion_bucket',
                    Fluid.of('kubejs:iridescent_concentrate', 250)
                ]
            ),

            vintageimprovements.pressurizing(
                'kubejs:magenta_strange_potion_bucket',
                [
                    'kubejs:magenta_strange_potion_bucket',
                    Fluid.of('kubejs:strange_potion', 1000)
                ]
            ),
        ],
        'kubejs:magenta_strange_potion_bucket',
        10
    ).id('kubejs:strange_potion/sequenced_assembly_magic_potion_bucket')

    

    create.sequenced_assembly(
        'kubejs:magic_mechanism',
        'kubejs:bedrock_sheet',
        [
            create.filling(
                'kubejs:incomplete_magic_mechanism',
                [
                    'kubejs:incomplete_magic_mechanism',
                    Fluid.of('kubejs:magic_potion', 1000)
                ]
            ),

            create.filling(
                'kubejs:incomplete_magic_mechanism',
                [
                    'kubejs:incomplete_magic_mechanism',
                    Fluid.of('kubejs:charged_purple_dye_solution', 1000)
                ]
            ),

            create.deploying(
                'kubejs:incomplete_magic_mechanism',
                [
                    'kubejs:incomplete_magic_mechanism',
                    'kubejs:slime_mechanism'
                ]
            ),

            create.deploying(
                'kubejs:incomplete_magic_mechanism',
                [
                    'kubejs:incomplete_magic_mechanism',
                    'minecraft:diamond'
                ]
            ),

            vintageimprovements.laser_cutting(
                'kubejs:incomplete_magic_mechanism',
                'kubejs:incomplete_magic_mechanism',
                10000,
                250
            ),

            vintageimprovements.vacuumizing(
                'kubejs:incomplete_magic_mechanism',
                [
                    'kubejs:incomplete_magic_mechanism',
                    Fluid.of('kubejs:refrigerant', 1000)
                ]
            )
        ],
        'kubejs:incomplete_magic_mechanism',
        1
    ).id('kubejs:strange_potion/sequenced_assembly_magic_mechanism')
})