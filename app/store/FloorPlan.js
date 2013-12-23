Ext.define("Neoceres.store.FloorPlan", {
	extend : "Ext.data.Store",

	requires : [ "Neoceres.model.FloorPlan" ],

	config : {
		model : "Neoceres.model.FloorPlan"
	}
});