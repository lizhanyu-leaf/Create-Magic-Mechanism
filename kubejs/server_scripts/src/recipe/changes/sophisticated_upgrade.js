ServerEvents.recipes(event => {
    if (!TechnologyTools.isActive('compression_upgrade')) {
        event.remove({output: 'sophisticatedstorage:compression_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:compression_upgrade'})
    }

    if (!TechnologyTools.isActive('compacting_upgrade')) {
        event.remove({output: 'sophisticatedstorage:compacting_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:compacting_upgrade'})
    }

    if (!TechnologyTools.isActive('hopper_upgrade')) {
        event.remove({output: 'sophisticatedstorage:hopper_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:hopper_upgrade'})
    }

    if (!TechnologyTools.isActive('magnet_upgrade')) {
        event.remove({output: 'sophisticatedstorage:magnet_upgrade'})
        event.remove({output: 'sophisticatedbackpacks:magnet_upgrade'})
    }
    
    if (!TechnologyTools.isActive('tank_upgrade')) {
        event.remove({output: 'sophisticatedbackpacks:tank_upgrade'})
    }

    if (!TechnologyTools.isActive('battery_upgrade')) {
        event.remove({output: 'sophisticatedbackpacks:battery_upgrade'})
    }
})