JEIAddedEvents.registerRecipeCatalysts(event => {

    const { data } = event
    const jeiHelpers = data.getJeiHelpers()

    let fireChangesId = ResourceLocation.fromNamespaceAndPath('kubejs', 'fire_changes')
    let recipeType = jeiHelpers.getRecipeType(fireChangesId).get()

    data.addRecipeCatalyst
    data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
        (Item.of('minecraft:lava_bucket').setHoverName(Component.translate("recipe.kubejs.lava_transformation_recipe.catalysts")), recipeType)

})

JEIAddedEvents.registerRecipes(event => {

    let fireChangesId = ResourceLocation.fromNamespaceAndPath('kubejs', 'fire_changes')
    let recipeBuilder = event.custom(fireChangesId)

    Object.keys(global.fire_changes).forEach(input => {
        recipeBuilder.custom({
            input: input,
            output: global.fire_changes[input]
        })
    })

})
JEIAddedEvents.registerCategories(event => {

    const { data } = event
    const jeiHelpers = data.getJeiHelpers()
    const guiHelper = jeiHelpers.getGuiHelper()

    event.custom('kubejs:fire_changes', category => {

        category.title(Component.translate("recipe.kubejs.lava_transformation_recipe"))
        category.setWidth(178)
        category.setHeight(72)
        category.background(guiHelper.createBlankDrawable(0, 0))

        category.iconSupplier(() => {
            return new $DoubleItemIcon(
                () => Item.of('minecraft:lava_bucket'),
                () => Item.of('minecraft:blaze_powder')
            )
        })

        category.handleLookup((layoutBuilder, recipe, focuses) => {

            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 36, 6)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.input)

            
            layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 137, 38)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.output)
        })

        category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
            $AllGuiTextures.JEI_SHADOW.render(graphics, 42, 47)
            $AllGuiTextures.JEI_DOWN_ARROW.render(graphics, 54, 12)
            $AllGuiTextures.JEI_ARROW.render(graphics, 89, 42)

            let matrixStack = graphics.pose()

            matrixStack.pushPose()
            matrixStack.translate(54, 51, 100)
            matrixStack.mulPose($Axis.XP.rotationDegrees(-15.5))
            matrixStack.mulPose($Axis.YP.rotationDegrees(22.5))
            const scale = 20

            try {
                $AnimatedKinetics.defaultBlockElement(Block.getBlock('minecraft:lava').defaultBlockState())
                    .scale(scale)
                    .render(graphics)
            } catch (e) {
                
            }
            

            matrixStack.popPose()
        })

    })

})