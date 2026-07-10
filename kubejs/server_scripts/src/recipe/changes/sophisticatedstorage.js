ServerEvents.recipes(event => {
    event.replaceInput(
        {mod: 'sophisticatedstorage'},
        'minecraft:redstone',
        'kubejs:redstone_sheet'
    )

    event.replaceInput(
        {mod: 'sophisticatedstorage'},
        '#forge:dusts/redstone',
        'kubejs:redstone_sheet'
    )

    event.replaceInput(
        {mod: 'sophisticatedstorage'},
        'minecraft:ender_pearl',
        'kubejs:ender_mechanism'
    )

    event.replaceInput(
        {mod: 'sophisticatedstorage'},
        'minecraft:piston',
        'create:mechanical_press'
    )

    event.replaceInput(
        {mod: 'sophisticatedstorage'},
        'minecraft:stick',
        'kubejs:wood_set'
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
        'kubejs:sturdy_knob'
    )
})