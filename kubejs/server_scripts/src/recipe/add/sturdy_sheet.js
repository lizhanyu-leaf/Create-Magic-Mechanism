// ==================== 基础坚固板配方 ====================

ServerEvents.recipes(event => {
    const { create } = event.recipes

    // 黑曜石装配
    create.sequenced_assembly(
        'minecraft:obsidian',
        'create:powdered_obsidian',
        [
            create.filling('create:powdered_obsidian', ['create:powdered_obsidian', Fluid.of('minecraft:water', 500)]),
            create.filling('create:powdered_obsidian', ['create:powdered_obsidian', Fluid.of('minecraft:lava', 500)])
        ],
        'create:powdered_obsidian',
        1
    ).id('kubejs:sturdy_sheet/sequenced_assembly_obsidian_from_powdered')

    // 岩浆块填充
    create.filling(
        'magma_block',
        [
            Fluid.of('minecraft:lava', 500),
            'minecraft:netherrack'
        ]
    ).id('kubejs:sturdy_sheet/filling_magma_block_from_netherrack')

    // 黑曜石填充
    create.filling(
        Item.of('minecraft:obsidian'),
        [
            Fluid.of('minecraft:water', 100),
            'minecraft:magma_block'
        ]
    ).id('kubejs:sturdy_sheet/filling_obsidian_from_magma_block')
})

// ==================== 科技解锁配方 ====================

TechSystemEvents.onTechLoad('cmm:sturdy_sheet_simple_recipe', event => {
    event.recipes.vintageimprovements.pressurizing(
        [
            'create:sturdy_sheet',
            'kubejs:sturdy_mechanism'
        ],
        [
            Fluid.of('minecraft:lava', 250),
            'kubejs:sturdy_knob',
            'kubejs:sturdy_mechanism'
        ]
    ).id('kubejs:sturdy_sheet/pressurizing_sturdy_sheet_with_mechanism')
})
