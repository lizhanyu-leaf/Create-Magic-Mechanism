ServerEvents.recipes(event => {

    const { create, vintageimprovements } = event.recipes

    create.sequenced_assembly(
        'kubejs:base_catalyst',
        'kubejs:bedrock_sheet',
        [
            vintageimprovements.curving('kubejs:incomplete_base_catalyst', 'kubejs:incomplete_base_catalyst')
                .head('create:blaze_cake'),

            create.deploying('kubejs:incomplete_base_catalyst', ['kubejs:incomplete_base_catalyst', 'kubejs:ice_powder']),

            vintageimprovements.laser_cutting('kubejs:incomplete_base_catalyst', 'kubejs:incomplete_base_catalyst', 1000000, 10000)
        ],
        'kubejs:incomplete_base_catalyst', 1
    ).id('kubejs:catalyst/base_catalyst')

    function to_catalyst(mechanism, catalyst) {
        create.deploying(
            catalyst,
            [
                'kubejs:base_catalyst',
                mechanism
            ]
        ).id('kubejs:to_catalyst/' + mechanism.split(':')[1])
    }

    to_catalyst('kubejs:blaze_mechanism', 'kubejs:catalyst_blaze')

})