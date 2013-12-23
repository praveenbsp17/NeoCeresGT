Ext.define("Neoceres.store.MenuitemForcemodMapping", {
	extend : "Ext.data.Store",

	requires : [ "Neoceres.model.MenuitemForcemodMapping" ],

	config : {
		model: "Neoceres.model.MenuitemForcemodMapping",
		autoLoad: true,
	    storeId: 'MenuitemForcemodMapping'
	}
});