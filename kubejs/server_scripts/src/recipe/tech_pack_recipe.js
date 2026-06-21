ServerEvents.recipes(event => {
    const {create, createoreexcavation, 
        vintageimprovements, minecraft, kubejs, cmm} = event.recipes

    // #region Tech Pack

    // mechancal_tech_pack
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
    ).id('kubejs:sequenced_assembly/mechancal_tech_pack')
    .technology('mechancal_tech_pack')

    // steel_tech_pack
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
    ).id('kubejs:sequenced_assembly/steel_tech_pack')
    .technology('steel_tech_pack')
    

    // redstone_tech_pack
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
    ).id('kubejs:sequenced_assembly/redstone_tech_pack')
    .technology('redstone_tech_pack')

    // blaze_tech_pack
    kubejs.automated_assembly_station()
        .id('kubejs:automated_assembly_station/blaze_tech_pack')
        .duration(640)
        .inputItems('64x magma_block', Item.of('minecraft:blaze_powder', 24), '2x create:blaze_cake')
        .outputItems('minecraft:orange_wool')
        .dimension('minecraft:the_nether')
        .technology('blaze_tech_pack')
    

    // mechancal_tech_pack_advanced

    kubejs.automated_assembly_station()
        .id('kubejs:automated_assembly_station/mechancal_tech_pack')
        .duration(160)
        .inputItems(Item.of('create:andesite_casing', 32), Item.of('kubejs:precision_mechanism_1', 8), 
                'kubejs:mechanical_mechanism')
        .outputItems(Item.of('32x minecraft:brown_wool'))
        .technology('mechancal_tech_pack_advanced')

    // redstone_tech_pack_advanced
    kubejs.automated_assembly_station()
        .id('kubejs:automated_assembly_station/redstone_tech_pack')
        .duration(160)
        .inputItems(Item.of('minecraft:redstone_block', 16), Item.of('kubejs:precision_mechanism_2', 4), 
                'kubejs:redstone_precision_mechanism')
        .outputItems(Item.of('32x minecraft:red_wool'))
        .technology('redstone_tech_pack_advanced')

    // steel_tech_pack_advanced
    kubejs.automated_assembly_station()
        .id('kubejs:automated_assembly_station/steel_tech_pack')
        .duration(160)
        .inputItems(Item.of('create:industrial_iron_block', 32), Item.of('unify:steel_ingot', 16), 
                'kubejs:sturdy_mechanism')
        .outputItems(Item.of('32x minecraft:light_gray_wool'))
        .technology('steel_tech_pack_advanced')
    

    // #endregion

    // #region Mechanism

    // mechanical_mechanism
    create.sequenced_assembly(
        ['kubejs:mechanical_mechanism'],
        ['create_dd:inductive_mechanism'],
        [
            create.deploying('kubejs:incomplete_mechanical_mechanism',
                ['kubejs:incomplete_mechanical_mechanism', 'create:andesite_alloy']),
            create.deploying('kubejs:incomplete_mechanical_mechanism',
                ['kubejs:incomplete_mechanical_mechanism', 'kubejs:precision_mechanism_3']),
            create.deploying('kubejs:incomplete_mechanical_mechanism',
                ['kubejs:incomplete_mechanical_mechanism', 'kubejs:precision_mechanism_1']),
            vintageimprovements.vibrating(
                ['kubejs:incomplete_mechanical_mechanism'], 'kubejs:incomplete_mechanical_mechanism')
        ],
        'kubejs:incomplete_mechanical_mechanism', 4
    ).id('kubejs:sequenced_assembly/mechanical_mechanism')
    .technology('mechanical_mechanism')
    

    // redstone_precision_mechanism
    create.sequenced_assembly(
        'kubejs:redstone_precision_mechanism',
        'kubejs:redstone_sheet',
        [
            create.cutting('kubejs:redstone_sheet', 'kubejs:redstone_sheet'),
            create.deploying('kubejs:incomplete_redstone_precision_mechanism', ['kubejs:incomplete_redstone_precision_mechanism', 'kubejs:precision_mechanism_2']),
            create.deploying('kubejs:incomplete_redstone_precision_mechanism', ['kubejs:incomplete_redstone_precision_mechanism', 'create:electron_tube']),
            vintageimprovements.vacuumizing(
                'kubejs:incomplete_redstone_precision_mechanism',
                    [Fluid.of('kubejs:redstone_diluent', 500),'kubejs:incomplete_redstone_precision_mechanism']),
            create.filling('kubejs:incomplete_redstone_precision_mechanism', ['kubejs:incomplete_redstone_precision_mechanism', Fluid.of('createaddition:seed_oil', 250)]),
            create.deploying('kubejs:incomplete_redstone_precision_mechanism', ['kubejs:incomplete_redstone_precision_mechanism', 'unify:silver_wire']),
        ],
        'kubejs:incomplete_redstone_precision_mechanism', 4
    ).id('kubejs:redstone/redstone_precision_mechanism')
    .technology('redstone_precision_mechanism')

    // sturdy_mechanism
    create.sequenced_assembly(
        'kubejs:sturdy_mechanism',
        'kubejs:bedrock_sheet',
        [
            create.deploying('kubejs:incomplete_sturdy_mechanism', 
                ['kubejs:incomplete_sturdy_mechanism', 'unify:steel_sheet']),
            create.deploying('kubejs:incomplete_sturdy_mechanism', 
                ['kubejs:incomplete_sturdy_mechanism', 'kubejs:precision_mechanism_1']),
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
    ).technology('sturdy_mechanism').id('kubejs:sequenced_assembly/sturdy_mechanism')

    // blaze_mechanism
    create.sequenced_assembly(
        'kubejs:blaze_mechanism',
        [
            'create_dd:blaze_gold'
        ],
        [
            create.filling('kubejs:incomplete_blaze_mechanism', [Fluid.of('kubejs:charged_orange_dye_solution', 125), 'kubejs:incomplete_blaze_mechanism']),
            create.filling('kubejs:incomplete_blaze_mechanism', [Fluid.of('kubejs:heat_lava', 250), 'kubejs:incomplete_blaze_mechanism']),
            create.deploying('kubejs:incomplete_blaze_mechanism', ['kubejs:incomplete_blaze_mechanism', 'kubejs:precision_mechanism_1']),
            create.deploying('kubejs:incomplete_blaze_mechanism', ['kubejs:incomplete_blaze_mechanism', 'create:sturdy_sheet']),
            create.deploying('kubejs:incomplete_blaze_mechanism', ['kubejs:incomplete_blaze_mechanism', 'create:blaze_cake']),
            create.deploying('kubejs:incomplete_blaze_mechanism', ['kubejs:incomplete_blaze_mechanism', 'kubejs:precision_mechanism_4']),
        ],
        'kubejs:incomplete_blaze_mechanism', 4
    ).technology('blaze_mechanism')
    .id('kubejs:sequenced_assembly/blaze_mechanism')

    // #endregion
})