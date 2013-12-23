Ext.define("Neoceres.model.OrderInstruction", {
	extend : "Ext.data.Model",

	config : {
		fields : [ {
			name : "ID",
			type : "integer"
		}, {
			name : "IngredientQTY",
			type : "number"
		}, {
			name : "SpecialInstructions",
			type : "string"
		}, {
			name : "IngredientID",
			type : "integer"
		}, {
			name : "OrderDetailID",
			type : "integer"
		}, {
			name : "OrderID",
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
				tablename : 'OrderInstruction',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}
});