// ==================== 基础配方 ====================

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

    // 远古残骸加压
    event.remove({id: "minecraft:netherite_ingot"})
    vintageimprovements.pressurizing(
        [
            'minecraft:netherite_ingot',
            'minecraft:ancient_debris'
        ],
        [
            'minecraft:gold_ingot',
            'kubejs:obsidian_ingot',
            'minecraft:ancient_debris',
            Fluid.of('minecraft:lava', 1000)
        ]
    ).superheated().id('kubejs:bedrock/pressurizing_netherite_ingot_and_ancient_debris')
})

// ==================== 科技解锁配方 ====================

TechSystemEvents.onTechLoad('cmm:bedrock_advanced', event => {
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
})
