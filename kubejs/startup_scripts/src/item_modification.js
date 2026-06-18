ItemEvents.modification(event => {
    event.modify('create_sa:brass_pickaxe', item => {
        item.maxDamage = 10000000
    })

    event.modify('create_sa:brass_axe', item => {
        item.maxDamage = 10000000
    })

    // event.modify('minecraft:iron_ingot', item => {
    //     item.foodProperties = (food) => {
    //         food.hunger(1)
    //         food.saturation(0.2)
    //     }
    // })
})