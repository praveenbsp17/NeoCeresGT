Ext.define("Neoceres.model.RecipeObject", {
	extend : "Ext.data.Model",

	config : {
		fields : [ {
			name : "ID",
			type : "integer"
		}, {
			name : "ObjectURL",
			type : "string"
		}, {
			name : "BranchID",
			type : "integer"
		}, {
			name : "RecipeName",
			type : "string"
		}, {
			name : "ObjectType",
			type : "string"
		}, {
			name : "Notes",
			type : "string"
		}, {
			name : "Tags",
			type : "string"
		}, {
			name : "TargetTablet",
			type : "integer"
		}, {
			name : "recipeID",
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
				tablename : 'RecipeObject',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}
});