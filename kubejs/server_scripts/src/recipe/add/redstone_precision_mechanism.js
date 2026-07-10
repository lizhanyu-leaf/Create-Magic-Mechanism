// ==================== 基础红石精密机制配方 ====================

ServerEvents.recipes(event => {
    const { create } = event.recipes
    let dyes = ['red_dye', 'orange_dye', 'yellow_dye', 'green_dye', 'lime_dye', 'cyan_dye', 'light_blue_dye', 'blue_dye', 'purple_dye', 'magenta_dye', 'pink_dye', 'black_dye', 'gray_dye', 'light_gray_dye', 'white_dye', 'brown_dye']

    create.sequenced_assembly(
        'kubejs:iridescent_mechanism',
        'kubejs:redstone_precision_mechanism',
        dyes.map(dye => {
            return create.filling('kubejs:incomplete_iridescent_mechanism', ['kubejs:incomplete_iridescent_mechanism', Fluid.of(`kubejs:${dye}_diluent`, 1000)])
        }).concat([
            create.deploying('kubejs:incomplete_iridescent_mechanism', ['kubejs:incomplete_iridescent_mechanism', 'create:electron_tube']),
            create.filling('kubejs:incomplete_iridescent_mechanism', ['kubejs:incomplete_iridescent_mechanism', Fluid.of('kubejs:slime', 250)])
        ]),
        'kubejs:incomplete_iridescent_mechanism',
        1
    ).id('kubejs:redstone/iridescent_mechanism')
})

// ==================== 科技解锁配方 ====================

TechSystemEvents.onTechLoad('cmm:redstone_precision_mechanism_laser_cutting_recipe', event => {
    event.recipes.vintageimprovements.laser_cutting(
        'kubejs:redstone_precision_mechanism',
        'kubejs:redstone_sheet',
        2500,
        500
    ).id('kubejs:redstone/redstone_precision_mechanism_laser_cutting')
})

TechSystemEvents.onTechLoad('cmm:redstone_sheet_advanced', event => {
    const { create, vintageimprovements } = event.recipes

    create.sequenced_assembly(
        'kubejs:redstone_sheet',
        'create:iron_sheet',
        [
            vintageimprovements.curving('kubejs:incomplete_redstone_sheet', 'kubejs:incomplete_redstone_sheet').head('kubejs:redstone_precision_mechanism'),
            vintageimprovements.laser_cutting('kubejs:incomplete_redstone_sheet', 'kubejs:redstone_sheet', 2500, 500),
            vintageimprovements.vibrating('kubejs:incomplete_redstone_sheet', 'kubejs:incomplete_redstone_sheet')
        ],
        'kubejs:incomplete_redstone_sheet',
        1
    ).id('kubejs:redstone/redstone_sheet_advanced')
})
