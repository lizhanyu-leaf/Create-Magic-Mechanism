ServerEvents.tags('item', event => {
    event.add('vintageimprovements:curving_heads', [
        'create:blaze_cake',
        'kubejs:redstone_precision_mechanism',
        'kubejs:blaze_mechanism',
        'kubejs:sturdy_mechanism'
    ])
    event.add('createoreexcavation:drills', [
        'kubejs:blaze_mechanism',
        'kubejs:magic_mechanism'
    ])
    event.add('create:packages', [
        'fluid:copper_can'
    ])
})

ServerEvents.tags('block', event => {
    // 触媒
    event.add('create:fan_transparent', 'kubejs:fan_charging_catalyst')
    event.add('create:wrench_pickup', [
        'sophisticatedstorage:barrel',
        'sophisticatedstorage:copper_barrel',
        'sophisticatedstorage:iron_barrel',
        'sophisticatedstorage:gold_barrel',
        'sophisticatedstorage:diamond_barrel',
        'sophisticatedstorage:netherite_barrel',
        'sophisticatedstorage:limited_barrel_1',
        'sophisticatedstorage:limited_copper_barrel_1',
        'sophisticatedstorage:limited_iron_barrel_1',
        'sophisticatedstorage:limited_gold_barrel_1',
        'sophisticatedstorage:limited_diamond_barrel_1',
        'sophisticatedstorage:limited_netherite_barrel_1',
        'sophisticatedstorage:limited_barrel_2',
        'sophisticatedstorage:limited_copper_barrel_2',
        'sophisticatedstorage:limited_iron_barrel_2',
        'sophisticatedstorage:limited_gold_barrel_2',
        'sophisticatedstorage:limited_diamond_barrel_2',
        'sophisticatedstorage:limited_netherite_barrel_2',
        'sophisticatedstorage:limited_barrel_3',
        'sophisticatedstorage:limited_copper_barrel_3',
        'sophisticatedstorage:limited_iron_barrel_3',
        'sophisticatedstorage:limited_gold_barrel_3',
        'sophisticatedstorage:limited_diamond_barrel_3',
        'sophisticatedstorage:limited_netherite_barrel_3',
        'sophisticatedstorage:limited_barrel_4',
        'sophisticatedstorage:limited_copper_barrel_4',
        'sophisticatedstorage:limited_iron_barrel_4',
        'sophisticatedstorage:limited_gold_barrel_4',
        'sophisticatedstorage:limited_diamond_barrel_4',
        'sophisticatedstorage:limited_netherite_barrel_4'
    ])
})