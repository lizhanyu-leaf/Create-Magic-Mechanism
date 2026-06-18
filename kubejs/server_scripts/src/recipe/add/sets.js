ServerEvents.recipes(event => { 

    const { create } = event.recipes

    /**
     * 
     * @param {InputItem_} set 
     * @param {OutputItem_[]} outputlist 
     */
    function setcutting(set, outputlist){
        outputlist.forEach((output, index) => {
            console.log(output)
            event.stonecutting(output, set).id(`kubejs:sets/stonecutting_${index}_${output.replace('x ', '_').replace(':', '_')}_from_${set.replace(':', '_')}`)
        })
    }

    setcutting(
        'kubejs:precision_mechanism_3',
        [
            '64x create:andesite_alloy',
            '16x create:cogwheel',
            '16x create:large_cogwheel'
        ]
    )
    if (global.technology.get_technology('incomplete_precision_mechanism_3_cutting_recipe')) {
        setcutting(
            'kubejs:incomplete_precision_mechanism_3',
            [
                'create:gearbox',
                'create:gearshift',
                'create_connected:encased_chain_cogwheel',
                'create:encased_chain_drive',
                'create_connected:parallel_gearbox',
                'create_connected:six_way_gearbox',
                'create_connected:brake',
                'create_connected:freewheel_clutch',
                'create_connected:centrifugal_clutch',
                'create_connected:overstress_clutch',
                'create:clutch',
                'create:redstone_link'
            ]
        )   
    }

    // setcutting(
    //     'kubejs:modern_mechanism',
    //     [
    //         '8x kubejs:wood_set',
    //         '8x create:electron_tube'
    //     ]
    // )

    setcutting(
        'create:iron_sheet',
        [
            'create:filter'
        ]
    )

    setcutting(
        'kubejs:basic_ore_set',
        [
            '4x minecraft:iron_ingot',
            '8x createaddition:iron_rod',
            '8x vintageimprovements:iron_spring',
            '4x create:iron_sheet',
            '8x createaddition:iron_wire',
            '8x vintageimprovements:small_iron_spring',
            '4x minecraft:gold_ingot',
            '8x createaddition:gold_rod',
            '8x vintageimprovements:golden_spring',
            '4x create:golden_sheet',
            '8x createaddition:gold_wire',
            '8x vintageimprovements:small_golden_spring',
            '4x minecraft:copper_ingot',
            '8x createaddition:copper_rod',
            '8x vintageimprovements:copper_spring',
            '4x create:copper_sheet',
            '8x createaddition:copper_wire',
            '8x vintageimprovements:small_copper_spring',
            '4x minecraft:redstone_block',
        ]
    )
})