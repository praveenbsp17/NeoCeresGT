Ext.define("Neoceres.store.RecipeObject", {
	extend : "Ext.data.Store",

	requires : [ "Neoceres.model.RecipeObject" ],

	config : {
		model : "Neoceres.model.RecipeObject"
	}
});