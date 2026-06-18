StartupEvents.registry("block", event => {
    event.create('fan_charging_catalyst')
        .model('kubejs:block/fan_charging_catalyst/block')
        .item(item => {
            item.parentModel('kubejs:block/fan_charging_catalyst/block')
        })
        .notSolid()
})