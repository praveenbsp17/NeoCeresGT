Ext.define("Neoceres.model.MenuitemForcemodMapping", {
	extend : "Ext.data.Model",
	config : {
		idProperty : "id",
		fields : [ {
			name : "ID",
			type : "integer"
		}, {
			name : "MenuitemID",
			type : "integer"
		}, {
			name : "ForceModName",
			type : "string"
		}, {
			name : "ForceModCost",
			type : "number"
		}, {
			name : "ForcemodID",
			type : "integer"
		}, {
			name : "Level",
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
				tablename : 'MenuitemForcemodMapping',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}

});