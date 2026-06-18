ServerEvents.recipes(event => { 

    const { create } = event.recipes
    
    function creative_wood(output) { 
        create.deploying(
            '2x ' + output,
            [
                output,
                'kubejs:creative_wood'
            ]
        ).keepHeldItem().id(`kubejs:creative_wood/deploying_${output.replace(':', '_')}_from_creative`)
    }
    creative_wood('minecraft:stick')
    creative_wood('kubejs:wood_set')

})