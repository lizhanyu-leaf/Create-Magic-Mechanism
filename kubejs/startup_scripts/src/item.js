StartupEvents.registry('item', event => { 

    event.create('mechine_upgrade_smithing_template')
        .texture('kubejs:item/mechine_upgrade_smithing_template')
    
    event.create('cogwheel_upgrade_smithing_template')
        .texture('kubejs:item/cogwheel_upgrade_smithing_template')

    event.create('large_cogwheel_upgrade_smithing_template')
        .texture('kubejs:item/large_cogwheel_upgrade_smithing_template')

    // 精密构建基板
    event.create('precision_mechanism_substrate')
        .texture('kubejs:item/precision_mechanism_substrate')

    // 精密构建 第一部分
    event.create('precision_mechanism_1')
        .texture('kubejs:item/precision_mechanism_1')

    // 精密构建 第二部分
    event.create('precision_mechanism_2')
        .texture('kubejs:item/precision_mechanism_2')

    // 精密构建 第三部分（涵盖未完成）
    event.create('incomplete_precision_mechanism_3')
        .texture('kubejs:item/incomplete_precision_mechanism_3')
    event.create('precision_mechanism_3')
        .texture('kubejs:item/precision_mechanism_3')

    // 精密构建 第四部分
    event.create('precision_mechanism_4')
        .texture('kubejs:item/precision_mechanism_4')

    event.create('loose_precision_mechanism')
        .texture('create:item/precision_mechanism')


    event.create('creative_wood')
        .texture('kubejs:item/creative_wood')

    event.create('wood_set')
        .texture('kubejs:item/wood_set')

    event.create('charging_iron_sheet')
        .texture('kubejs:item/charging_iron_sheet')

    event.create('redstone_sheet')
        .texture('kubejs:item/redstone_sheet')

    event.create('redstone_precision_mechanism')
        .texture('kubejs:item/redstone_precision_mechanism')

    event.create('electron_tube_substrate')
        .texture('kubejs:item/electron_tube_substrate')

    event.create('colorful_mechanism')
        .texture('kubejs:item/colorful_mechanism')

    event.create('incomplete_colorful_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_colorful_mechanism')

    event.create('mechanical_core')
        .texture('kubejs:item/mechanical_core')

    event.create('incomplete_mechanical_core', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_mechanical_core')

    event.create('incomplete_precision_mechanism_1')
        .texture('kubejs:item/incomplete_precision_mechanism_1')

    event.create('incomplete_precision_mechanism_2')
        .texture('kubejs:item/incomplete_precision_mechanism_2')

    event.create('incomplete_redstone_precision_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_redstone_precision_mechanism')

    event.create('incomplete_redstone_sheet')
        .texture('kubejs:item/incomplete_redstone_sheet')

    event.create('modern_mechanism')
        .texture('kubejs:item/modern_mechanism')

    event.create('bedrock_powder')
        .texture('kubejs:item/bedrock_powder')

    event.create('raw_bedrock')
        .texture('kubejs:item/raw_bedrock')

    event.create('bedrock_ingot')
        .texture('kubejs:item/bedrock_ingot')

    event.create('bedrock_sheet')
        .texture('kubejs:item/bedrock_sheet')

    event.create('sturdy_mechanism')
        .texture('kubejs:item/sturdy_mechanism')
    
    event.create('incomplete_sturdy_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_sturdy_mechanism')

    event.create('blaze_mechanism')
        .burnTime(2147483647)
        .texture('kubejs:item/blaze_mechanism')

    event.create('incomplete_blaze_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_blaze_mechanism')

    event.create('slime_mechanism')
        .texture('kubejs:item/slime_mechanism')

    event.create('incomplete_slime_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_slime_mechanism')

    event.create('ender_mechanism')
        .texture('kubejs:item/ender_mechanism')

    event.create('incomplete_ender_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_ender_mechanism')

    event.create('ender_sheet')
        .texture('kubejs:item/ender_sheet')

    event.create('incomplete_emerald')
        .texture('minecraft:item/emerald')

    event.create('incomplete_diamond')
        .texture('minecraft:item/diamond')

    event.create('magic_mechanism')
        .texture('kubejs:item/magic_mechanism')

    event.create('incomplete_magic_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_magic_mechanism')

    event.create('assembly_block')
        .texture('kubejs:item/assembly_block')

    event.create('incomplete_assembly_block')
        .texture('kubejs:item/incomplete_assembly_block')

    event.create('base_catalyst')
        .texture('kubejs:item/base_catalyst')

    event.create('incomplete_base_catalyst')
        .texture('kubejs:item/incomplete_base_catalyst')

    event.create('catalyst_blaze')
        .maxDamage(50)
        .texture('kubejs:item/catalyst_blaze')

    event.create('ice_powder')
        .texture('kubejs:item/ice_powder')

    event.create('incomplete_ice_powder')
        .texture('kubejs:item/incomplete_ice_powder')

    event.create('pack')
    event.create('pack_open')

    event.create('cardboard_mechanism')
        .texture('kubejs:item/cardboard_mechanism')

    event.create('pack_stone')
        .texture('kubejs:item/pack_stone')

    event.create('pack_stone_bricks')
        .texture('kubejs:item/pack_stone_bricks')

    event.create('pack_deepslate')
        .texture('kubejs:item/pack_deepslate')

    event.create('pack_netherrack')
        .texture('kubejs:item/pack_netherrack')


    event.create('pack_iron')
        .texture('kubejs:item/pack_iron')

    event.create('pack_gold')
        .texture('kubejs:item/pack_gold')

    event.create('pack_copper')
        .texture('kubejs:item/pack_copper')

    event.create('pack_diamond')
        .texture('kubejs:item/pack_diamond')

    event.create('pack_andesite_alloy')
        .texture('kubejs:item/pack_andesite_alloy')

    event.create('pack_zinc')
        .texture('kubejs:item/pack_zinc')

    event.create('pack_brass')
        .texture('kubejs:item/pack_brass')

    event.create('unstable_item')

    event.create('experience_mechanism')
        .food(event => {
            event.hunger(20)
            event.saturation(5)
            event.alwaysEdible()
        })
        .texture('kubejs:item/experience_mechanism')

    event.create('incomplete_experience_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_experience_mechanism')

    event.create('pack_source_fluid')
        .texture('kubejs:item/pack_source_fluid')

    event.create('pack_fluid_tank')
        .texture('kubejs:item/pack_fluid_tank')

    event.create('incomplete_pack_fluid_tank')
        .texture('kubejs:item/incomplete_pack_fluid_tank')

    event.create('pack_fluid_tank_open')
        .texture('kubejs:item/pack_fluid_tank_open')

    event.create('pack_magic_potion')
        .texture('kubejs:item/pack_magic_potion')

    event.create('pack_colorful_mechanism')
        .texture('kubejs:item/pack_colorful_mechanism')

    event.create('pack_blaze_mechanism')
        .texture('kubejs:item/pack_blaze_mechanism')

    event.create('pack_experience_mechanism')
        .texture('kubejs:item/pack_experience_mechanism')
    
    event.create('pack_sturdy_mechanism')
        .texture('kubejs:item/pack_sturdy_mechanism')

    event.create('coin_leaf')
        .texture('kubejs:item/coin_leaf')

    event.create('coin_button')
        .texture('kubejs:item/coin_button')

    event.create('incomplete_aggregated_andesite_alloy_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_aggregated_andesite_alloy_mechanism')

    event.create('incomplete_aggregated_brass_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_aggregated_brass_mechanism')

    event.create('incomplete_aggregated_copper_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_aggregated_copper_mechanism')

    event.create('incomplete_aggregated_diamond_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_aggregated_diamond_mechanism')

    event.create('incomplete_aggregated_gold_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_aggregated_gold_mechanism')

    event.create('incomplete_aggregated_iron_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_aggregated_iron_mechanism')

    event.create('incomplete_aggregated_stone_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_aggregated_stone_mechanism')

    event.create('incomplete_aggregated_zinc_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_aggregated_zinc_mechanism')

    event.create('aggregated_andesite_alloy_mechanism')
        .texture('kubejs:item/aggregated_andesite_alloy_mechanism')

    event.create('aggregated_brass_mechanism')
        .texture('kubejs:item/aggregated_brass_mechanism')

    event.create('aggregated_copper_mechanism')
        .texture('kubejs:item/aggregated_copper_mechanism')

    event.create('aggregated_diamond_mechanism')
        .texture('kubejs:item/aggregated_diamond_mechanism')

    event.create('aggregated_gold_mechanism')
        .texture('kubejs:item/aggregated_gold_mechanism')

    event.create('aggregated_iron_mechanism')
        .texture('kubejs:item/aggregated_iron_mechanism')

    event.create('aggregated_stone_mechanism')
        .texture('kubejs:item/aggregated_stone_mechanism')

    event.create('aggregated_zinc_mechanism')
        .texture('kubejs:item/aggregated_zinc_mechanism')

    event.create('mechanical_mechanism')
    event.create('incomplete_mechanical_mechanism', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_aggregated_andesite_alloy_mechanism')

    event.create('wood_set_copy_voucher')
        .texture('kubejs:item/wood_set_copy_voucher')
        .tag('kubejs:copy_vouchers')


    let dyes = ['red_dye', 'orange_dye', 'yellow_dye', 'green_dye', 'lime_dye', 'cyan_dye', 'light_blue_dye', 'blue_dye', 'purple_dye', 'magenta_dye', 'pink_dye', 'black_dye', 'gray_dye', 'light_gray_dye', 'white_dye', 'brown_dye']
    
    dyes.forEach(dye => {
        event.create(`refined_${dye}`)
            .texture(`kubejs:item/refined_${dye}`)
            // .displayName(Component.translatable('item.kubejs.refined_dyes_prefix').append(Component.translatable(`item.minecraft.${dye}`)))

        event.create(`charged_${dye}`)
            .texture(`kubejs:item/charged_${dye}`)
            // .displayName(Component.translatable('item.kubejs.charged_dyes_prefix').append(Component.translatable(`item.minecraft.${dye}`)))
    });

    event.create('iridescent_alloy')
        .texture('kubejs:item/iridescent_alloy')

    event.create('set_tray')

    event.create('iron_and_gold_set')

    event.create('redstone_and_copper_set')

    event.create('basic_ore_set')
        .food(food => {
            return food.alwaysEdible()
                .hunger(10)
                .saturation(2)
                .build()
        })

    event.create('ore_set')
        .food(food => {
            return food.alwaysEdible()
                .hunger(20)
                .saturation(10)
                .build()
        })

    event.create('advanced_ore_set')

    event.create('logistics_set')
        .food(food => {
            return food.alwaysEdible()
                .hunger(10)
                .saturation(1145)
                .build()
        })

    event.create('fluid_logistics_set')

    event.create('technology_mechanism')

    event.create('obsidian_ingot')

    event.create('obsidian_sheet')

    event.create('obsidian_nugget')

    event.create('obsidian_rod')

    event.create('obsidian_wire')
})

StartupEvents.registry('item', event => {
    event.create('incomplete_wooden_products')
        .parentModel('minecraft:block/stripped_oak_log')

    event.create('incomplete_iron_products')
        .texture('vintageimprovements:item/small_iron_spring')

    event.create('incomplete_gold_products')
        .texture('vintageimprovements:item/small_golden_spring')

    event.create('incomplete_copper_products')
        .texture('vintageimprovements:item/small_copper_spring')

    event.create('incomplete_andesite_products')
        .texture('vintageimprovements:item/small_andesite_spring')

    event.create('incomplete_andesite_mechine')
        .parentModel('create:block/encased_large_cogwheel/item')

    event.create('incomplete_copper_mechine')
        .parentModel('createcasing:block/encased_large_cogwheel/copper/item')

    event.create('incomplete_brass_mechine')
        .parentModel('createcasing:block/encased_large_cogwheel/brass/item')

    event.create('incomplete_steel')
        .texture('unify:item/steel_ingot')
})

ItemEvents.modification(event => {
    // event.modify('create:blaze_cake', item => {
    //     item.foodProperties = food => {
    //         food.hunger(4)
    //         food.saturation(6)
    //         food.effect('minecraft:fire_resistance', 60000, 1, 1)
    //         food.alwaysEdible(true)
    //     }
    // })

    // event.modify('create:creative_blaze_cake', item => {
    //     item.foodProperties = food => {
    //         food.hunger(4)
    //         food.saturation(6)
    //         food.effect('minecraft:fire_resistance', 60000, 1, 1)
    //         food.alwaysEdible(true)
    //     }
    // })
})