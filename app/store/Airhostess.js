Ext.define("Neoceres.store.Airhostes", {
	extend : "Ext.data.Store",

	reuires : [ "Neoceres.model.Airhostess" ],

	config : {
		model : "Neoceres.model.Airhostess"
	}
});