Ext.define("Neoceres.model.RecipeIngredient", {
	extend : "Ext.data.Model",

	config : {
		fields : [ {
			name : "ID",
			type : "integer"
		}, {
			name : "Quantity",
			type : "number"
		}, {
			name : "Required",
			type : "boolean"
		}, {
			name : "IngredientID",
			type : "integer"
		}, {
			name : "recipeID",
			type : "integer"
		}, {
			name : "UnitID",
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
				tablename : 'RecipeIngredient',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}
});