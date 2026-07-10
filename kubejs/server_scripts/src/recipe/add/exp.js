ServerEvents.recipes(event => {

    const { create, vintageimprovements } = event.recipes

    create.sequenced_assembly(
        'kubejs:experience_mechanism',
        'create:experience_block',
        [
            vintageimprovements.vibrating(
                'kubejs:incomplete_experience_mechanism',
                'kubejs:incomplete_experience_mechanism'
            ),

            vintageimprovements.laser_cutting(
                'kubejs:incomplete_experience_mechanism',
                'kubejs:incomplete_experience_mechanism',
                500000,
                2500
            ),

            create.filling(
                'kubejs:incomplete_experience_mechanism',
                [
                    'kubejs:incomplete_experience_mechanism',
                    Fluid.of('kubejs:slime', 250)
                ]
            ),

            create.deploying(
                'kubejs:incomplete_experience_mechanism',
                ['kubejs:incomplete_experience_mechanism', 'create_sa:heap_of_experience']
            ),

            create.filling(
                'kubejs:incomplete_experience_mechanism',
                [
                    'kubejs:incomplete_experience_mechanism',
                    Fluid.of('kubejs:coolant', 150)
                ]
            )
        ],
        'kubejs:incomplete_experience_mechanism',
        1
    )

})