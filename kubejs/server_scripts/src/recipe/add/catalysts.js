ServerEvents.recipes(event => {

    const { create, vintageimprovements } = event.recipes

    create.sequenced_assembly(
        'kubejs:catalyst_pedestal',
        'kubejs:bedrock_sheet',
        [
            vintageimprovements.curving('kubejs:incomplete_catalyst_pedestal', 'kubejs:incomplete_catalyst_pedestal')
                .head('create:blaze_cake'),

            create.deploying('kubejs:incomplete_catalyst_pedestal', ['kubejs:incomplete_catalyst_pedestal', 'kubejs:cryogenic_powder']),

            vintageimprovements.laser_cutting('kubejs:incomplete_catalyst_pedestal', 'kubejs:incomplete_catalyst_pedestal', 1000000, 10000)
        ],
        'kubejs:incomplete_catalyst_pedestal', 1
    ).id('kubejs:catalyst/catalyst_pedestal')

    function to_catalyst(mechanism, catalyst) {
        create.deploying(
            catalyst,
            [
                'kubejs:catalyst_pedestal',
                mechanism
            ]
        ).id('kubejs:to_catalyst/' + mechanism.split(':')[1])
    }

    to_catalyst('kubejs:blaze_mechanism', 'kubejs:catalyst_blaze')

})