Ext.define("Neoceres.store.OrderInstruction", {
	extend : "Ext.data.Store",

	requires : [ "Neoceres.model.OrderInstruction" ],

	config : {
		model : "Neoceres.model.OrderInstruction"
	}
});