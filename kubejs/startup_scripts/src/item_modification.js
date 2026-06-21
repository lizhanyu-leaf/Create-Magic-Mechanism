ItemEvents.modification(event => {
    event.modify('minecraft:diamond_pickaxe', item => {
        item.maxDamage = 10000000
    })

    event.modify('minecraft:diamond_axe', item => {
        item.maxDamage = 10000000
    })

    event.modify('minecraft:netherite_pickaxe', item => {
        item.maxDamage = 100000000
    })

    event.modify('minecraft:netherite_axe', item => {
        item.maxDamage = 100000000
    })

    // event.modify('minecraft:iron_ingot', item => {
    //     item.foodProperties = (food) => {
    //         food.hunger(1)
    //         food.saturation(0.2)
    //     }
    // })
})