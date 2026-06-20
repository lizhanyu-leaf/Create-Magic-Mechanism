/**
 * 
 * @param {string} id 
 * @param {string} technology_id 
 */
function customRewardGetTechnology(id, technology_id) {
    FTBQuestsEvents.customReward(id, event => {
        global.technology.grant_technology(technology_id, event.server)
    })
}

/**
 * 
 * @param {string} id
 */
function customRewardGetTechnologyFromId(id) {
    FTBQuestsEvents.customReward(id, event => {
        global.technology.grant_technology(id, event.server)
    })
}

// tech pack
customRewardGetTechnology('126AD2B383950322', 'mechancal_tech_pack')
customRewardGetTechnology('2CAC2744B9E58FA7', 'steel_tech_pack')
customRewardGetTechnology('4E4CAD3282BC6770', 'redstone_tech_pack')
customRewardGetTechnology('47FCA7B99AB70653', 'blaze_tech_pack')

customRewardGetTechnology('72F1E3A9705C0530', 'mechancal_tech_pack_advanced')
customRewardGetTechnology('4E0641617894D284', 'redstone_tech_pack_advanced')
customRewardGetTechnology('56BA880366492A76', 'steel_tech_pack_advanced')

// mechanism (可以用于简化科技包合成的构件)
customRewardGetTechnology('78E5AC7A6397F5EE', 'mechanical_mechanism')
customRewardGetTechnology('6866BB2C5AD3AB26', 'redstone_precision_mechanism')
customRewardGetTechnology('583AEB5ECAF51C1A', 'sturdy_mechanism')

// mb
customRewardGetTechnology('79DC8A8639827E8E', 'mb_mechanical_furnace')
customRewardGetTechnology('18376A47FEF46130', 'mb_automated_assembly_station')

// tech
customRewardGetTechnology('6A892AC95A4BA891', 'unlock_sturdy_knob')
customRewardGetTechnology('390C7AF447438BB1', 'basic_logistics')
customRewardGetTechnology('5709CC9EDE7AE5A8', 'basic_transmission')
customRewardGetTechnology('464E0B98AE369468', 'basic_storage')
customRewardGetTechnology('475ED2278BE4C9A0', 'basic_storage_upgrade')
customRewardGetTechnology('1ACEC55FCD7286EF', 'intermediate_storage_upgrade')
customRewardGetTechnology('7AB0037B0257999F', 'industrial_iron_smelting')
customRewardGetTechnology('568B1B86743CCEDA', 'sturdy_sheet_smithing')
customRewardGetTechnology('34805123630A1887', 'steel_smelting')
customRewardGetTechnology('7AE6FF3538712355', 'redstone_circuit')
customRewardGetTechnology('3AF27BE31F90D519', 'inductive_mechanism')
customRewardGetTechnology('2B85DA3999DD5CEE', 'basic_chain_transmission')
customRewardGetTechnology('4F2AF909630B45BC', 'strange_potion')
customRewardGetTechnology('48C8FB124199A9CC', 'andesite_input_and_output')
customRewardGetTechnology('58CECCCCF0CA9E9D', 'set_tray')
customRewardGetTechnology('34F2DD88E65E6AC0', 'incomplete_precision_mechanism_3')
customRewardGetTechnology('0683FC52720655D1', 'precision_mechanism_3')
customRewardGetTechnology('6687632FA947A3A9', 'tin_smelting')
customRewardGetTechnology('4912670762F698A3', 'zinc_smelting')
customRewardGetTechnology('316F4532E34A9DD2', 'silver_smelting')
customRewardGetTechnology('4885D6D9DCEA610E', 'obsidian_smelting')
customRewardGetTechnology('3B5E9874C5D8DDF7', 'bronze_smelting')
customRewardGetTechnology('4272AC09BD8CDB92', 'smart_logistics')
customRewardGetTechnology('417940508E6701E2', 'smart_storage')
customRewardGetTechnology('47C4D179EBDD3121', 'seed_oil')
customRewardGetTechnology('3C3A58936BD29FB8', 'electron_tube')
customRewardGetTechnology('6985FC413962E0DC', 'dye_dilution')
customRewardGetTechnology('1413B17179915BF6', 'colorful_mechanism')
customRewardGetTechnology('1F9007C5ADF3A4F9', 'dye_refining')
customRewardGetTechnology('406DF6FB5A9EBC38', 'dye_charging')
customRewardGetTechnology('51DA66C1D411D7E7', 'mineral_block_dyeing')
customRewardGetTechnology('3FD02CF23E941EFE', 'basic_ore_set')
customRewardGetTechnology('22248AB92CA56254', 'ore_set')
customRewardGetTechnology('7D106801A6BE6AFD', 'bedrock')