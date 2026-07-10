TechSystemEvents.registerTech(event => {

    // ==================== 科技包 ====================

    event.create("cmm:mechancal_tech_pack")
        .icon('minecraft:brown_wool')
        .itemLang('zh_cn', '知识: 机械科技包')
        .lang('zh_cn', '机械科技包')
        .lang('en_us', 'Mechanical Tech Pack')

    event.create('cmm:steel_tech_pack')
        .icon('minecraft:light_gray_wool')
        .itemLang('zh_cn', '知识: 钢材科技包')
        .lang('zh_cn', '钢材科技包')
        .lang('en_us', 'Steel Tech Pack')

    event.create('cmm:redstone_tech_pack')
        .icon('minecraft:red_wool')
        .itemLang('zh_cn', '知识: 红石科技包')
        .lang('zh_cn', '红石科技包')
        .lang('en_us', 'Redstone Tech Pack')

    event.create('cmm:blaze_tech_pack')
        .icon('minecraft:orange_wool')
        .itemLang('zh_cn', '知识: 烈焰科技包')
        .lang('zh_cn', '烈焰科技包')
        .lang('en_us', 'Blaze Tech Pack')

    event.create('cmm:mechancal_tech_pack_advanced')
        .icon('minecraft:brown_wool')
        .itemLang('zh_cn', '知识: 高级机械科技包')
        .lang('zh_cn', '高级机械科技包')
        .lang('en_us', 'Advanced Mechanical Tech Pack')

    event.create('cmm:redstone_tech_pack_advanced')
        .icon('minecraft:red_wool')
        .itemLang('zh_cn', '知识: 高级红石科技包')
        .lang('zh_cn', '高级红石科技包')
        .lang('en_us', 'Advanced Redstone Tech Pack')

    event.create('cmm:steel_tech_pack_advanced')
        .icon('minecraft:light_gray_wool')
        .itemLang('zh_cn', '知识: 高级钢材科技包')
        .lang('zh_cn', '高级钢材科技包')
        .lang('en_us', 'Advanced Steel Tech Pack')

    // ==================== 构件相关 ====================

    event.create('cmm:mechanical_mechanism')
        .icon('create:precision_mechanism')
        .itemLang('zh_cn', '知识: 机械构件')
        .lang('zh_cn', '机械构件')
        .lang('en_us', 'Mechanical Mechanism')

    event.create('cmm:redstone_precision_mechanism')
        .icon('kubejs:redstone_precision_mechanism')
        .itemLang('zh_cn', '知识: 红石精密构件')
        .lang('zh_cn', '红石精密构件')
        .lang('en_us', 'Redstone Precision Mechanism')

    event.create('cmm:sturdy_mechanism')
        .icon('kubejs:sturdy_mechanism')
        .itemLang('zh_cn', '知识: 坚固构件')
        .lang('zh_cn', '坚固构件')
        .lang('en_us', 'Sturdy Mechanism')

    event.create('cmm:blaze_mechanism')
        .icon('kubejs:blaze_mechanism')
        .itemLang('zh_cn', '知识: 烈焰构件')
        .lang('zh_cn', '烈焰构件')
        .lang('en_us', 'Blaze Mechanism')

    // ==================== 多方块 ====================

    event.create('cmm:mb_mechanical_furnace')
        .icon('create:mechanical_furnace')
        .itemLang('zh_cn', '知识: 工业炉')
        .lang('zh_cn', '工业炉')
        .lang('en_us', 'Mechanical Furnace')

    event.create('cmm:mb_automated_assembly_station')
        .icon('kubejs:automated_assembly_station')
        .itemLang('zh_cn', '知识: 自动化装配站')
        .lang('zh_cn', '自动化装配站')
        .lang('en_us', 'Automated Assembly Station')

    // ==================== 基础科技 ====================

    event.create('cmm:unlock_sturdy_knob')
        .icon('kubejs:sturdy_knob')
        .itemLang('zh_cn', '知识: 坚固旋钮解锁')
        .lang('zh_cn', '坚固旋钮解锁')
        .lang('en_us', 'Sturdy Knob Unlock')

    event.create('cmm:basic_transmission')
        .icon('create:shaft')
        .itemLang('zh_cn', '知识: 基础传动')
        .lang('zh_cn', '基础传动')
        .lang('en_us', 'Basic Transmission')

    event.create('cmm:basic_storage_upgrade')
        .icon('create:reinforced_crate')
        .itemLang('zh_cn', '知识: 基础存储升级')
        .lang('zh_cn', '基础存储升级')
        .lang('en_us', 'Basic Storage Upgrade')

    event.create('cmm:intermediate_storage_upgrade')
        .icon('create:brass_crate')
        .itemLang('zh_cn', '知识: 中级存储升级')
        .lang('zh_cn', '中级存储升级')
        .lang('en_us', 'Intermediate Storage Upgrade')

    event.create('cmm:industrial_iron_smelting')
        .icon('minecraft:blast_furnace')
        .itemLang('zh_cn', '知识: 工业级铁熔炼')
        .lang('zh_cn', '工业级铁熔炼')
        .lang('en_us', 'Industrial Iron Smelting')

    event.create('cmm:sturdy_sheet_smithing')
        .icon('minecraft:smithing_table')
        .itemLang('zh_cn', '知识: 坚固板锻造')
        .lang('zh_cn', '坚固板锻造')
        .lang('en_us', 'Sturdy Sheet Smithing')

    event.create('cmm:steel_smelting')
        .icon('create:scorching_bedrock_rule')
        .itemLang('zh_cn', '知识: 钢熔炼')
        .lang('zh_cn', '钢熔炼')
        .lang('en_us', 'Steel Smelting')

    event.create('cmm:redstone_circuit')
        .icon('kubejs:redstone_sheet')
        .itemLang('zh_cn', '知识: 红石电路')
        .lang('zh_cn', '红石电路')
        .lang('en_us', 'Redstone Circuit')

    event.create('cmm:inductive_mechanism')
        .icon('create_dd:inductive_mechanism')
        .itemLang('zh_cn', '知识: 物流构件')
        .lang('zh_cn', '物流构件')
        .lang('en_us', 'Inductive Mechanism')

    event.create('cmm:chain_logistics')
        .icon('create:mechanical_arm')
        .itemLang('zh_cn', '知识: 链式物流')
        .lang('zh_cn', '链式物流')
        .lang('en_us', 'Chain Logistics')

    event.create('cmm:package_system')
        .icon('kubejs:pack')
        .itemLang('zh_cn', '知识: 包裹系统')
        .lang('zh_cn', '包裹系统')
        .lang('en_us', 'Package System')

    event.create('cmm:strange_potion')
        .icon('kubejs:strange_potion_bucket')
        .itemLang('zh_cn', '知识: 奇异药水')
        .lang('zh_cn', '奇异药水')
        .lang('en_us', 'Strange Potion')

    event.create('cmm:andesite_input_and_output')
        .icon('create:andesite_funnel')
        .itemLang('zh_cn', '知识: 安山输入/输出仓')
        .lang('zh_cn', '安山输入/输出仓')
        .lang('en_us', 'Andesite Input and Output')

    event.create('cmm:set_tray')
        .icon('kubejs:set_tray')
        .itemLang('zh_cn', '知识: 集合托盘')
        .lang('zh_cn', '集合托盘')
        .lang('en_us', 'Set Tray')

    event.create('cmm:incomplete_precision_gear_set')
        .icon('kubejs:incomplete_precision_gear_set')
        .itemLang('zh_cn', '知识: 精密齿轮[未完成]')
        .lang('zh_cn', '精密齿轮[未完成]')
        .lang('en_us', 'Incomplete Precision Gear Set')

    event.create('cmm:precision_gear_set')
        .icon('kubejs:precision_gear_set')
        .itemLang('zh_cn', '知识: 精密齿轮组')
        .lang('zh_cn', '精密齿轮组')
        .lang('en_us', 'Precision Gear Set')

    // ==================== 金属熔炼 ====================

    event.create('cmm:tin_smelting')
        .icon('minecraft:tin_ingot')
        .itemLang('zh_cn', '知识: 锡熔炼')
        .lang('zh_cn', '锡熔炼')
        .lang('en_us', 'Tin Smelting')

    event.create('cmm:zinc_smelting')
        .icon('create:zinc_ingot')
        .itemLang('zh_cn', '知识: 锌熔炼')
        .lang('zh_cn', '锌熔炼')
        .lang('en_us', 'Zinc Smelting')

    event.create('cmm:silver_smelting')
        .icon('minecraft:silver_ingot')
        .itemLang('zh_cn', '知识: 银熔炼')
        .lang('zh_cn', '银熔炼')
        .lang('en_us', 'Silver Smelting')

    event.create('cmm:obsidian_smelting')
        .icon('minecraft:obsidian')
        .itemLang('zh_cn', '知识: 黑曜石熔炼')
        .lang('zh_cn', '黑曜石熔炼')
        .lang('en_us', 'Obsidian Smelting')

    event.create('cmm:bronze_smelting')
        .icon('unify:bronze_ingot')
        .itemLang('zh_cn', '知识: 青铜熔炼')
        .lang('zh_cn', '青铜熔炼')
        .lang('en_us', 'Bronze Smelting')

    // ==================== 高级科技 ====================

    event.create('cmm:smart_storage')
        .icon('create:creative_crates')
        .itemLang('zh_cn', '知识: 智能存储')
        .lang('zh_cn', '智能存储')
        .lang('en_us', 'Smart Storage')

    event.create('cmm:seed_oil')
        .icon('createaddition:seed_oil')
        .itemLang('zh_cn', '知识: 种子油')
        .lang('zh_cn', '种子油')
        .lang('en_us', 'Seed Oil')

    event.create('cmm:electron_tube')
        .icon('create:electron_tube')
        .itemLang('zh_cn', '知识: 电子管')
        .lang('zh_cn', '电子管')
        .lang('en_us', 'Electron Tube')

    // ==================== 染料系统 ====================

    event.create('cmm:dye_dilution')
        .icon('minecraft:water_bucket')
        .itemLang('zh_cn', '知识: 染料稀释')
        .lang('zh_cn', '染料稀释')
        .lang('en_us', 'Dye Dilution')

    event.create('cmm:iridescent_mechanism')
        .icon('kubejs:iridescent_mechanism')
        .itemLang('zh_cn', '知识: 溢彩构件')
        .lang('zh_cn', '溢彩构件')
        .lang('en_us', 'Iridescent Mechanism')

    event.create('cmm:dye_refining')
        .icon('create:spout')
        .itemLang('zh_cn', '知识: 染料提纯')
        .lang('zh_cn', '染料提纯')
        .lang('en_us', 'Dye Refining')

    event.create('cmm:dye_charging')
        .icon('create:millstone')
        .itemLang('zh_cn', '知识: 染料充能')
        .lang('zh_cn', '染料充能')
        .lang('en_us', 'Dye Charging')

    event.create('cmm:mineral_block_dyeing')
        .icon('minecraft:white_dye')
        .itemLang('zh_cn', '知识: 矿物块染色')
        .lang('zh_cn', '矿物块染色')
        .lang('en_us', 'Mineral Block Dyeing')

    // ==================== 矿物系统 ====================

    event.create('cmm:basic_ore_set')
        .icon('kubejs:basic_ore_set')
        .itemLang('zh_cn', '知识: 基础矿物集合')
        .lang('zh_cn', '基础矿物集合')
        .lang('en_us', 'Basic Ore Set')

    event.create('cmm:ore_set')
        .icon('kubejs:ore_set')
        .itemLang('zh_cn', '知识: 矿物集合')
        .lang('zh_cn', '矿物集合')
        .lang('en_us', 'Ore Set')

    event.create('cmm:bedrock')
        .icon('kubejs:bedrock_ingot')
        .itemLang('zh_cn', '知识: 基岩')
        .lang('zh_cn', '基岩')
        .lang('en_us', 'Bedrock')

    // ==================== 下界科技 ====================

    event.create('cmm:the_nether_recipes')
        .icon('minecraft:netherrack')
        .itemLang('zh_cn', '知识: 下界配方')
        .lang('zh_cn', '下界配方')
        .lang('en_us', 'Nether Recipes')

    // ==================== 特殊材料 ====================

    event.create('cmm:brass')
        .icon('create:brass_ingot')
        .itemLang('zh_cn', '知识: 黄铜')
        .lang('zh_cn', '黄铜')
        .lang('en_us', 'Brass')

    event.create('cmm:coolant')
        .icon('kubejs:coolant_bucket')
        .itemLang('zh_cn', '知识: 冷却剂')
        .lang('zh_cn', '冷却剂')
        .lang('en_us', 'Coolant')

    event.create('cmm:precision_mechanism')
        .icon('create:precision_mechanism')
        .itemLang('zh_cn', '知识: 精密构件')
        .lang('zh_cn', '精密构件')
        .lang('en_us', 'Precision Mechanism')

})
