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

customRewardGetTechnology(
    '2F3B27E9643AD4E7',
    'compression_upgrade'
)

customRewardGetTechnology(
    '247614AEF454880F',
    'compacting_upgrade'
)

customRewardGetTechnology(
    '1D88DA67CDE5FDDF',
    'hopper_upgrade'
)

customRewardGetTechnology(
    '56EBB4E08F3CC44B',
    'magnet_upgrade'
)

customRewardGetTechnology(
    '4FB6FDAED1B3340D',
    'tank_upgrade'
)

customRewardGetTechnology(
    '444B4973D6476095',
    'battery_upgrade'
)