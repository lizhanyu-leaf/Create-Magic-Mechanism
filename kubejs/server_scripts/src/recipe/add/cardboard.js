ServerEvents.recipes(event => { 

    const { create, vintageimprovements } = event.recipes

    create.sequenced_assembly(
        'kubejs:cardboard_mechanism',
        'create:cardboard',
        [
            vintageimprovements.vibrating('create:cardboard', 'create:cardboard'),
            vintageimprovements.curving('create:cardboard', 'create:cardboard', 1),
            create.pressing('create:cardboard', 'create:cardboard')
        ],
        'create:cardboard',
        1
    ).id('kubejs:cardboard_mechanism')

    vintageimprovements.vibrating(
        'kubejs:pack',
        'kubejs:cardboard_mechanism'
    ).id('kubejs:pack')

})