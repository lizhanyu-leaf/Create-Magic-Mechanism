ServerEvents.recipes(event => { 

    event.remove({mod: 'sfm'})

    if (global.technology.get_technology('unlock_sfm')) {
        event.stonecutting(
            'sfm:manager',
            'minecraft:iron_block'
        )

        event.stonecutting(
            '64x sfm:cable',
            'minecraft:iron_block'
        )

        event.stonecutting(
            '64x sfm:fancy_cable',
            'minecraft:iron_block'
        )

        event.stonecutting(
            'sfm:disk',
            'minecraft:iron_ingot'
        )

        event.stonecutting(
            'sfm:labelgun',
            'minecraft:iron_ingot'
        )

        event.stonecutting(
            'sfm:network_tool',
            'minecraft:iron_ingot'
        )
    }

})