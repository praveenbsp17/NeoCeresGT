Ext.define("Neoceres.model.FloorPlan", {
	extend : "Ext.data.Model",

	config : {
		fields : [ {
			name : "ID",
		}, {
			name : "Position",
			type : "string"
		}, {
			name : "BranchID",
			type : "integer"
		}, {
			name : "TableGroupID",
			type : "integer"
		}, {
			name : "TableID",
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
		}, ],

		proxy : {
			type : 'sqlitestorage',
			dbConfig : {
				tablename : 'FloorPlan',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}
});