Ext.define("Neoceres.model.CustomerFeedback",{
	extend: "Ext.data.Model",

	config: {
		idProperty: "id",
		fields: [
			{ name: "ID", type: "integer" }, //need an id field else model.phantom won't work correctly (reverse actually)
			{ name: "DataObject" , type: "BLOB" },
			{ name: "ObjectType", type: "string" },
			{ name: "TargetTablet", type: "int" },
			{ name: "AdditionalFeedback", type: "string" },
			{ name: "Tags", type: "string" },
			{ name: "Taste", type: "int" } ,
			{ name: "Presentation", type: "int" },
			{ name: "Service", type: "integer" },
			{ name: "FoodSelection", type: "integer" },
			{ name: "BeverageSelection", type: "integer" },
			{ name: "BeveragesPresentation", type: "int" } ,
			{ name: "BeveragesValueForMoney", type: "int" } ,
			{ name: "BeveragesChoice", type: "int" } ,
			{ name: "BranchID", type: "int" },
			{ name: "CustomerUID", type: "int" }, 
			{ name: "IsActive", type: "int" } ,
			{ name: "CreatedByUID", type: "int" },
			{ name: "CreatedDate", type: "DATE" } ,
			{ name: "ModifiedByUID", type: "int" } ,
			{ name: "ModifiedDate", type: "DATE" },
			{ name: "KitchenBar", type: "int" } ,
			
			
			/*{ name: "id", type: "integer" }, //need an id field else model.phantom won't work correctly
			{ name: "name", type: "string" }*/
		],
		proxy: {
		      type: 'sqlitestorage',
		      dbConfig: {
		        tablename: 'CustomerFeedback',
		        dbConn: Neoceres.util.InitSQLite.getConnection()
		      }
		    }
	/*	validations: [
			{ type: "presense", field: "id" },
			{ type: "presense", field: "name" }
		] */
	}
});