Ext.define("Neoceres.model.GlobalObject1",{
	extend: "Ext.data.Model",

	config: {
		idProperty: "id",
		fields: [
			{ name: "ID", type: "integer" }, //need an id field else model.phantom won't work correctly (reverse actually)
			{ name: "UserID" , type: "integer" },
			{ name: "CustomerID", type: "integer" },
			{ name: "BranchID", type: "integer" },
			{ name: "RestuarantID", type: "integer" },
			{ name: "TableID", type: "integer" },
			{ name: "OrderID", type: "integer" } ,
			{ name: "TakeawayOrderID", type: "integer" },
			{ name: "LoginDateTime", type: "DATE" },
			{ name: "WebServiceURL", type: "TEXT" },
			{ name: "WebServiceNameSpace", type: "TEXT" },
			{ name: "RestaurantName", type: "TEXT" } ,
			{ name: "SoapAction", type: "TEXT" } ,
			{ name: "MenuItemName", type: "TEXT" } ,
			{ name: "RecipeID", type: "int" }, 
			{ name: "MenuID", type: "int" } ,
			{ name: "SubMenuID", type: "int" },
			{ name: "MenuItemID", type: "int" } ,
			{ name: "Type", type: "TEXT" } ,
			{ name: "Price", type: "int" } 			
			/*{ name: "id", type: "integer" }, //need an id field else model.phantom won't work correctly
			{ name: "name", type: "string" }*/
		],
		proxy: {
		      type: 'sqlitestorage',
		      dbConfig: {
		        tablename: 'GlobalObject1',
		        dbConn: Neoceres.util.InitSQLite.getConnection()
		      }
		    }
	/*	validations: [
			{ type: "presense", field: "id" },
			{ type: "presense", field: "name" }
		] */
	}
});