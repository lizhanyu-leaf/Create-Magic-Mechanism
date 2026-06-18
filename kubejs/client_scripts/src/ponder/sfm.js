// Ponder.registry(event => {
//     event.create(['sfm:manager']).scene('getting_started', 'What is Super Factory Manager?', 
//         (scene, util) => {
//             scene.showStructure()

//             scene.idle(20)
            
//             scene.world.showSection([2, 1, 1], Direction.DOWN)
//             scene.world.setBlock(util.grid.at(2, 1, 2), 'sfm:manager', true)

//             scene
//                 .text(45, 'You can use it to control your factory, or to make your factory do things.', [2.5, 2.5, 2.5])
//                 .colored(PonderPalette.WHITE)

//             scene.idle(55)

//             scene.world.setBlock(util.grid.at(4, 1, 4), 'create_connected:item_silo', true)
//             scene.world.showSection([4, 1, 4], Direction.DOWN)

//             scene.world.setBlock(util.grid.at(4, 1, 2), 'create:fluid_tank', true)
//             scene.world.showSection([4, 1, 3], Direction.DOWN)

//             scene.world.setBlock(util.grid.at(4, 1, 0), 'createaddition:modular_accumulator', true)
//             scene.world.showSection([4, 1, 2], Direction.DOWN)

//             scene.idle(10)

//             // 支持多资源传输
//             scene
//                 .text(60, 'The Super Factory Manager supports item, fluid, and energy transfer all in one network.', [2.5, 2.5, 2.5])
//                 .colored(PonderPalette.WHITE)
//                 .attachKeyFrame()
            
//             scene.idle(70)

//             scene
//                 .text(60, 'And it is faster and has lower latency than most other logistics mods.', [2.5, 2.5, 2.5])
//                 .colored(PonderPalette.WHITE)
//     })
// })