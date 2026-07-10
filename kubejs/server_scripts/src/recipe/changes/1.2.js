ServerEvents.recipes(event => {
    const { create, vintageimprovements } = event.recipes

    event.remove({ id: 'createdieselgenerators:compacting/plant_oil'})

    // 锌锭注液
    create.filling(
        'create:zinc_ingot',
        [
            'create:andesite_alloy',
            Fluid.of('kubejs:charged_cyan_dye_solution', 125)
        ]
    ).id('kubejs:filling/redstone_changes/zinc_ingot_from_andesite_alloy')

    // event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_4'})

    event.remove({ id: 'vintageimprovements:sequenced_assembly/redstone_module'})

    event.remove({ output: 'vintageimprovements:spring_coiling_machine_wheel'})
    event.replaceInput(
        { input: 'vintageimprovements:spring_coiling_machine_wheel' },
        'vintageimprovements:spring_coiling_machine_wheel',
        'kubejs:precision_redstone'
    )

    event.remove({ id: 'create:industrial_iron_block_from_ingots_iron_stonecutting' })
    // 工业铁块部署
    create.deploying(
        'create:industrial_iron_block',
        [
            'minecraft:iron_block',
            'create_dd:industrial_iron_sheet'
        ]
    ).id('kubejs:redstone_changes/deploying_industrial_iron_block_from_iron_and_bedrock_powder')

    event.replaceInput(
        'createaddition:crafting/capacitor_1',
        'minecraft:redstone_torch',
        'kubejs:redstone_precision_mechanism'
    ),

    event.replaceInput(
        'createaddition:crafting/capacitor_1',
        'create:copper_sheet',
        'create:brass_sheet'
    )

    event.replaceInput(
        'createaddition:crafting/capacitor_2',
        'minecraft:redstone_torch',
        'kubejs:redstone_precision_mechanism'
    ),

    event.replaceInput(
        'createaddition:crafting/capacitor_2',
        'create:copper_sheet',
        'create:brass_sheet'
    )

    event.remove({ mod: 'createcasing'})

    // 自定义应用配方 - 工业平台
    event.custom(
        {
            type: 'create:item_application',
            ingredients: [
                {
                    item: 'create:andesite_casing'
                },
                {
                    item: 'kubejs:redstone_sheet'
                }
            ],
            results: [
                {
                    item: 'industrial_platform:industrial_platform'
                }
            ]
        }
    ).id('kubejs:redstone_changes/custom_item_application_industrial_platform')

    create.mixing(
        [
            'kubejs:experience_mechanism',
            Fluid.of('create:honey', 250)
        ],
        [
            'kubejs:experience_mechanism',
            Fluid.of('kubejs:strange_potion', 250),
            'minecraft:orange_dye'
        ]
    ).id('kubejs:redstone_changes/mixing_honey')

    vintageimprovements.pressurizing(
        [
            'minecraft:white_dye',
            'kubejs:iridescent_mechanism',
            Fluid.of('kubejs:iridescent_concentrate', 125)
        ],
        [
            Fluid.of('minecraft:water', 200),
            Fluid.of('kubejs:strange_potion', 1000),
            'kubejs:iridescent_mechanism'
        ]
    ).processingTime(90).secondaryFluidInput(0).secondaryFluidOutput(0).id('kubejs:pressurizing/dyes/white_dye_with_iridescent_mechanism')

    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:yellow_dye_diluent`,
            amount: 1000
        },
        burnTime: 12000,
        superheated: false
    }).id(`kubejs:liquid_burning/redstone_changes/burning_yellow_dye_diluent`)

    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:refined_yellow_dye_solution`,
            amount: 1000
        },
        burnTime: 72000,
        superheated: false
    }).id(`kubejs:liquid_burning/redstone_changes/burning_refined_yellow_dye_solution`)

    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:charged_yellow_dye_solution`,
            amount: 1000
        },
        burnTime: 288000,
        superheated: false
    }).id(`kubejs:liquid_burning/redstone_changes/burning_charged_yellow_dye_solution`)

    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:blue_dye_diluent`,
            amount: 1000
        },
        burnTime: 6000,
        superheated: true
    }).id(`kubejs:liquid_burning/redstone_changes/burning_blue_dye_diluent`)

    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:refined_blue_dye_solution`,
            amount: 1000
        },
        burnTime: 36000,
        superheated: true
    }).id(`kubejs:liquid_burning/redstone_changes/burning_refined_blue_dye_solution`)

    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:charged_blue_dye_solution`,
            amount: 1000
        },
        burnTime: 144000,
        superheated: true
    }).id(`kubejs:liquid_burning/redstone_changes/burning_charged_blue_dye_solution`)


    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluid: `kubejs:charged_blue_dye_solution`,
            amount: 1000
        },
        burnTime: 144000,
        superheated: true
    }).id(`kubejs:strange_potion/custom_liquid_burning_charged_blue_dye_solution`)

    event.remove({id: 'createaddition:compacting/seed_oil'})

    let dyes = ['red_dye', 'orange_dye', 'yellow_dye', 'green_dye', 'lime_dye', 'cyan_dye', 'light_blue_dye', 'blue_dye', 'purple_dye', 'magenta_dye', 'pink_dye', 'black_dye', 'gray_dye', 'light_gray_dye', 'white_dye', 'brown_dye']

    create.sequenced_assembly(
        'kubejs:iridescent_alloy',
        'create:andesite_alloy',
        [vintageimprovements.pressurizing('create:andesite_alloy',[Fluid.of('kubejs:aggregated_molten_gold', 5),'create:andesite_alloy'])].concat(
            dyes.map(dye => {
                return create.filling('create:andesite_alloy', ['create:andesite_alloy', Fluid.of(`kubejs:charged_${dye}_solution`, 125)])})),
        'create:andesite_alloy',
        1
    ).id('kubejs:sequenced_assembly/redstone_changes/iridescent_alloy_from_andesite')
    event.remove({id:'minecraft:ender_eye'})
    event.remove({id: 'create_dd:mixing/chromatic_compound'})
    vintageimprovements.pressurizing(
        [
            'create_dd:chromatic_compound',
            'kubejs:iridescent_mechanism',
            Fluid.of('minecraft:water', 1000)
        ],
        [
            'kubejs:iridescent_mechanism',
            '16x create:powdered_obsidian',
            'create:polished_rose_quartz',
            'kubejs:iridescent_alloy',
            'create_dd:polished_spectral_ruby',
            Fluid.of('kubejs:charged_purple_dye_solution', 125),
            Fluid.of('kubejs:iridescent_concentrate', 1000)
        ]
    ).superheated().secondaryFluidInput(1).secondaryFluidOutput(0).id('kubejs:pressurizing/redstone_changes/chromatic_compound')

    // event.replaceInput({id:'create_dd:mixing/mithril_ingot'}, 'create_dd:glowberry_milkshake', 'kubejs:charged_lime_dye_solution')
    event.remove({id:'create_dd:mixing/mithril_ingot'})
    create.mixing(
        'create_dd:mithril_ingot',
        [
            'create_dd:steel_ingot',
            'create_dd:bronze_ingot',
            'create_dd:chromatic_compound',
            'create:experience_nugget',
            Fluid.of('kubejs:charged_lime_dye_solution', 500)
        ]
    ).superheated().processingTime(90).id('kubejs:mixing/redstone_changes/mithril_ingot')
    event.replaceInput({id: 'beyonddimensions:unstable_space_time_fragment'},
        'tnt', 'create_dd:mithril_nugget'
    )
    event.replaceInput({id: 'beyonddimensions:unstable_space_time_fragment'},
        'nether_star', 'create_dd:experience_mass'
    )
    event.replaceInput({id: 'beyonddimensions:net_creater'},
        'netherite_ingot', 'create_dd:stargaze_singularity'
    )

    create.deploying(
        'milk_bucket',
        [
            'bucket',
            'createaddition:biomass'
        ]
    ).id('kubejs:deploying/milk_bucket')

    vintageimprovements.hammering(
        'kubejs:obsidian_sheet',
        'kubejs:obsidian_ingot', 10
    ).id('kubejs:hammering/obsidian_sheet')

    create.cutting(
        '2x kubejs:obsidian_rod',
        'kubejs:obsidian_ingot'
    ).id('kubejs:cutting/obsidian_rod')

    create.cutting(
        '2x kubejs:obsidian_wire',
        'kubejs:obsidian_sheet'
    ).id('kubejs:cutting/obsidian_wire')

    event.shaped(
        'kubejs:obsidian_ingot',
        [
            'nnn',
            'nnn',
            'nnn'
        ],
        {
            n: 'kubejs:obsidian_nugget'
        }
    )

    event.shapeless(
        '9x kubejs:obsidian_nugget',
        [
            'kubejs:obsidian_ingot'
        ]
    )

    event.remove({id: 'unify:tarnished_gold'})
    create.mixing(
        [
            '2x unify:tarnished_gold'
        ],
        [
            'minecraft:copper_ingot',
            '3x minecraft:gold_ingot',
            'minecraft:quartz'
        ]
    )
})