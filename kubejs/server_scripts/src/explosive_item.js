ItemEvents.canPickUp("kubejs:unstable_item", event => {
    if (event.player.isCreative()) return

    let { itemEntity, level } = event
    let { x, y, z } = itemEntity

    let explosion = level.createExplosion(x, y, z)
    explosion.explosionMode = 'NONE',
    explosion.causesFire = false
    explosion.strength = 3
    explosion.explode()

    itemEntity.remove("discarded")
    event.cancel()
})

PlayerEvents.tick(event => {
    let { player, level } = event
    if (level.server.tickCount % 5 != 0) return
    if (player.isCreative()) return
    let inventory = player.getInventory()

    let slotIndex = inventory.find('kubejs:unstable_item')
    if (slotIndex != -1) {
        let { x, y, z } = player
        let explosion = level.createExplosion(x, y, z)
        explosion.causesFire = false
        // explosion.strength = 3
        explosion.strength = inventory.getItem(slotIndex).count / 5
        explosion.explosionMode = 'NONE'
        explosion.explode()
        inventory.setItem(slotIndex, Item.of('minecraft:air'))
    }
})