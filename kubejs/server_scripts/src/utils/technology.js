global.technology = {
    /**
     * 
     * @param {string} id 达成的科技的Id
     * @param {Internal.MinecraftServer} server 服务端对象
     */
    grant_technology: function(id, server) { 
        if (TechnologyTools.isActive(id)) return
        TechnologyTools.setActive(id, true)
        TechnologyTools.applyTechnology(server, true)
    }
}