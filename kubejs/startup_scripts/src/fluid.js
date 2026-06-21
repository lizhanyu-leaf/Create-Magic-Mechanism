StartupEvents.registry('fluid', event => {

    event.create('redstone_catalyst').thickTexture(0xff0000).translucent()
    event.create('redstone_diluent').thinTexture(0xff0000)

    event.create('strange_potion').thinTexture(0xcb51dd).translucent()

    event.create('gunpowder_catalyst').thickTexture(0x6c6c6c)
    event.create('gunpowder_diluent').thinTexture(0x6c6c6c)

    event.create('slime').thinTexture(0x8cd782)
    event.create('magenta_strange_potion').thinTexture(0xd33f8c)
    event.create('magic_potion').thinTexture(0x8f34ff)

    event.create('heat_lava').thickTexture(0xe65120).noBucket()
    event.create('soul_lava').thickTexture(0x01a7ac).noBucket()

    event.create('refrigerant').thinTexture(0x9afcff)

    event.create('assembly_molten_andesite_alloy').thickTexture(0x829789)
    event.create('assembly_molten_brass').thickTexture(0xfbcc68)
    event.create('assembly_molten_zinc').thickTexture(0xb9e9c1)
    event.create('assembly_molten_iron').thickTexture(0xaf8e77)
    event.create('assembly_molten_gold').thickTexture(0xfdff76)
    event.create('assembly_molten_copper').thickTexture(0xeb7e56)
    event.create('assembly_molten_diamond').thickTexture(0x5bf3e0)
    event.create('assembly_molten_stone').thickTexture(0xb5b5b5)

    // 特殊贴图
    event.create('charged_essence').translucent()
    event.create('iridescent_essence').translucent()
    event.create('smart_essence').translucent()
    event.create('sturdy_essence').translucent()
    event.create('blaze_essence').translucent()
    event.create('strong_adhesive_essence').translucent()
    event.create('arcane_essence').translucent()
    event.create('experience_essence').translucent()
    event.create('sequence_essence').translucent()

    // dyes: 'red_dye', 'orange_dye', 'yellow_dye', 'green_dye', 'lime_dye', 'cyan_dye', 'light_blue_dye', 'blue_dye', 'purple_dye', 'magenta_dye', 'pink_dye', 'black_dye', 'gray_dye', 'light_gray_dye', 'white_dye', 'black_dye', 'gray_dye', 'light_gray_dye', 'white_dye', 'brown_dye', 'green_dye', 'lime_dye', 'cyan_dye', 'light_blue_dye', 'blue_dye', 'purple_dye', 'magenta_dye', 'pink_dye', 'black_dye', 'gray_dye', 'light_gray_dye', 'white_dye', 'brown_dye'
    event.create('iridescent_concentrate').thinTexture(0xae4fa8)

    event.create('white_dye_diluent').thinTexture(0xcccccc)
    event.create('white_dye_concentrate').thickTexture(0xdddddd)
    event.create('refined_white_dye_solution').thickTexture(0xeeeeee)
    event.create('charged_white_dye_solution').thickTexture(0xffffff)

    event.create('red_dye_diluent').thinTexture(0x990000)
    event.create('red_dye_concentrate').thickTexture(0xaa0000)
    event.create('refined_red_dye_solution').thickTexture(0xcc0000)
    event.create('charged_red_dye_solution').thickTexture(0xff0000)

    event.create('orange_dye_diluent').thinTexture(0x99a500)
    event.create('orange_dye_concentrate').thickTexture(0xaaa500)
    event.create('refined_orange_dye_solution').thickTexture(0xcca500)
    event.create('charged_orange_dye_solution').thickTexture(0xffa500)

    event.create('yellow_dye_diluent').thinTexture(0x999900)
    event.create('yellow_dye_concentrate').thickTexture(0xaaaa00)
    event.create('refined_yellow_dye_solution').thickTexture(0xcccc00)
    event.create('charged_yellow_dye_solution').thickTexture(0xffff00)

    event.create('green_dye_diluent').thinTexture(0x006000)
    event.create('green_dye_concentrate').thickTexture(0x007000)
    event.create('refined_green_dye_solution').thickTexture(0x008000)
    event.create('charged_green_dye_solution').thickTexture(0x00a900)

    event.create('lime_dye_diluent').thinTexture(0x00aa00)
    event.create('lime_dye_concentrate').thickTexture(0x00cc00)
    event.create('refined_lime_dye_solution').thickTexture(0x00dd00)
    event.create('charged_lime_dye_solution').thickTexture(0x00ff00)

    event.create('cyan_dye_diluent').thinTexture(0x009999)
    event.create('cyan_dye_concentrate').thickTexture(0x00aaaa)
    event.create('refined_cyan_dye_solution').thickTexture(0x00cc99)
    event.create('charged_cyan_dye_solution').thickTexture(0x00ffff)

    event.create('light_blue_dye_diluent').thinTexture(0xadd8e6)
    event.create('light_blue_dye_concentrate').thickTexture(0xadd8e6)
    event.create('refined_light_blue_dye_solution').thickTexture(0xbbdae4)
    event.create('charged_light_blue_dye_solution').thickTexture(0xc3dde5)

    event.create('blue_dye_diluent').thinTexture(0x000099)
    event.create('blue_dye_concentrate').thickTexture(0x0000aa)
    event.create('refined_blue_dye_solution').thickTexture(0x0000cd)
    event.create('charged_blue_dye_solution').thickTexture(0x0000ff)

    event.create('purple_dye_diluent').thinTexture(0x730073)
    event.create('purple_dye_concentrate').thickTexture(0x810081)
    event.create('refined_purple_dye_solution').thickTexture(0x930093)
    event.create('charged_purple_dye_solution').thickTexture(0xa900a9)

    event.create('magenta_dye_diluent').thinTexture(0x990099)
    event.create('magenta_dye_concentrate').thickTexture(0xac00ac)
    event.create('refined_magenta_dye_solution').thickTexture(0xce00ce)
    event.create('charged_magenta_dye_solution').thickTexture(0xff00ff)

    event.create('pink_dye_diluent').thinTexture(0xffc0cb)
    event.create('pink_dye_concentrate').thickTexture(0xffc0cb)
    event.create('refined_pink_dye_solution').thickTexture(0xebc5cc)
    event.create('charged_pink_dye_solution').thickTexture(0xe6a9b3)

    event.create('black_dye_diluent').thinTexture(0x1d1d1d)
    event.create('black_dye_concentrate').thickTexture(0x1d1d1d)
    event.create('refined_black_dye_solution').thickTexture(0x1d1d1d)
    event.create('charged_black_dye_solution').thickTexture(0x1d1d1d)

    event.create('gray_dye_diluent').thinTexture(0x606060)
    event.create('gray_dye_concentrate').thickTexture(0x808080)
    event.create('refined_gray_dye_solution').thickTexture(0xa0a0a0)
    event.create('charged_gray_dye_solution').thickTexture(0xacacac)

    event.create('light_gray_dye_diluent').thinTexture(0xc0c0c0)
    event.create('light_gray_dye_concentrate').thickTexture(0xcecece)
    event.create('refined_light_gray_dye_solution').thickTexture(0xdfdfdf)
    event.create('charged_light_gray_dye_solution').thickTexture(0xe9e9e9)

    event.create('brown_dye_diluent').thinTexture(0x804000)
    event.create('brown_dye_concentrate').thickTexture(0x804000)
    event.create('refined_brown_dye_solution').thickTexture(0x804000)
    event.create('charged_brown_dye_solution').thickTexture(0x804000)

    event.create('chaotic_ore_flux').thickTexture(0xaf8e77)
})