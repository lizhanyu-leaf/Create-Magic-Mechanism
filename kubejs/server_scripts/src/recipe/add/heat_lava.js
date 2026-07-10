ServerEvents.recipes(event => {

    const { create, vintageimprovements } = event.recipes

    create.mixing(
        Fluid.of('kubejs:high_temperature_magma', 1000),
        [
            'kubejs:blaze_mechanism',
            Fluid.of('minecraft:lava', 1000)
        ]
    ).superheated().id('kubejs:high_temperature_magma')

    create.mixing(
        Fluid.of('kubejs:soul_magma', 200),
        [
            'minecraft:soul_sand',
            Fluid.of('kubejs:high_temperature_magma', 200)
        ]
    ).id('kubejs:mixing/soul_magma')
})