ServerEvents.recipes(event => {

    const {create, createoreexcavation, 
        vintageimprovements, minecraft, kubejs, cmm} = event.recipes

    event.remove({ output: 'create:hose_pulley' })
    kubejs.automated_assembly_station()
        .inputItems('16x create:copper_sheet', '4x create:copper_casing', 'kubejs:sturdy_mechanism')
        .outputItems('create:hose_pulley')
        .duration(40)
        .technology('the_nether_recipes')
        .id('kubejs:automated_assembly_station/the_nether_recipes/hose_pulley')

    kubejs.automated_assembly_station()
        .inputItems('64x magma_block', '8x create:blaze_cake')
        .outputItems('create_dd:blaze_gold')
        .dimension('minecraft:the_nether')
        .duration(40)
        .technology('the_nether_recipes')
        .id('kubejs:automated_assembly_station/the_nether_recipes/blaze_gold')

    kubejs.automated_assembly_station()
        .inputItems('64x magma_block', 'create_dd:blaze_gold')
        .outputItems('128x magma_block', 'create_dd:blaze_gold')
        .dimension('minecraft:the_nether')
        .duration(40)
        .technology('the_nether_recipes')
        .id('kubejs:automated_assembly_station/the_nether_recipes/magma_block')

    kubejs.automated_assembly_station()
        .inputItems('2x create_dd:blaze_gold', 'create:blaze_cake')
        .outputItems('3x create_dd:blaze_gold',
            Item.of('minecraft:blaze_rod', 5), Item.of('minecraft:blaze_powder', 9))
        .dimension('minecraft:the_nether')
        .duration(40)
        .technology('the_nether_recipes')
        .id('kubejs:automated_assembly_station/the_nether_recipes/feed_the_blaze')

    create.sequenced_assembly(
        'create:blaze_cake',
        'create_dd:blaze_gold',
        [
            create.filling('create:blaze_cake_base',
                [Fluid.of('minecraft:lava', 250), 'create:blaze_cake_base']),

            create.filling('create:blaze_cake_base',
                [Fluid.of('kubejs:heat_lava', 250), 'create:blaze_cake_base']),

            create.deploying('create:blaze_cake_base',
                ['create:blaze_cake_base', 'minecraft:blaze_powder'])
        ],
        'create:blaze_cake_base', 5
    ).technology('the_nether_recipes')
    .id('kubejs:automated_assembly_station/the_nether_recipes/blaze_cake')

    kubejs.mechanical_furnace_recipe()
        .inputItems('minecraft:blaze_powder')
        .inputFluids('minecraft:lava 2500', 'kubejs:heat_lava 2500')
        .outputItems('kubejs:precision_mechanism_4')
        .dimension('minecraft:the_nether')
        .duration(80)
        .technology('the_nether_recipes')
        .id('kubejs:mechanical_furnace_recipe/the_nether_recipes/precision_mechanism_4')

    kubejs.automated_assembly_station()
        .inputItems('5x diamond', 'netherrack')
        .outputItems('netherite_upgrade_smithing_template')
        .dimension('minecraft:the_nether')
        .duration(160)
        .technology('the_nether_recipes')
        .id('kubejs:automated_assembly_station/the_nether_recipes/netherite_upgrade_smithing_template')

})