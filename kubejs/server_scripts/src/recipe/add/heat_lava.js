ServerEvents.recipes(event => {

    const { create, vintageimprovements } = event.recipes

    create.mixing(
        Fluid.of('kubejs:heat_lava', 1000),
        [
            'kubejs:blaze_mechanism',
            Fluid.of('minecraft:lava', 1000)
        ]
    ).superheated().id('kubejs:heat_lava')

    create.mixing(
        Fluid.of('kubejs:soul_lava', 200),
        [
            'minecraft:soul_sand',
            Fluid.of('kubejs:heat_lava', 200)
        ]
    ).id('kubejs:mixing/soul_lava')
})