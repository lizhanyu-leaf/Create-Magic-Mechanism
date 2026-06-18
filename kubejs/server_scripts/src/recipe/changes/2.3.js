ServerEvents.recipes(event => {
    const { create, vintageimprovements, ars_nouveau } = event.recipes

    create.filling(
        'kubejs:unstable_item',
        [
            'ars_nouveau:source_gem',
            Fluid.of('kubejs:magic_potion', 100)
        ]
    ).id('kubejs:unstable_item')
})