Ext.define("Neoceres.model.TableBooking", {
	extend : "Ext.data.Model",

	config : {
		fields : [ {
			name : "ID",
			type : "integer"
		}, {
			name : "TentativeTime",
			type : "date"
		}, {
			name : "BookingDate",
			type : "date"
		}, {
			name : "PartySize",
			type : "integer"
		}, {
			name : "SpecialInstructions",
			type : "string"
		}, {
			name : "CancelComments",
			type : "string"
		}, {
			name : "CustomerID",
			type : "integer"
		}, {
			name : "BranchID",
			type : "integer"
		}, {
			name : "TableID",
			type : "integer"
		}, {
			name : "CanceleByUID",
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
				tablename : 'TableBooking',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}
});