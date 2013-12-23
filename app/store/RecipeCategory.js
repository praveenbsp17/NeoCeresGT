ext.define("Neoceres.store.RecipeCategory", {
	extend : "Ext.data.Store",

	requires : [ "Neoceres.model.RecipeCategory" ],

	config : {
		model : "Neoceres.model.RecipeCategory"
	}
});