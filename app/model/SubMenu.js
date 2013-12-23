Ext.define("Neoceres.model.SubMenu", {
	extend : "Ext.data.Model",

	config : {
		fields : [ {
			name : "ID",
			type : "integer"
		}, {
			name : "SubmenuName",
			type : "string"
		}, {
			name : "SortPositionNumber",
			type : "integer"
		}, {
			name : "SubmenuDescription",
			type : "string"
		}, {
			name : "Tags",
			type : "string"
		}, {
			name : "DateSpecific",
			type : "boolean"
		}, {
			name : "StartDate",
			type : "date"
		}, {
			name : "EndDate",
			type : "date"
		}, {
			name : "BranchID",
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
				tablename : 'SubMenu',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}

});