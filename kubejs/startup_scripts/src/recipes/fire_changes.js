function fire_changes(input, output) {
    if (!global.fire_changes) global.fire_changes = {}
    global.fire_changes[input] = output
}

fire_changes('minecraft:stick', 'minecraft:blaze_rod')
fire_changes('createdieselgenerators:wood_chip', 'minecraft:blaze_powder')
fire_changes('minecraft:cobblestone', 'minecraft:netherrack')
