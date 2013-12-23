Ext.define("Neoceres.model.RecipeCategory", {
	extend : "Ext.data.Model",

	config : {
		fields : [ {
			name : "ID",
			type : "integer"
		}, {
			name : "CategoryName",
			type : "string"
		}, {
			name : "BranchID",
			type : "integer"
		}, {
			name : "CategoryDescription",
			type : "string"
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
				tablename : 'RecipeCategory',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}
});