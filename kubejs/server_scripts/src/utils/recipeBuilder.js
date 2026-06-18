// /**
//  * 定义序列组装处理类型
//  * @typedef {'create:compacting' | 'create:mixing' | 'create:filling' | 'create:deploying' | 'vintageimprovements:vibrating'
//  *  | 'vintageimprovements:vacuumizing', 'vintageimprovements:pressurizing' | 'vintageimprovements:curving'
//  *  | 'vintageimprovements:laser_cutting'} SuppotSequencedAssemblyRecipe
//  */

/**
 * @param {string} file_id 
 * @param {string} id 
 * @param {Internal.InputItem_} inputItem 
 * @param {Internal.OutputItem_} outputItems 
 * @returns SquencedAssemblyRecipeBuilder 实例
 */
function SequencedAssemblyRecipeBuilder(file_id, id, inputItem, outputItems) {
    if (!this instanceof SequencedAssemblyRecipeBuilder) {
        return new SequencedAssemblyRecipeBuilder()
    }
    this.file_id = file_id
    this.recipe_id = id
    this.inputItem = inputItem
    this.outputItems = outputItems
}

/**
 * 定义序列组装处理类型
 * @typedef {'create:compacting' | 'create:mixing' | 'create:filling' | 'create:deploying' | 'vintageimprovements:vibrating'
 *  | 'vintageimprovements:vacuumizing', 'vintageimprovements:pressurizing' | 'vintageimprovements:curving'
 *  | 'vintageimprovements:laser_cutting'} SuppotSequencedAssemblyRecipe
 * 
 * 
 */
SequencedAssemblyRecipeBuilder.prototype.add_step = function(step_id, outputItems, inputItems) {

}


global.recipeBuilder = {
    
    /**
     * 
     * @param {string} file_id 
     * @param {string} id 
     * @param {Internal.InputItem_} inputItem 
     * @param {Internal.OutputItem_} outputItems 
     * @returns {SequencedAssemblyRecipeBuilder} 序列组装的Builder
     */
    createSequencedAssemblyRecipe : function(file_id, id, inputItem, outputItems) {
        return new SequencedAssemblyRecipeBuilder(file_id, id, inputItem, outputItems)
    }

}