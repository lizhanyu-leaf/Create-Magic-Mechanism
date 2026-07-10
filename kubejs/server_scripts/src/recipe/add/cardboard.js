ServerEvents.recipes(event => { 

    const { create, vintageimprovements } = event.recipes

    create.sequenced_assembly(
        'kubejs:paper_mechanism',
        'create:cardboard',
        [
            vintageimprovements.vibrating('create:cardboard', 'create:cardboard'),
            vintageimprovements.curving('create:cardboard', 'create:cardboard', 1),
            create.pressing('create:cardboard', 'create:cardboard')
        ],
        'create:cardboard',
        1
    ).id('kubejs:paper_mechanism')

    vintageimprovements.vibrating(
        'kubejs:pack',
        'kubejs:paper_mechanism'
    ).id('kubejs:pack')

})