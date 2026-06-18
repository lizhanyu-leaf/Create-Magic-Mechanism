JEIAddedEvents.registerRecipeCatalysts(event => {
 
    const { data } = event
    const { jeiHelpers } = data
 
    let chargingTypeId = ResourceLocation.fromNamespaceAndPath('create', 'charging')
    let recipeType = jeiHelpers.getRecipeType(chargingTypeId).get()
 
    data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
        (Item.of('create:encased_fan').setHoverName(Component.translate('recipe.kubejs.charging.catalysts').italic(false)), recipeType)
})

JEIAddedEvents.registerRecipes(event => {
 
    let freezingTypeId = new ResourceLocation('create', 'charging')
    let recipeBuilder = event.custom(freezingTypeId)
    
    //'create:iron_sheet': 'kubejs:charging_iron_sheet'
    // 添加冷冻配方
    recipeBuilder.add({
        input: 'create:iron_sheet',
        output: 'kubejs:charging_iron_sheet'
    })
})

JEIAddedEvents.registerCategories(event => {
 
    const { data } = event
    const { jeiHelpers } = data
    const { guiHelper } = jeiHelpers
 
    event.custom('create:charging', category => {
        category.title(Component.translate('recipe.kubejs.charging'))
        category.setWidth(178)
        category.setHeight(72)
        category.background(guiHelper.createBlankDrawable(0, 0))
 
        category.iconSupplier(() => {
            return new $DoubleItemIcon(
                () => Item.of('create:propeller'),
                () => Item.of('minecraft:redstone')
            )
        })
 
        category.handleLookup((layoutBuilder, recipe, focuses) => {
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 21, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.input)
 
            layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 141, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.output)
        })
 
        category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
 
            $AllGuiTextures.JEI_SHADOW.render(graphics, 46, 29)
            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 39)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 51)
 
            let matrixStack = graphics.pose()
 
            matrixStack.pushPose()
            matrixStack.translate(56, 33, 0)
            matrixStack.mulPose($Axis.XP.rotationDegrees(-12.5))
            matrixStack.mulPose($Axis.YP.rotationDegrees(22.5))
 
            $AnimatedKinetics["defaultBlockElement(dev.engine_room.flywheel.lib.model.baked.PartialModel)"]
                ($AllPartialModels.ENCASED_FAN_INNER)
                    .rotateBlock(180, 0, $AnimatedKinetics.getCurrentAngle() * 16)
                    .scale(24.0)
                    .render(graphics)
 
            $AnimatedKinetics.defaultBlockElement(Block.getBlock('create:encased_fan').defaultBlockState())
                .rotateBlock(0, 180, 0)
                .atLocal(0.0, 0.0, 0.0)
                .scale(24.0)
                .render(graphics)
 
            let redstoneDiluentState = Block.getBlock('kubejs:redstone_diluent').defaultBlockState()
 
            $AnimatedKinetics.defaultBlockElement(redstoneDiluentState)
                .rotateBlock(0, 180, 0)
                .atLocal(0.0, 0.0, 2.0)
                .scale(24.0)
                .render(graphics)
 
            matrixStack.popPose()
        })
    })
})