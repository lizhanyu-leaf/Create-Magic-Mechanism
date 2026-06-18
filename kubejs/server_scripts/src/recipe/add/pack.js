ServerEvents.recipes(event => { 

    const { create, vintageimprovements } = event.recipes

    function pack_deploy(input, output, time) {
        create.sequenced_assembly(
            output,
            'kubejs:pack',
            [
                create.deploying('kubejs:pack_open', ['kubejs:pack', input])
            ],
            'kubejs:pack_open',
            time
        ).id(
            'kubejs:pack_deploy_' + input.split(':')[1]
        )
    }

    function pack_deploy_inputs(inputs, output, time) {
        create.sequenced_assembly(
            output,
            'kubejs:pack',
            inputs.map(input => create.deploying('kubejs:pack_open', ['kubejs:pack', input])),
            'kubejs:pack_open',
            time
        ).id(
            'kubejs:pack_deploy_inputs_' + output.split(':')[1]
        )
    }

    /**
     * @param {$FluidStackJS$Type} input
     * @param {$OutputItem$Type} output
     * @param {number} bucket
     */
    function pack_fluid_filling(input, output, bucket) {
        create.sequenced_assembly(
            output,
            'kubejs:pack_fluid_tank',
            [
                create.filling(
                    'kubejs:pack_fluid_tank',
                    [
                        'kubejs:pack_fluid_tank',
                        Fluid.of(input, 1000)
                    ]
                )
            ],
            'kubejs:pack_fluid_tank_open',
            bucket
        ).id(
            'kubejs:pack_fluid_filling_' + input.split(':')[1]
        )
    }

    /**
     * @param {$InputItem$Type} input_mechanism
     * @param {$OutputItem$Type} output
     * @param {number} time
     */
    function mechanism_pack(input_mechanism, output, time) {
        create.sequenced_assembly(
            output,
            'kubejs:pack',
            [
                create.deploying('kubejs:pack_open', ['kubejs:pack', input_mechanism]),
                create.deploying('kubejs:pack_open', ['kubejs:pack', input_mechanism]),
                create.deploying('kubejs:pack_open', ['kubejs:pack', 'kubejs:pack_magic_potion']),
                create.deploying('kubejs:pack_open', ['kubejs:pack', 'kubejs:pack_source_fluid'])
            ],
            'kubejs:pack_open',
            time
        ).id(
            'kubejs:mechanism_pack_' + input_mechanism.split(':')[1]
        )
    }

    pack_deploy('minecraft:stone', 'kubejs:pack_stone', 128)
    pack_deploy('minecraft:stone_bricks', 'kubejs:pack_stone_bricks', 128)
    pack_deploy('minecraft:deepslate', 'kubejs:pack_deepslate', 128)
    pack_deploy('minecraft:netherrack', 'kubejs:pack_netherrack', 128)

    pack_deploy_inputs([
        'minecraft:iron_ingot',
        'create:iron_sheet',
        'createaddition:iron_wire',
        'createaddition:iron_rod',
        'vintageimprovements:iron_spring',
        'vintageimprovements:small_iron_spring'
    ], 'kubejs:pack_iron', 32)

    pack_deploy_inputs([
        'minecraft:gold_ingot',
        'create:golden_sheet',
        'createaddition:gold_wire',
        'createaddition:gold_rod',
        'vintageimprovements:golden_spring',
        'vintageimprovements:small_golden_spring'
    ], 'kubejs:pack_gold', 32)

    pack_deploy_inputs([
        'minecraft:copper_ingot',
        'create:copper_sheet',
        'createaddition:copper_wire',
        'createaddition:copper_rod',
        'vintageimprovements:copper_spring',
        'vintageimprovements:small_copper_spring'
    ], 'kubejs:pack_copper', 32)

    pack_deploy('minecraft:diamond', 'kubejs:pack_diamond', 128)
    pack_deploy_inputs([
        'create:andesite_alloy',
        'vintageimprovements:andesite_sheet',
        'vintageimprovements:andesite_wire',
        'vintageimprovements:andesite_rod',
        'vintageimprovements:andesite_spring',
        'vintageimprovements:small_andesite_spring'
    ], 'kubejs:pack_andesite_alloy', 32)

    pack_deploy_inputs([
        'create:zinc_ingot',
        '#forge:plates/zinc',
        'vintageimprovements:zinc_wire',
        'vintageimprovements:zinc_rod',
        'vintageimprovements:zinc_spring',
        'vintageimprovements:small_zinc_spring'
    ], 'kubejs:pack_zinc', 32)

    pack_deploy_inputs([
        'create:brass_ingot',
        'create:brass_sheet',
        'vintageimprovements:brass_wire',
        'createaddition:brass_rod',
        'vintageimprovements:brass_spring',
        'vintageimprovements:small_brass_spring'
    ], 'kubejs:pack_brass', 32)

    create.sequenced_assembly(
        'kubejs:pack_fluid_tank',
        'kubejs:pack_copper',
        [
            create.deploying('kubejs:incomplete_pack_fluid_tank', ['kubejs:incomplete_pack_fluid_tank', 'minecraft:glass_pane']),
            create.pressing('kubejs:incomplete_pack_fluid_tank', 'kubejs:incomplete_pack_fluid_tank')
        ],
        'kubejs:incomplete_pack_fluid_tank',
        64
    )

    pack_fluid_filling(
        'kubejs:magic_potion',
        'kubejs:pack_magic_potion',
        128
    )

    pack_fluid_filling(
        'starbunclemania:source_fluid',
        'kubejs:pack_source_fluid',
        128
    )

    mechanism_pack(
        'kubejs:colorful_mechanism',
        'kubejs:pack_colorful_mechanism',
        32
    )

    mechanism_pack(
        'kubejs:sturdy_mechanism',
        'kubejs:pack_sturdy_mechanism',
        32
    )

    mechanism_pack(
        'kubejs:experience_mechanism',
        'kubejs:pack_experience_mechanism',
        32
    )

    mechanism_pack(
        'kubejs:blaze_mechanism',
        'kubejs:pack_blaze_mechanism',
        32
    )
})