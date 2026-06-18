MEJSEvents.entityTick(event => {

    const { entity } = event

    if (!entity.isInLava()) return
    if (entity.type == 'minecraft:item') {
        console.log('Item on lava')

        if (!(entity.item.id in global.fire_changes)) return
        const input = entity.item.id

        let newItem = entity.level.createEntity('item')
        newItem.mergeNbt(`{Item:{id:"${global.fire_changes[input]}", Count:${entity.item.count} }}`)
        newItem.setPos(entity.x, entity.y + 0.3, entity.z)
        let randomX = (Math.random() - 0.5) * 0.3
        let randomZ = (Math.random() - 0.5) * 0.3
        newItem.setMotion(randomX, 0.5, randomZ)
        newItem.spawn()
        entity.kill()
    } else {
        console.log('Entity on lava')
    }
})