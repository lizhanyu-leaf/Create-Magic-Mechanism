ServerEvents.recipes(event => {
    event.replaceInput(
        {mod: 'sophisticatedstorage'},
        'minecraft:redstone',
        'kubejs:redstone_precision_mechanism'
    )

    event.replaceInput(
        {mod: 'sophisticatedstorage'},
        'minecraft:ender_pearl',
        'kubejs:ender_mechanism'
    )

    event.replaceInput(
        {mod: 'sophisticatedstorage'},
        'minecraft:stick',
        'kubejs:wood_set'
    )

    event.replaceInput(
        {mod: 'sophisticatedstorage'},
        'minecraft:iron_ingot',
        'create:iron_sheet'
    )

    event.replaceInput(
        {mod: 'sophisticatedstorage'},
        'minecraft:comparator',
        'kubejs:redstone_sheet'
    )

    event.replaceInput(
        {mod: 'sophisticatedstorage'},
        'minecraft:repeater',
        'kubejs:redstone_sheet'
    )

    event.replaceInput(
        {mod: 'sophisticatedstorage'},
        '#forge:stone',
        'kubejs:precision_mechanism_1'
    )
})