Ext.define("Neoceres.model.Airhostess", {
	extend : "Ext.data.Model",

	config : {
		fields : [ {
			name : "ID",
			type : "integer"
		}, {
			name : "TableID",
			type : "integer"
		}, {
			name : "EmployeeID",
			type : "integer"
		}, {
			name : "OrderID",
			type : "integer"
		}, {
			name : "CustomerID",
			type : "integer"
		}, {
			name : "TableStatus",
			type : "integer"
		}, {
			name : "WaterStatus",
			type : "integer"
		}, {
			name : "AssistanceStatus",
			type : "integer"
		}, {
			name : "OrderreadyStatus",
			type : "integer"
		}, {
			name : "BillGeneratedStatus",
			type : "integer"
		}, {
			name : "BillRequestedStatus",
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
				tablename : 'Airhostess',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}
});