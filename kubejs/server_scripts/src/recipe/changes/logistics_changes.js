ServerEvents.recipes(event => {
    const {create, vintageimprovements, createoreexcavation, minecraft} = event.recipes

    event.remove({id:'create:crafting/kinetics/chain_conveyor'})

    event.remove({id:'create:crafting/logistics/package_frogport'})
    create.sequenced_assembly(
        'create:package_frogport',
        'create:item_vault', 
        [
            create.deploying(
                'kubejs:incomplete_andesite_mechine',
                [
                    'kubejs:incomplete_andesite_mechine',
                    'kubejs:slime_mechanism'
                ]
            ),

            create.deploying(
                'kubejs:incomplete_andesite_mechine',
                [
                    'kubejs:incomplete_andesite_mechine',
                    'create_dd:integrated_circuit'
                ]
            ),

            create.deploying(
                'kubejs:incomplete_andesite_mechine',
                [
                    'kubejs:incomplete_andesite_mechine',
                    'create_dd:andesite_sheet'
                ]
            )
        ],
        'kubejs:incomplete_andesite_mechine', 1
    ).id('kubejs:sequenced_assembly/logistics_changes/package_frogport')
})