ServerEvents.recipes(event => {
    const {create, createoreexcavation, 
        vintageimprovements, minecraft, kubejs} = event.recipes

    minecraft.crafting_shaped(
        'createaddition:creative_energy',
        [
            'sms',
            'cmc',
            'afe'
        ],
        {
            s: 'createaddition:copper_spool',
            m: 'createaddition:modular_accumulator',
            c: 'createaddition:connector',
            a: 'createaddition:alternator',
            f: 'create:shaft',
            e: 'createaddition:electric_motor'
        }
    ).id('kubejs/crafting/creative/creative_energy')
})