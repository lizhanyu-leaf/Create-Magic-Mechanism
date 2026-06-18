ServerEvents.recipes(event => {
    const { create, vintageimprovements } = event.recipes

    // 末影珍珠压制成末影板材
    create.pressing(
        'kubejs:ender_sheet',
        'minecraft:ender_pearl'
    ).id('kubejs:ender/pressing_ender_sheet_from_pearl')

    // 末影机制装配（现在添加.id()）
    create.sequenced_assembly(
        'kubejs:ender_mechanism',
        'kubejs:ender_sheet',
        [
            vintageimprovements.vibrating(
                'kubejs:incomplete_ender_mechanism',
                'kubejs:incomplete_ender_mechanism'
            ),

            vintageimprovements.pressurizing(
                'kubejs:incomplete_ender_mechanism',
                [
                    Fluid.of('kubejs:magic_potion', 250),
                    'kubejs:incomplete_ender_mechanism'
                ]
            ),

            vintageimprovements.laser_cutting(
                'kubejs:incomplete_ender_mechanism',
                'kubejs:incomplete_ender_mechanism',
                5000,
                100
            ),

            create.filling(
                'kubejs:incomplete_ender_mechanism',
                [
                    'kubejs:incomplete_ender_mechanism',
                    Fluid.of('kubejs:refrigerant', 250)
                ]
            )
        ],
        'kubejs:incomplete_ender_mechanism',
        1
    ).id('kubejs:ender/sequenced_assembly_ender_mechanism')

    // 铁板材填充成末影板材
    create.filling(
        'kubejs:ender_sheet',
        [
            Fluid.of('kubejs:magic_potion', 200),
            'create:iron_sheet'
        ]
    ).id('kubejs:ender/filling_ender_sheet_from_iron')

    event.stonecutting(
        '4x minecraft:ender_pearl',
        'kubejs:ender_mechanism'
    )
})