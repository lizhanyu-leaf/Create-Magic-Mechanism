ServerEvents.recipes(event => {
    const { createoreexcavation, create } = event.recipes

    // event.remove({id:'createoreexcavation:ore_vein_type/water'})
    event.remove({type:'createoreexcavation:vein'})
    event.remove({type:'createoreexcavation:drilling'})
    event.remove({type:'createoreexcavation:extracting'})

    createoreexcavation.vein(
        Component.of('铁矿脉'),
        'minecraft:iron_block'
    )
    .placement(32, 3, 64825185)
    .biomeWhitelist('kubejs:is_stone_rich')
    .id('kubejs:vein/iron')

    createoreexcavation.drilling(
        [
            Item.of('minecraft:iron_ingot', 7).withChance(0.9),
            Item.of('minecraft:iron_block', 2).withChance(0.75)
        ],
        'kubejs:vein/iron', 5
    )
    .drill('kubejs:blaze_mechanism').fluid(Fluid.of('minecraft:water', 125))
    .id('kubejs:drilling/blaze_mechanism/iron')

    createoreexcavation.drilling(
        [
            Item.of('minecraft:iron_block', 32),
            Item.of('createcompression:compressed_iron_1x', 5).withChance(0.75),
            Item.of('createcompression:compressed_iron_2x', 2).withChance(0.65),
            Item.of('createcompression:compressed_iron_2x', 2).withChance(0.15)
        ],
        'kubejs:vein/iron', 5
    )
    .drill('kubejs:magic_mechanism').fluid(Fluid.of('kubejs:magic_potion', 125))
    .stress(32768)
    .id('kubejs:drilling/magic_mechanism/iron')

    createoreexcavation.vein(
        Component.of('金矿脉'),
        'minecraft:gold_block'
    )
    .placement(32, 3, 79456246)
    .biomeWhitelist('kubejs:is_stone_rich')
    .id('kubejs:vein/gold')

    createoreexcavation.drilling(
        [
            Item.of('minecraft:gold_ingot', 7).withChance(0.9),
            Item.of('minecraft:gold_block', 2).withChance(0.75)
        ],
        'kubejs:vein/gold', 5
    )
    .drill('kubejs:blaze_mechanism').fluid(Fluid.of('minecraft:water', 125))
    .id('kubejs:drilling/blaze_mechanism/gold')

    createoreexcavation.drilling(
        [
            Item.of('minecraft:gold_block', 32),
            Item.of('createcompression:compressed_gold_1x', 5).withChance(0.75),
            Item.of('createcompression:compressed_gold_2x', 2).withChance(0.65),
            Item.of('createcompression:compressed_gold_2x', 2).withChance(0.15)
        ],
        'kubejs:vein/gold', 5
    )
    .drill('kubejs:magic_mechanism').fluid(Fluid.of('kubejs:magic_potion', 125))
    .stress(32768)
    .id('kubejs:drilling/magic_mechanism/gold')
})