ServerEvents.recipes(event => {
    const { create, vintageimprovements } = event.recipes

    // 深板岩压缩
    create.compacting(
        'minecraft:deepslate',
        [
            Fluid.of('minecraft:lava', 100),
            'minecraft:stone'
        ]
    ).id('kubejs:bedrock/compacting_deepslate_from_lava_and_stone')

    // 石头切割
    create.cutting(
        'minecraft:stone',
        'minecraft:cobblestone'
    ).processingTime(1).id('kubejs:bedrock/cutting_stone_from_cobblestone')

    // 基岩装配（现在添加.id()）
    create.sequenced_assembly(
        'minecraft:bedrock',
        'minecraft:deepslate',
        [
            create.filling('minecraft:deepslate', [Fluid.of('kubejs:charged_black_dye_solution', 125), 'minecraft:deepslate']),
            create.cutting('minecraft:deepslate', 'minecraft:deepslate').processingTime(750),
            create.pressing('minecraft:deepslate', 'minecraft:deepslate'),
            vintageimprovements.pressurizing(
                'minecraft:deepslate',
                [
                    'minecraft:deepslate',
                    Fluid.of('minecraft:lava', 100)
                ]
            ).superheated()
        ],
        'minecraft:deepslate',
        5
    ).id('kubejs:bedrock/sequenced_assembly_bedrock_from_deepslate')

    // 原始基岩加压
    event.recipes.vintageimprovements.pressurizing(
        'kubejs:raw_bedrock',
        [
            'minecraft:bedrock',
            Fluid.of('kubejs:strange_potion', 100),
            Fluid.of('minecraft:lava', 100)
        ]
    ).processingTime(1000).superheated().id('kubejs:bedrock/pressurizing_raw_bedrock')

    // 坚固机制压缩
    create.compacting(
        [
            'kubejs:blaze_mechanism',
            'kubejs:raw_bedrock',
            Item.of('kubejs:bedrock_powder').withChance(0.25),
            Item.of('kubejs:bedrock_powder').withChance(0.05),
        ],
        [
            'kubejs:blaze_mechanism',
            'minecraft:bedrock',
            Fluid.of('kubejs:strange_potion', 100),
            Fluid.of('minecraft:lava', 100)
        ]
    ).superheated().id('kubejs:bedrock/compacting_blaze_mechanism_with_raw_bedrock')

    // 原始基岩粉碎
    create.crushing(
        [
            Item.of('kubejs:bedrock_powder'),
            Item.of('minecraft:ancient_debris').withChance(0.25),
            Item.of('kubejs:raw_bedrock').withChance(0.75)
        ],
        'kubejs:raw_bedrock',
        5000
    ).id('kubejs:bedrock/crushing_raw_bedrock_to_bedrock_powder')

    // 下界合金锭部署
    create.deploying(
        'kubejs:bedrock_ingot',
        [
            'minecraft:netherite_ingot',
            'kubejs:bedrock_powder'
        ]
    ).id('kubejs:bedrock/deploying_bedrock_ingot_from_netherite_and_powder')

    // 基岩板材压制
    // create.pressing(
    //     'kubejs:bedrock_sheet',
    //     'kubejs:bedrock_ingot'
    // ).id('kubejs:bedrock/pressing_bedrock_sheet')

    vintageimprovements.hammering(
        'kubejs:bedrock_sheet',
        'kubejs:bedrock_ingot',
        20
    ).id('kubejs:hammering/bedrock/bedrock_sheet')

    // 坚固机制装配（现在添加.id()）
    create.sequenced_assembly(
        'kubejs:sturdy_mechanism',
        'kubejs:bedrock_sheet',
        [
            create.deploying('kubejs:incomplete_sturdy_mechanism', ['kubejs:incomplete_sturdy_mechanism', 'create:sturdy_sheet']),
            create.deploying('kubejs:incomplete_sturdy_mechanism', ['kubejs:incomplete_sturdy_mechanism', 'kubejs:precision_mechanism_1']),
            vintageimprovements.pressurizing(
                'kubejs:incomplete_sturdy_mechanism',
                [
                    'kubejs:incomplete_sturdy_mechanism',
                    Fluid.of('kubejs:slime', 500)
                ]
            ).heated(),
            create.deploying('kubejs:incomplete_sturdy_mechanism', ['kubejs:incomplete_sturdy_mechanism', 'kubejs:bedrock_powder']),
            create.filling('kubejs:incomplete_sturdy_mechanism', [Fluid.of('kubejs:strange_potion', 100), 'kubejs:incomplete_sturdy_mechanism'])
        ],
        'kubejs:incomplete_sturdy_mechanism',
        1
    ).id('kubejs:bedrock/sequenced_assembly_sturdy_mechanism')

    // 深板岩应用基岩粉末
    // bedrock_advanced
    if (TechnologyTools.isActive('bedrock_advanced')) {
        event.custom(
            {
                type: 'create:item_application',
                ingredients: [
                    {
                        item: 'minecraft:deepslate'
                    },
                    {
                        item: 'kubejs:bedrock_powder'
                    }
                ],
                results: [
                    {
                        item: 'minecraft:bedrock'
                    }
                ]
            }
        ).id('kubejs:bedrock/item_application_bedrock_from_deepslate_and_powder')
    }

    // 远古残骸加压
    vintageimprovements.pressurizing(
        [
            'minecraft:netherite_ingot',
            'minecraft:ancient_debris'
        ],
        [
            'minecraft:gold_ingot',
            'minecraft:ancient_debris',
            Fluid.of('minecraft:lava', 1000)
        ]
    ).id('kubejs:bedrock/pressurizing_netherite_ingot_and_ancient_debris')
})