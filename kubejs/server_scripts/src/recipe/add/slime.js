ServerEvents.recipes(event => {
    const { create, vintageimprovements } = event.recipes
    // 粘液块压制
    create.pressing(
        [
            '9x minecraft:slime_ball',
            Item.of('3x minecraft:slime_ball').withChance(0.5)
        ],
        [
            'minecraft:slime_block'
        ]
    ).id('kubejs:slime/pressing_slime_block_to_balls')

    // 粘液机制作（现在添加.id()）
    create.sequenced_assembly(
        'kubejs:slime_mechanism',
        'minecraft:slime_block',
        [
            vintageimprovements.vibrating('kubejs:incomplete_slime_mechanism', 'kubejs:incomplete_slime_mechanism'),
            vintageimprovements.laser_cutting('kubejs:incomplete_slime_mechanism', 'kubejs:incomplete_slime_mechanism', 200, 10),
            create.deploying('kubejs:incomplete_slime_mechanism', ['kubejs:incomplete_slime_mechanism', 'minecraft:slime_ball']),
            vintageimprovements.vacuumizing('kubejs:incomplete_slime_mechanism', ['kubejs:incomplete_slime_mechanism', Fluid.of('kubejs:refrigerant', 1000)]),
            create.filling('kubejs:incomplete_slime_mechanism', ['kubejs:incomplete_slime_mechanism', Fluid.of('kubejs:charged_lime_dye_solution', 125)])
        ],
        'kubejs:incomplete_slime_mechanism',
        1
    ).id('kubejs:slime/sequenced_assembly_slime_mechanism')

    // 真空制作粘液流体
})