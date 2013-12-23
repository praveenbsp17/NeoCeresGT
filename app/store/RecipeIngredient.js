Ext.define("Neoceres.store.RecipeIngredient", {
	extend : "Ext.data.Store",

	requires : [ "Neoceres.model.RecipeIngredient" ],

	config : {
		model : "Neoceres.model.RecipeIngredient"
	}
});