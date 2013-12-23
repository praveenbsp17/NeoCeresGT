Ext.define("Neoceres.store.Role", {
	extend : "Ext.data.Store",

	requires : [ "Neoceres.model.Store" ],

	config : {
		model : "Neoceres.model.Store"
	}
});