// ==================== 科技包配方 ====================

TechSystemEvents.onTechLoad('cmm:mechancal_tech_pack', event => {
    const {create} = event.recipes

    create.sequenced_assembly(
        'minecraft:brown_wool',
        'create:andesite_casing',
        [
            create.deploying('kubejs:incomplete_andesite_mechine',
                ['kubejs:incomplete_andesite_mechine', 'create:cogwheel']),

            create.deploying('kubejs:incomplete_andesite_mechine',
                ['kubejs:incomplete_andesite_mechine', 'create:large_cogwheel']),

            create.deploying('kubejs:incomplete_andesite_mechine',
                ['kubejs:incomplete_andesite_mechine', 'create:mechanical_pump'])
        ],
        'kubejs:incomplete_andesite_mechine', 4
    )
    .id('kubejs:sequenced_assembly/mechancal_tech_pack')
})

TechSystemEvents.onTechLoad('cmm:steel_tech_pack', event => {
    const {create, cmm} = event.recipes

    create.sequenced_assembly(
        ['minecraft:light_gray_wool'],
        ['unify:cast_iron_block'],
        [
            create.deploying('kubejs:incomplete_andesite_mechine',
                ['kubejs:incomplete_andesite_mechine', 'unify:steel_sheet']),

            create.deploying('kubejs:incomplete_andesite_mechine',
                ['kubejs:incomplete_andesite_mechine', 'unify:steel_rod']),

            cmm.item_combine(
                'kubejs:incomplete_andesite_mechine',
                [
                    'kubejs:incomplete_andesite_mechine',
                    'create:sturdy_sheet',
                    'create_dd:andesite_sheet'
                ]
            )
        ],
        'kubejs:incomplete_andesite_mechine', 8
    )
    .id('kubejs:sequenced_assembly/steel_tech_pack')
})

TechSystemEvents.onTechLoad('cmm:redstone_tech_pack', event => {
    const {create, vintageimprovements} = event.recipes

    create.sequenced_assembly(
        ['minecraft:red_wool'],
        ['minecraft:redstone_block'],
        [
            create.deploying('kubejs:incomplete_andesite_mechine',
                ['kubejs:incomplete_andesite_mechine', 'minecraft:redstone_block']),

            create.deploying('kubejs:incomplete_andesite_mechine',
                ['kubejs:incomplete_andesite_mechine', 'kubejs:redstone_sheet']),

            create.deploying('kubejs:incomplete_andesite_mechine',
                ['kubejs:incomplete_andesite_mechine', 'minecraft:redstone']),

            vintageimprovements.vibrating(
                ['kubejs:incomplete_andesite_mechine', Item.of('minecraft:redstone', 0.75)], 'kubejs:incomplete_andesite_mechine')
        ],
        'kubejs:incomplete_andesite_mechine', 4
    )
    .id('kubejs:sequenced_assembly/redstone_tech_pack')
})

TechSystemEvents.onTechLoad('cmm:blaze_tech_pack', event => {
    const {kubejs} = event.recipes

    kubejs.automated_assembly_station()
        .id('kubejs:automated_assembly_station/blaze_tech_pack')
        .duration(640)
        .inputItems('64x magma_block', Item.of('minecraft:blaze_powder', 24), '2x create:blaze_cake')
        .outputItems('minecraft:orange_wool')
        .dimension('minecraft:the_nether')
})

TechSystemEvents.onTechLoad('cmm:mechancal_tech_pack_advanced', event => {
    const {kubejs} = event.recipes

    kubejs.automated_assembly_station()
        .id('kubejs:automated_assembly_station/mechancal_tech_pack')
        .duration(160)
        .inputItems(Item.of('create:andesite_casing', 32), Item.of('kubejs:sturdy_knob', 8),
                'kubejs:mechanical_mechanism')
        .outputItems(Item.of('32x minecraft:brown_wool'))
})

TechSystemEvents.onTechLoad('cmm:redstone_tech_pack_advanced', event => {
    const {kubejs} = event.recipes

    kubejs.automated_assembly_station()
        .id('kubejs:automated_assembly_station/redstone_tech_pack')
        .duration(160)
        .inputItems(Item.of('minecraft:redstone_block', 16), Item.of('kubejs:precision_redstone', 4),
                'kubejs:redstone_precision_mechanism')
        .outputItems(Item.of('32x minecraft:red_wool'))
})

TechSystemEvents.onTechLoad('cmm:steel_tech_pack_advanced', event => {
    const {kubejs} = event.recipes

    kubejs.automated_assembly_station()
        .id('kubejs:automated_assembly_station/steel_tech_pack')
        .duration(160)
        .inputItems(Item.of('create:industrial_iron_block', 32), Item.of('unify:steel_ingot', 16),
                'kubejs:sturdy_mechanism')
        .outputItems(Item.of('32x minecraft:light_gray_wool'))
})

// ==================== 构件配方 ====================

TechSystemEvents.onTechLoad('cmm:mechanical_mechanism', event => {
    const {create, vintageimprovements} = event.recipes

    create.sequenced_assembly(
        ['kubejs:mechanical_mechanism'],
        ['create_dd:inductive_mechanism'],
        [
            create.deploying('kubejs:incomplete_mechanical_mechanism',
                ['kubejs:incomplete_mechanical_mechanism', 'create:andesite_alloy']),
            create.deploying('kubejs:incomplete_mechanical_mechanism',
                ['kubejs:incomplete_mechanical_mechanism', 'kubejs:precision_gear_set']),
            create.deploying('kubejs:incomplete_mechanical_mechanism',
                ['kubejs:incomplete_mechanical_mechanism', 'kubejs:sturdy_knob']),
            vintageimprovements.vibrating(
                ['kubejs:incomplete_mechanical_mechanism'], 'kubejs:incomplete_mechanical_mechanism')
        ],
        'kubejs:incomplete_mechanical_mechanism', 4
    )
    .id('kubejs:sequenced_assembly/mechanical_mechanism')
})

TechSystemEvents.onTechLoad('cmm:redstone_precision_mechanism', event => {
    const {create, vintageimprovements} = event.recipes

    create.sequenced_assembly(
        'kubejs:redstone_precision_mechanism',
        'kubejs:redstone_sheet',
        [
            create.cutting('kubejs:redstone_sheet', 'kubejs:redstone_sheet'),
            create.deploying('kubejs:incomplete_redstone_precision_mechanism', ['kubejs:incomplete_redstone_precision_mechanism', 'kubejs:precision_redstone']),
            create.deploying('kubejs:incomplete_redstone_precision_mechanism', ['kubejs:incomplete_redstone_precision_mechanism', 'create:electron_tube']),
            vintageimprovements.vacuumizing(
                'kubejs:incomplete_redstone_precision_mechanism',
                    [Fluid.of('kubejs:redstone_diluent', 500),'kubejs:incomplete_redstone_precision_mechanism']),
            create.filling('kubejs:incomplete_redstone_precision_mechanism', ['kubejs:incomplete_redstone_precision_mechanism', Fluid.of('createaddition:seed_oil', 250)]),
            create.deploying('kubejs:incomplete_redstone_precision_mechanism', ['kubejs:incomplete_redstone_precision_mechanism', 'unify:silver_wire']),
        ],
        'kubejs:incomplete_redstone_precision_mechanism', 4
    )
    .id('kubejs:redstone/redstone_precision_mechanism')
})

TechSystemEvents.onTechLoad('cmm:sturdy_mechanism', event => {
    const {create, vintageimprovements} = event.recipes

    create.sequenced_assembly(
        'kubejs:sturdy_mechanism',
        'kubejs:bedrock_sheet',
        [
            create.deploying('kubejs:incomplete_sturdy_mechanism',
                ['kubejs:incomplete_sturdy_mechanism', 'unify:steel_sheet']),
            create.deploying('kubejs:incomplete_sturdy_mechanism',
                ['kubejs:incomplete_sturdy_mechanism', 'kubejs:sturdy_knob']),
            vintageimprovements.pressurizing(
                'kubejs:incomplete_sturdy_mechanism',
                ['kubejs:incomplete_sturdy_mechanism',
                    Fluid.of('kubejs:strange_potion', 500)]).heated(),
            create.deploying('kubejs:incomplete_sturdy_mechanism',
                ['kubejs:incomplete_sturdy_mechanism', 'kubejs:obsidian_nugget']),
            create.deploying('kubejs:incomplete_sturdy_mechanism',
                ['kubejs:incomplete_sturdy_mechanism', 'kubejs:obsidian_sheet']),
        ],
        'kubejs:incomplete_sturdy_mechanism',
        1
    )
    .id('kubejs:sequenced_assembly/sturdy_mechanism')
})

TechSystemEvents.onTechLoad('cmm:blaze_mechanism', event => {
    const {create} = event.recipes

    create.sequenced_assembly(
        'kubejs:blaze_mechanism',
        [
            'create_dd:blaze_gold'
        ],
        [
            create.filling('kubejs:incomplete_blaze_mechanism', [Fluid.of('kubejs:charged_orange_dye_solution', 125), 'kubejs:incomplete_blaze_mechanism']),
            create.filling('kubejs:incomplete_blaze_mechanism', [Fluid.of('kubejs:high_temperature_magma', 250), 'kubejs:incomplete_blaze_mechanism']),
            create.deploying('kubejs:incomplete_blaze_mechanism', ['kubejs:incomplete_blaze_mechanism', 'kubejs:sturdy_knob']),
            create.deploying('kubejs:incomplete_blaze_mechanism', ['kubejs:incomplete_blaze_mechanism', 'create:sturdy_sheet']),
            create.deploying('kubejs:incomplete_blaze_mechanism', ['kubejs:incomplete_blaze_mechanism', 'create:blaze_cake']),
            create.deploying('kubejs:incomplete_blaze_mechanism', ['kubejs:incomplete_blaze_mechanism', 'kubejs:solar_particle']),
        ],
        'kubejs:incomplete_blaze_mechanism', 4
    )
    .id('kubejs:sequenced_assembly/blaze_mechanism')
})