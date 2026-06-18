// redstone_precision_mechanism.js
ServerEvents.recipes(event => { 

    const { create, vintageimprovements } = event.recipes

    let dyes = ['red_dye', 'orange_dye', 'yellow_dye', 'green_dye', 'lime_dye', 'cyan_dye', 'light_blue_dye', 'blue_dye', 'purple_dye', 'magenta_dye', 'pink_dye', 'black_dye', 'gray_dye', 'light_gray_dye', 'white_dye', 'brown_dye']

    create.sequenced_assembly(
        'kubejs:colorful_mechanism',
        'kubejs:redstone_precision_mechanism',
        dyes.map(dye => {
            return create.filling('kubejs:incomplete_colorful_mechanism', ['kubejs:incomplete_colorful_mechanism', Fluid.of(`kubejs:${dye}_diluent`, 1000)])
        }).concat([
            create.deploying('kubejs:incomplete_colorful_mechanism', ['kubejs:incomplete_colorful_mechanism', 'create:electron_tube']),
            create.filling('kubejs:incomplete_colorful_mechanism', ['kubejs:incomplete_colorful_mechanism', Fluid.of('kubejs:slime', 250)])
        ]),
        'kubejs:incomplete_colorful_mechanism',
        1
    ).id('kubejs:redstone/colorful_mechanism')
    

    // create.mechanical_crafting(
    //     'kubejs:precision_mechine_core',
    //     [
    //         ' aaa ',
    //         'abcba',
    //         'aedea',
    //         'abcba',
    //         ' aaa '
    //     ],
    //     {
    //         a: 'create:brass_casing',
    //         b: 'kubejs:colorful_mechanism',
    //         c: 'create:electron_tube',
    //         d: 'create:precision_mechanism',
    //         e: 'kubejs:sturdy_mechanism'
    //     }
    // )

    // create.sequenced_assembly(
    //     'kubejs:modern_mechanism',
    //     'create:sturdy_sheet',
    //     [
    //         create.deploying('create:sturdy_sheet', ['create:sturdy_sheet', 'kubejs:precision_mechanism_3']),
    //         create.deploying('create:sturdy_sheet', ['create:sturdy_sheet', 'create:electron_tube']),
    //         create.deploying('create:sturdy_sheet', ['create:sturdy_sheet', 'kubejs:colorful_mechanism']),
    //         create.deploying('create:sturdy_sheet', ['create:sturdy_sheet', 'kubejs:wood_set'])
    //     ],
    //     'create:sturdy_sheet',
    //     1
    // ).id('kubejs:redstone/modern_mechanism')

    //redstone_precision_mechanism_laser_cutting_recipe
    if (global.technology.get_technology('redstone_precision_mechanism_laser_cutting_recipe')) {
        vintageimprovements.laser_cutting(
            'kubejs:redstone_precision_mechanism',
            'kubejs:redstone_sheet',
            2500,
            500
        ).id('kubejs:redstone/redstone_precision_mechanism_laser_cutting')
    }

    if (global.technology.get_technology('redstone_sheet_advanced')) {
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
    }
})