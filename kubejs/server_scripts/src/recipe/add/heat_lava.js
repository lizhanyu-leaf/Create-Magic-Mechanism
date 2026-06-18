ServerEvents.recipes(event => {

    const { create, vintageimprovements } = event.recipes

    create.mixing(
        Fluid.of('kubejs:heat_lava', 1000),
        [
            'kubejs:blaze_mechanism',
            Fluid.of('minecraft:lava', 1000)
        ]
    ).superheated().id('kubejs:heat_lava')

    create.haunting(
        [
            Item.of('minecraft:soul_sand', 3),
            Item.of('minecraft:soul_sand').withChance(0.25),
        ],
        'kubejs:blaze_mechanism'
    ).id('kubejs:haunting/blaze_mechanism_to_soul_sand')

    create.mixing(
        Fluid.of('kubejs:soul_lava', 200),
        [
            'minecraft:soul_sand',
            Fluid.of('kubejs:heat_lava', 200)
        ]
    ).id('kubejs:mixing/soul_lava')

    create.sequenced_assembly(
        'kubejs:ice_powder',
        'minecraft:quartz',
        [
            vintageimprovements.pressurizing(
                'kubejs:incomplete_ice_powder',
                [
                    'kubejs:incomplete_ice_powder',
                    Fluid.of('kubejs:heat_lava', 500)
                ]
            ),

            vintageimprovements.vacuumizing(
                'kubejs:incomplete_ice_powder',
                [
                    'kubejs:incomplete_ice_powder',
                    Fluid.of('kubejs:slime', 500)
                ]
            ),

            create.filling(
                'kubejs:incomplete_ice_powder',
                [
                    'kubejs:incomplete_ice_powder',
                    Fluid.of('kubejs:charged_light_blue_dye_solution', 250)
                ]
            )
        ],
        'kubejs:incomplete_ice_powder',
        1
    ).id('kubejs:sequenced_assembly/ice_powder')

    create.mixing(
        Fluid.of('kubejs:refrigerant', 1000),
        [
            'kubejs:ice_powder',
            Fluid.of('minecraft:water', 1000)
        ]
    ).superheated().id('kubejs:mixing/refrigerant')
})