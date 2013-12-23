Ext.define("Neoceres.model.MenuItemTax", {
	extend : "Ext.data.Model",

	config : {
		fields : [ {
			name : "ID",
			type : "integer"
		}, {
			name : "TaxPercentage",
			type : "number"
		}, {
			name : "MenuItemID",
			type : "integer"
		}, {
			name : "TaxID",
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
				tablename : 'MenuItemTax',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}
});