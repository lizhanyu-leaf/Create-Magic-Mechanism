ServerEvents.recipes(event => { 

    const { create } = event.recipes

    const wood_types = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'crimson', 'warped', 'bamboo', {namespace: 'create_dd', path: 'rose'}, {namespace: 'create_dd', path: 'rubber'}, {namespace: 'create_dd', path: 'spirit'}, {namespace: 'create_dd', path: 'smoked'}]

    /**
     * 
     * @param {InputItem_} set 
     * @param {OutputItem_[]} outputlist 
     */
    function setcutting(set, outputlist){
        outputlist.forEach((output, index) => {
            event.stonecutting(output, set).id(`kubejs:wood/stonecutting_${index}_${output.replace('x ', '_').replace(':', '_')}_from_${set.replace(':', '_')}`)
        })
    }

    // 木材套件压制
    create.pressing(
        'kubejs:wood_set',
        '#minecraft:logs'
    ).id('kubejs:wood/pressing_wood_set_from_logs')

    event.remove({output: 'minecraft:lever'})
    event.remove({output: 'minecraft:ladder'})
    event.remove({output: 'minecraft:barrel'})
    event.remove({output: 'sophisticatedstorage:upgrade_base'})

    wood_types.forEach(type => {
        if (typeof type == 'string') { 
            event.remove({output: `${type}_planks`})
            event.remove({output: `${type}_sign`})
            event.remove({output: `${type}_hanging_sign`})
            event.remove({output: `${type}_button`})
            event.remove({output: `${type}_fence`})
            event.remove({output: `${type}_gate`})
            event.remove({output: `${type}_door`})
            event.remove({output: `${type}_trapdoor`})
            event.remove({output: `${type}_pressure_plate`})
            event.remove({output: `${type}_stairs`})
            event.remove({output: `${type}_wood`})
            event.remove({output: `stripped_${type}_wood`})
        } else {
            event.remove({output: `${type.namespace}:${type.path}_planks`})
            event.remove({output: `${type.namespace}:${type.path}_sign`})
            event.remove({output: `${type.namespace}:${type.path}_hanging_sign`})
            event.remove({output: `${type.namespace}:${type.path}_button`})
            event.remove({output: `${type.namespace}:${type.path}_fence`})
            event.remove({output: `${type.namespace}:${type.path}_gate`})
            event.remove({output: `${type.namespace}:${type.path}_door`})
            event.remove({output: `${type.namespace}:${type.path}_trapdoor`})
            event.remove({output: `${type.namespace}:${type.path}_pressure_plate`})
            event.remove({output: `${type.namespace}:${type.path}_stairs`})
            event.remove({output: `${type.namespace}:${type.path}_wood`})
            event.remove({output: `${type.namespace}:stripped_${type.path}_wood`})
        }
    })

    event.remove({output:'ars_nouveau:purple_archwood_wood'})
    event.remove({output:'ars_nouveau:red_archwood_wood'})
    event.remove({output:'ars_nouveau:green_archwood_wood'})
    event.remove({output:'ars_nouveau:blue_archwood_wood'})
    event.remove({output:'ars_nouveau:stripped_purple_archwood_wood'})
    event.remove({output:'ars_nouveau:stripped_red_archwood_wood'})
    event.remove({output:'ars_nouveau:stripped_green_archwood_wood'})
    event.remove({output:'ars_nouveau:stripped_blue_archwood_wood'})
    event.remove({output:'minecraft:crimson_hyphae'})
    event.remove({output:'minecraft:stripped_crimson_hyphae'})
    event.remove({output:'minecraft:warped_hyphae'})
    event.remove({output:'minecraft:stripped_warped_hyphae'})

    for (let i = 0; i < wood_types.length; i++) {
        let planks = (typeof wood_types[i] == 'string') ? `${wood_types[i]}_planks` : `${wood_types[i].namespace}:${wood_types[i].path}_planks`
        let next_planks = (typeof wood_types[(i+1)%(wood_types.length)] == 'string') ? `${wood_types[(i+1)%(wood_types.length)]}_planks` : `${wood_types[(i+1)%(wood_types.length)].namespace}:${wood_types[(i+1)%(wood_types.length)].path}_planks`
        create.compacting(
            [`4x ${next_planks}`],
            [`4x ${planks}`]
        ).id(`kubejs:compacting/${(typeof wood_types[(i+1)%(wood_types.length)] == 'string') ? next_planks : wood_types[(i+1)%(wood_types.length)].path}_from_${(wood_types[i] == 'string') ? planks : wood_types[i].path}`)
    }

    setcutting('kubejs:wood_set', [
        '8x minecraft:stick',
        '8x minecraft:barrel',
        '4x minecraft:oak_planks',
        'minecraft:stripped_oak_log',
        '4x minecraft:spruce_planks',
        'minecraft:stripped_spruce_log',
        '8x sophisticatedstorage:upgrade_base',
        '4x minecraft:oak_trapdoor',
        '16x minecraft:oak_button',
        '3x minecraft:oak_sign',
        '6x minecraft:ladder',
        '8x minecraft:lever'
    ])

    event.replaceInput(
        {type: 'crafting_shaped'},
        '#minecraft:logs',
        'kubejs:wood_set'
    )

    event.replaceInput(
        {type: 'crafting_shapeless'},
        '#minecraft:logs',
        'kubejs:wood_set'
    )

    // 木材套件混合
    create.mixing(
        '2x kubejs:wood_set',
        [
            'kubejs:wood_set',
            '4x minecraft:stick'
        ]
    ).id('kubejs:wood/mixing_wood_set_from_water')

    // 木炭部署
    create.deploying(
        'minecraft:charcoal',
        [
            'minecraft:oak_planks',
            'create:blaze_cake'
        ]
    ).keepHeldItem().id('kubejs:wood/deploying_charcoal_from_planks_and_blaze_cake')

    // 木材套件精密机制混合
    create.mixing(
        [
            '2x kubejs:wood_set',
            'create:precision_mechanism',
            'kubejs:blaze_mechanism'
        ],
        [
            'create:precision_mechanism',
            'kubejs:blaze_mechanism',
            '2x minecraft:stick',
            Fluid.of('minecraft:water', 250)
        ]
    ).id('kubejs:wood/mixing_wood_set_precision_mechanism')

    // 安山机壳部署
    create.deploying(
        'create:andesite_casing',
        [
            'kubejs:wood_set',
            'create:andesite_alloy'
        ]
    ).id('kubejs:wood/deploying_andesite_casing_from_wood_set')

    // 安山机壳反向部署
    create.deploying(
        'create:andesite_casing',
        [
            'create:andesite_alloy',
            'kubejs:wood_set'
            
        ]
    ).id('kubejs:wood/deploying_andesite_casing_from_alloy')

    // 黄铜机壳部署
    create.deploying(
        'create:brass_casing',
        [
            'kubejs:wood_set',
            [
                'create:brass_ingot',
                'create:brass_sheet'
            ]
        ]
    ).id('kubejs:wood/deploying_brass_casing_from_wood_set')

    // 黄铜机壳反向部署
    create.deploying(
        'create:brass_casing',
        [
            [
                'create:brass_ingot',
                'create:brass_sheet'
            ],
            'kubejs:wood_set'
        ]
    ).id('kubejs:wood/deploying_brass_casing_from_ingot')

    // 铜机壳部署
    create.deploying(
        'create:copper_casing',
        [
            'kubejs:wood_set',
            'minecraft:copper_ingot'
        ]
    ).id('kubejs:wood/deploying_copper_casing_from_wood_set')

    // 铜机壳反向部署
    create.deploying(
        'create:copper_casing',
        [
            'minecraft:copper_ingot',
            'kubejs:wood_set'
        ]
    ).id('kubejs:wood/deploying_copper_casing_from_ingot')

    event.recipes.minecraft.crafting_shaped(
        'kubejs:cogwheel_upgrade_smithing_template',
        [
            ' W ',
            'WCW',
            ' W '
        ],
        {
            W: '#minecraft:planks',
            C: 'create:andesite_alloy'
        }
    )

    create.deploying(
        'kubejs:cogwheel_upgrade_smithing_template',
        [
            'kubejs:wood_set',
            'kubejs:cogwheel_upgrade_smithing_template'
        ]
    ).keepHeldItem().id('kubejs:deploying/wood/cogwheel_upgrade_smithing_template_from_wood_set')

    event.recipes.minecraft.crafting_shaped(
        'kubejs:large_cogwheel_upgrade_smithing_template',
        [
            'W W',
            ' C ',
            'W W'
        ],
        {
            W: '#minecraft:planks',
            C: 'create:andesite_alloy'
        }
    )

    create.deploying(
        'kubejs:large_cogwheel_upgrade_smithing_template',
        [
            'kubejs:wood_set',
            'kubejs:large_cogwheel_upgrade_smithing_template'
        ]
    ).keepHeldItem().id('kubejs:deploying/wood/large_cogwheel_upgrade_smithing_template_from_wood_set')

    create.sequenced_assembly(
        '4x create:cogwheel',
        'create:andesite_alloy',
        [
            create.deploying('kubejs:incomplete_wooden_products', 
                ['kubejs:incomplete_wooden_products', 'kubejs:cogwheel_upgrade_smithing_template']),

            create.cutting('kubejs:incomplete_wooden_products', 'kubejs:incomplete_wooden_products'),

            create.deploying('kubejs:incomplete_wooden_products', 
                ['kubejs:incomplete_wooden_products', 'kubejs:wood_set']),
        ],
        'kubejs:incomplete_wooden_products', 1
    ).id('kubejs:sequenced_assembly/wood/cogwheel')

    create.sequenced_assembly(
        '4x create:large_cogwheel',
        'create:andesite_alloy',
        [
            create.deploying('kubejs:incomplete_wooden_products', 
                ['kubejs:incomplete_wooden_products', 'kubejs:large_cogwheel_upgrade_smithing_template']),

            create.cutting('kubejs:incomplete_wooden_products', 'kubejs:incomplete_wooden_products'),

            create.deploying('kubejs:incomplete_wooden_products', 
                ['kubejs:incomplete_wooden_products', 'kubejs:wood_set']),

            create.deploying('kubejs:incomplete_wooden_products', 
                ['kubejs:incomplete_wooden_products', 'kubejs:wood_set']),
        ],
        'kubejs:incomplete_wooden_products', 1
    ).id('kubejs:sequenced_assembly/wood/large_cogwheel')

    event.remove({id: 'create:crafting/kinetics/cogwheel'})
    event.remove({id: 'create:crafting/kinetics/large_cogwheel'})
    event.remove({id: 'create:crafting/kinetics/large_cogwheel_from_little'})
    event.remove({id: 'create:deploying/cogwheel'})
    event.remove({id: 'create:deploying/large_cogwheel'})
    // fluid tank
    event.remove({output: 'create:fluid_tank', type: 'minecraft:crafting_shaped'})
    event.remove({output: 'create_connected:fluid_vessel', type: 'minecraft:crafting_shaped'})
    // item vault
    event.remove({output: 'create:item_vault', type: 'minecraft:crafting_shaped'})
    event.remove({output: 'create_connected:item_silo', type: 'minecraft:crafting_shaped'})
})