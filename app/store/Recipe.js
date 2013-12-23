Ext.define("Neoceres.store.Recipe", {
	extend : "Ext.data.Store",

	requires : [ "Neoceres.model.Recipe" ],

	config : {
		model : "Neoceres.model.Recipe"
	}
});