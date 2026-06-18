ServerEvents.recipes(event => {
    if (!global.technology.get_technology('compression_upgrade')) {
        event.remove({output: 'sophisticatedstorage:compression_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:compression_upgrade'})
    }

    if (!global.technology.get_technology('compacting_upgrade')) {
        event.remove({output: 'sophisticatedstorage:compacting_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:compacting_upgrade'})
    }

    if (!global.technology.get_technology('hopper_upgrade')) {
        event.remove({output: 'sophisticatedstorage:hopper_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:hopper_upgrade'})
    }

    if (!global.technology.get_technology('magnet_upgrade')) {
        event.remove({output: 'sophisticatedstorage:magnet_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:magnet_upgrade'})
    }
    
    if (!global.technology.get_technology('tank_upgrade')) {
        event.remove({output: 'sophisticatedbackpacks:tank_upgrade'})
    }

    if (!global.technology.get_technology('battery_upgrade')) {
        event.remove({output: 'sophisticatedbackpacks:battery_upgrade'})
    }
})