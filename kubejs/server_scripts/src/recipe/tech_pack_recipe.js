ServerEvents.recipes(event => {
    const {create, createoreexcavation, 
        vintageimprovements, minecraft, kubejs, cmm} = event.recipes

    // #region Tech Pack

    // mechancal_tech_pack
    if(global.technology.get_technology('mechancal_tech_pack')) {
        create.sequenced_assembly(
            'minecraft:brown_wool',
            'create:andesite_casing',
            [
                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'create:mechanical_press']),

                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'create:deployer']),

                create.deploying('kubejs:incomplete_andesite_mechine',
                    ['kubejs:incomplete_andesite_mechine', 'vintageimprovements:vacuum_chamber'])
            ],
            'kubejs:incomplete_andesite_mechine', 2
        ).id('kubejs:sequenced_assembly/mechancal_tech_pack')
    }

    // steel_tech_pack
    if (global.technology.get_technology('steel_tech_pack')) {
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
            'kubejs:incomplete_andesite_mechine', 2
        ).id('kubejs:sequenced_assembly/steel_tech_pack')
    }

    // redstone_tech_pack
    if (global.technology.get_technology('redstone_tech_pack')) {
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
            'kubejs:incomplete_andesite_mechine', 8
        ).id('kubejs:sequenced_assembly/redstone_tech_pack')
    }

    // mechancal_tech_pack_advanced
    if (global.technology.get_technology('mechancal_tech_pack_advanced')) {
        kubejs.automated_assembly_station()
            .id('kubejs:automated_assembly_station/mechancal_tech_pack')
            .duration(160)
            .inputItems(Item.of('create:andesite_casing', 32), Item.of('kubejs:precision_mechanism_1', 8), 
                    'kubejs:mechanical_mechanism')
            .outputItems(Item.of('32x minecraft:brown_wool'))
    }

    // redstone_tech_pack_advanced
    if (global.technology.get_technology('redstone_tech_pack_advanced')) {
        kubejs.automated_assembly_station()
            .id('kubejs:automated_assembly_station/redstone_tech_pack')
            .duration(160)
            .inputItems(Item.of('minecraft:redstone_block', 32), Item.of('kubejs:precision_mechanism_2', 4), 
                    'kubejs:redstone_precision_mechanism')
            .outputItems(Item.of('32x minecraft:red_wool'))
    }

    // #endregion

    // #region Mechanism

    // mechanical_mechanism
    if (global.technology.get_technology('mechanical_mechanism')) {
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
    }

    // redstone_precision_mechanism
    if (global.technology.get_technology('redstone_precision_mechanism')) {
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
    }

    // #endregion
})