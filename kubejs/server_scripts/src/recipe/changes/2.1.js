ServerEvents.recipes(event => {
    const { create, vintageimprovements } = event.recipes

    event.remove({id: 'ars_nouveau:archwood_planks'})
    create.filling(
        '4x ars_nouveau:archwood_planks',
        [
            Fluid.of('kubejs:magic_potion', 1000),
            'kubejs:wood_set'
        ]
    ).id('kubejs:brass_changes/filling_archwood_planks')

    event.recipes.minecraft.crafting_shapeless(
        'ars_nouveau:creative_source_jar',
        [
            'ars_nouveau:source_jar',
            'kubejs:pack_blaze_mechanism',
            'ars_nouveau:volcanic_sourcelink'
        ]
    )

    vintageimprovements.pressurizing(
        [
            Item.of('kubejs:aggregated_andesite_alloy_mechanism').withChance(0.95),
            Item.of('kubejs:aggregated_brass_mechanism').withChance(0.95),
            Item.of('kubejs:aggregated_copper_mechanism').withChance(0.95),
            Item.of('kubejs:aggregated_diamond_mechanism').withChance(0.95),
            Item.of('kubejs:aggregated_gold_mechanism').withChance(0.95),
            Item.of('kubejs:aggregated_iron_mechanism').withChance(0.95),
            Item.of('kubejs:aggregated_stone_mechanism').withChance(0.95),
            Item.of('kubejs:aggregated_zinc_mechanism').withChance(0.95),
            Fluid.of('kubejs:sturdy_essence', 250)
        ],
        [
            'kubejs:aggregated_andesite_alloy_mechanism',
            'kubejs:aggregated_brass_mechanism',
            'kubejs:aggregated_copper_mechanism',
            'kubejs:aggregated_diamond_mechanism',
            'kubejs:aggregated_gold_mechanism',
            'kubejs:aggregated_iron_mechanism',
            'kubejs:aggregated_stone_mechanism',
            'kubejs:aggregated_zinc_mechanism',
            'kubejs:pack_sturdy_mechanism',
            Fluid.of('starbunclemania:source_fluid', 250)
        ]
    ).secondaryFluidInput(0).id('kubejs:pressurizing/sturdy_essence')

    create.mixing(
        Fluid.of('kubejs:blaze_essence', 250),
        [
            Fluid.of('kubejs:heat_lava', 1000),
            Fluid.of('starbunclemania:source_fluid', 250),
            'kubejs:pack_blaze_mechanism'
        ]
    ).superheated().id('kubejs:mixing/blaze_essence')
})