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

// 1.1
customRewardGetTechnology('23C2C62A621EECCF', 'simple_precision_gear_set_recipe')
customRewardGetTechnology('0CDE82D173261B8A', 'incomplete_precision_gear_set_cutting_recipe')
// 1
customRewardGetTechnology('6AF8F852B10CC475', 'redstone_sheet_advanced')
customRewardGetTechnology('53EA3419BC932A84', 'precision_redstone_advanced')
customRewardGetTechnology('6EE640CE65C5D1D3', 'redstone_precision_mechanism_laser_cutting_recipe')
customRewardGetTechnology('06B0A75BEB9D8C9E', 'sturdy_sheet_simple_recipe')
customRewardGetTechnology('5CBFA5EEFE60F599', 'electron_tube_advanced')
customRewardGetTechnology('5E7E166F164836B6', 'bedrock_advanced')

// 1.3
customRewardGetTechnology('13504FAB3AA870D1', 'coin_button_recipe')
customRewardGetTechnology('19CC3B963643F7DE', 'presice_mixer_advanced_recipe')