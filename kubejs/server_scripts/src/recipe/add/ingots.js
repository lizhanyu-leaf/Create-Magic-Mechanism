ServerEvents.recipes(event => {
    const { create, vintageimprovements } = event.recipes

    create.sequenced_assembly(
        '3x kubejs:charging_iron_sheet',
        'create:iron_sheet',
        [
            create.deploying('create:iron_sheet', ['create:iron_sheet', 'minecraft:redstone']),
            create.pressing('create:iron_sheet', 'create:iron_sheet'),
            vintageimprovements.vibrating('create:iron_sheet', 'create:iron_sheet'),
            create.filling('create:iron_sheet', ['create:iron_sheet', Fluid.of('kubejs:redstone_diluent', 500)]),
        ],
        'create:iron_sheet',
        1
    ).id('kubejs:redstone/charging_iron_sheet')
    

    // create.deploying(
    //     'minecraft:emerald',
    //     [
    //         'minecraft:clay_ball',
    //         'minecraft:lime_dye'
    //     ]
    // )

    // create.deploying(
    //     'minecraft:diamond',
    //     [
    //         'minecraft:clay_ball',
    //         'minecraft:light_blue_dye'
    //     ]
    // )

    create.sequenced_assembly(
        'minecraft:emerald',
        'minecraft:clay_ball',
        [
            create.deploying('kubejs:incomplete_emerald', ['kubejs:incomplete_emerald', 'minecraft:lime_dye']),
            create.filling('kubejs:incomplete_emerald', [Fluid.of('kubejs:magenta_strange_potion', 50), 'kubejs:incomplete_emerald'])
        ],
        'kubejs:incomplete_emerald',
        1
    ).id('kubejs:ingots/emerald')

        create.sequenced_assembly(
        'minecraft:diamond',
        'minecraft:clay_ball',
        [
            create.deploying('kubejs:incomplete_diamond', ['kubejs:incomplete_diamond', 'minecraft:light_blue_dye']),
            create.filling('kubejs:incomplete_diamond', [Fluid.of('kubejs:magenta_strange_potion', 50), 'kubejs:incomplete_diamond'])
        ],
        'kubejs:incomplete_diamond',
        1
    ).id('kubejs:ingots/diamond')

    create.deploying(
        'minecraft:diamond_ore',
        [
            'minecraft:stone',
            'minecraft:diamond'
        ]
    ).id('kubejs:ores/diamond_ore')

    event.custom(
        {
            type: 'create:item_application',
            ingredients: [
                {
                    item: 'minecraft:amethyst_cluster'
                },
                {
                    item: 'minecraft:amethyst_shard'
                }
            ],
            results: [
                {
                    item: 'minecraft:amethyst_block'
                }
            ]
        }
    ).id('kubejs:amethyst/item_application_amethyst')

    event.remove({id: 'create:crushing/amethyst_block'})
    create.crushing(
        [
            Item.of('minecraft:amethyst_cluster'),
            Item.of('minecraft:amethyst_shard', 3),
            Item.of('minecraft:amethyst_shard').withChance(0.5),
            Item.of('create:experience_nugget').withChance(0.75)
        ],
        'minecraft:amethyst_block'
    ).id('create:crushing/amethyst_block')

    create.sequenced_assembly(
        [
            'create:brass_sheet',
            Item.of('5x create:crushed_raw_iron').withChance(0.5),
            Item.of('5x create:crushed_raw_gold').withChance(0.5),
            Item.of('5x create:crushed_raw_copper').withChance(0.5),
            Item.of('5x create:crushed_raw_zinc').withChance(0.5)
        ],
        'create:golden_sheet',
        [
            create.deploying(
                'create:golden_sheet',
                [
                    'create:golden_sheet',
                    'createaddition:zinc_sheet'
                ]
            ),

            create.filling('create:golden_sheet', [Fluid.of('kubejs:strange_potion', 500), 'create:golden_sheet']),

            create.pressing('create:golden_sheet', 'create:golden_sheet'),

            create.deploying(
                'create:golden_sheet',
                [
                    'create:golden_sheet',
                    [
                        'create:iron_sheet',
                        'create:copper_sheet'
                    ]
                ]
            )
        ],
        'create:golden_sheet', 1
    )

    // 五倍铁
    create.sequenced_assembly(
        [
            '5x minecraft:iron_ingot'
        ],
        'create:crushed_raw_iron',
        [
            create.filling(
                'create:crushed_raw_iron',
                [
                    Fluid.of('kubejs:strange_potion', 250),
                    'create:crushed_raw_iron'
                ]
            ),

            create.pressing(
                'create:crushed_raw_iron',
                'create:crushed_raw_iron'
            ),

            vintageimprovements.curving(
                'create:crushed_raw_iron',
                'create:crushed_raw_iron'
            ).head('create:blaze_cake')
        ],
        'create:crushed_raw_iron', 1
    )

    // 五倍铜
    create.sequenced_assembly(
        [
            '5x minecraft:copper_ingot'
        ],
        'create:crushed_raw_copper',
        [
            create.filling(
                'create:crushed_raw_copper',
                [
                    Fluid.of('kubejs:strange_potion', 250),
                    'create:crushed_raw_copper'
                ]
            ),
            create.pressing(
                'create:crushed_raw_copper',
                'create:crushed_raw_copper'
            ),
            vintageimprovements.curving(
                'create:crushed_raw_copper',
                'create:crushed_raw_copper'
            ).head('create:blaze_cake')
        ],
        'create:crushed_raw_copper', 1
    )

    // 五倍锌
    create.sequenced_assembly(
        [
            '5x create:zinc_ingot'
        ],
        'create:crushed_raw_zinc',
        [
            create.filling(
                'create:crushed_raw_zinc',
                [
                    Fluid.of('kubejs:strange_potion', 250),
                    'create:crushed_raw_zinc'
                ]
            ),

            create.pressing(
                'create:crushed_raw_zinc',
                'create:crushed_raw_zinc'
            ),

            vintageimprovements.curving(
                'create:crushed_raw_zinc',
                'create:crushed_raw_zinc'
            ).head('create:blaze_cake')

        ],
        'create:crushed_raw_zinc', 1
    )

    // 五倍金
    create.sequenced_assembly(
        [
            '5x minecraft:gold_ingot'
        ],
        'create:crushed_raw_gold',
        [
            create.filling(
                'create:crushed_raw_gold',
                [
                    Fluid.of('kubejs:strange_potion', 250),
                    'create:crushed_raw_gold'
                ]
            ),

            create.pressing(
                'create:crushed_raw_gold',
                'create:crushed_raw_gold'
            ),

            vintageimprovements.curving(
                'create:crushed_raw_gold',
                'create:crushed_raw_gold'
            ).head('create:blaze_cake')
        ],
        'create:crushed_raw_gold', 1
    )
})