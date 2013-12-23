Ext.define("Neoceres.store.TableBooking", {
	extend : "Ext.data.Store",

	requires : [ "Neoceres.model.TableBooking" ],

	config : {
		model : "Neoceres.model.TableBooking"
	}

});