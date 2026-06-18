ServerEvents.recipes(event => {
    const { create } = event.recipes

    create.sequenced_assembly(
        'kubejs:blaze_mechanism',
        [
            'kubejs:redstone_precision_mechanism'
        ],
        [
            create.filling('kubejs:incomplete_blaze_mechanism', [Fluid.of('kubejs:charged_orange_dye_solution', 125), 'kubejs:incomplete_blaze_mechanism']),
            create.filling('kubejs:incomplete_blaze_mechanism', [Fluid.of('minecraft:lava', 250), 'kubejs:incomplete_blaze_mechanism']),
            create.deploying('kubejs:incomplete_blaze_mechanism', ['kubejs:incomplete_blaze_mechanism', 'kubejs:precision_mechanism_1']),
            create.deploying('kubejs:incomplete_blaze_mechanism', ['kubejs:incomplete_blaze_mechanism', 'create:blaze_cake']),
            create.deploying('kubejs:incomplete_blaze_mechanism', ['kubejs:incomplete_blaze_mechanism', 'kubejs:precision_mechanism_4']),
        ],
        'kubejs:incomplete_blaze_mechanism',
        3
    ).id('kubejs:blaze/sequenced_assembly_blaze_mechanism')


    // create.deploying(
    //     'create:blaze_burner',
    //     [
    //         'create:empty_blaze_burner',
    //         'kubejs:blaze_mechanism'
    //     ]
    // )

    
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
    ).id('kubejs:blaze/item_application_blaze_burner_with_mechanism')
})