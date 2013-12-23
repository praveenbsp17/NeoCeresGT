Ext.define("Neoceres.model.Recipe", {
	extend : "Ext.data.Model",

	config : {
		fields : [ {
			name : "ID",
			type : "integer"
		}, {
			name : "RecipeName",
			type : "string"
		}, {
			name : "BranchID",
			type : "integer"
		}, {
			name : "CalorificValue",
			type : "string"
		}, {
			name : "Method",
			type : "string"
		}, {
			name : "PreperationTime",
			type : "integer"
		}, {
			name : "CookingTime",
			type : "integer"
		}, {
			name : "TotoalTime",
			type : "integer"
		}, {
			name : "Spicy",
			type : "integer"
		}, {
			name : "SubRecipe",
			type : "boolean"
		}, {
			name : "ApproximateCost",
			type : "number"
		}, {
			name : "TotalCost",
			type : "number"
		}, {
			name : "RecipeDescription",
			type : "string"
		}, {
			name : "Notes",
			type : "string"
		}, {
			name : "NutritionlValue",
			type : "string"
		}, {
			name : "Tags",
			type : "string"
		}, {
			name : "RecipeCategoryID",
			type : "integer"
		}, {
			name : "YieldUnitID",
			type : "integer"
		}, {
			name : "ServingsUnitID",
			type : "integer"
		}, {
			name : "ServingSizeUnitID",
			type : "integer"
		}, {
			name : "IsActive",
			type : "boolean"
		}, {
			name : "CreatedByUID",
			type : "integer"
		}, {
			name : "CreatedDate",
			type : "date"
		}, {
			name : "ModifiedByUID",
			type : "integer"
		}, {
			name : "ModifiedDate",
			type : "date"
		} ],

		proxy : {
			type : 'sqlitestorage',
			dbConfig : {
				tablename : 'Recipe',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}

});