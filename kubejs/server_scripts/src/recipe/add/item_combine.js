ServerEvents.recipes(event => {
    const { cmm } = event.recipes

    cmm.item_combine(
        'kubejs:bedrock_ingot',
        ['kubejs:bedrock_powder', 'minecraft:netherite_ingot']
    ).id('kubejs:item_combine/bedrock_ingot')

    cmm.item_combine(
        [
            Item.of('kubejs:aggregated_iron_mechanism'),
            Item.of('kubejs:pack_iron').withChance(0.1),
            Item.of('kubejs:pack').withChance(0.5)
        ],
        [
            'kubejs:aggregated_iron_mechanism',
            'minecraft:iron_block',
            'kubejs:pack'
        ]
    ).id('kubejs:item_combine/aggregated_iron_mechanism')

    cmm.item_combine(
        '128x minecraft:iron_ingot',
        [
            'minecraft:amethyst_shard',
            'kubejs:pack_iron'
        ]
    ).id('kubejs:item_combine/iron_ingot')

    cmm.item_combine(
        [
            'kubejs:aggregated_gold_mechanism',
            Item.of('kubejs:pack_gold').withChance(0.1),
            Item.of('kubejs:pack').withChance(0.5)
        ],
        [
            'kubejs:aggregated_gold_mechanism',
            'minecraft:gold_block',
            'kubejs:pack'
        ]
    ).id('kubejs:item_combine/aggregated_gold_mechanism')

    cmm.item_combine(
        '128x minecraft:gold_ingot',
        [
            'minecraft:amethyst_shard',
            'kubejs:pack_gold'
        ]
    ).id('kubejs:item_combine/gold_ingot')

    cmm.item_combine(
        '128x minecraft:copper_ingot',
        [
            'minecraft:amethyst_shard',
            'kubejs:pack_copper'
        ]
    ).id('kubejs:item_combine/copper_ingot')

    cmm.item_combine(
        [
            'kubejs:aggregated_copper_mechanism',
            Item.of('kubejs:pack_copper').withChance(0.1),
            Item.of('kubejs:pack').withChance(0.5)
        ],
        [
            'kubejs:aggregated_copper_mechanism',
            'minecraft:copper_block',
            'kubejs:pack'
        ]
    ).id('kubejs:item_combine/aggregated_copper_mechanism')

    cmm.item_combine(
        '128x minecraft:diamond',
        [
            'minecraft:amethyst_shard',
            'kubejs:pack_diamond'
        ]
    ).id('kubejs:item_combine/diamond')

    cmm.item_combine(
        [
            'kubejs:aggregated_diamond_mechanism',
            Item.of('kubejs:pack_diamond').withChance(0.1),
            Item.of('kubejs:pack').withChance(0.5)
        ],
        [
            'kubejs:aggregated_diamond_mechanism',
            'minecraft:diamond_block',
            'kubejs:pack'
        ]
    ).id('kubejs:item_combine/aggregated_diamond_mechanism')

    cmm.item_combine(
        '128x create:zinc_ingot',
        [
            'minecraft:amethyst_shard',
            'kubejs:pack_zinc'
        ]
    ).id('kubejs:item_combine/zinc_ingot')

    cmm.item_combine(
        [
            'kubejs:aggregated_zinc_mechanism',
            Item.of('kubejs:pack_zinc').withChance(0.1),
            Item.of('kubejs:pack').withChance(0.5)
        ],
        [
            'kubejs:aggregated_zinc_mechanism',
            'create:zinc_block',
            'kubejs:pack'
        ]
    ).id('kubejs:item_combine/aggregated_zinc_mechanism')

    cmm.item_combine(
        '128x create:andesite_alloy',
        [
            'minecraft:amethyst_shard',
            'kubejs:pack_andesite_alloy'
        ]
    ).id('kubejs:item_combine/andesite_alloy')

    cmm.item_combine(
        [
            'kubejs:aggregated_andesite_alloy_mechanism',
            Item.of('kubejs:pack_andesite_alloy').withChance(0.1),
            Item.of('kubejs:pack').withChance(0.5)
        ],
        [
            'kubejs:aggregated_andesite_alloy_mechanism',
            'minecraft:andesite',
            'kubejs:pack'
        ]
    )

    cmm.item_combine(
        '128x create:brass_ingot',
        [
            'minecraft:amethyst_shard',
            'kubejs:pack_brass'
        ]
    ).id('kubejs:item_combine/brass_ingot')

    cmm.item_combine(
        [
            'kubejs:aggregated_brass_mechanism',
            Item.of('kubejs:pack_brass').withChance(0.1),
            Item.of('kubejs:pack').withChance(0.5)
        ],
        [
            'kubejs:aggregated_brass_mechanism',
            'create:brass_block',
            'kubejs:pack'
        ]
    )
})