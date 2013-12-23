Ext.define("Neoceres.model.Restaurant",{
	extend: "Ext.data.Model",

	config: {
		idProperty: "id",
		fields: [
			{ name: "ID", type: "integer" }, //need an id field else model.phantom won't work correctly (reverse actually)
			{ name: "RestaurantName" , type: "string" },
			{ name: "Address1", type: "string" },
			{ name: "Address2", type: "string" },
			{ name: "City", type: "string" } ,
			{ name: "State", type: "string" },
			{ name: "Zipcode", type: "integer" },
			{ name: "Phone1", type: "integer" },
			{ name: "Phone2", type: "integer" },
			{ name: "Email", type: "string" } ,
			{ name: "Website", type: "string" } ,
			{ name: "IsActive", type: "integer" } ,
			{ name: "CreatedByUID", type: "int" },
			{ name: "CreatedDate", type: "DATE" } ,
			{ name: "ModifiedByUID", type: "int" } ,
			{ name: "ModifiedDate", type: "DATE" }
			
			/*{ name: "id", type: "integer" }, //need an id field else model.phantom won't work correctly
			{ name: "name", type: "string" }*/
		],
		proxy: {
		      type: 'sqlitestorage',
		      dbConfig: {
		        tablename: 'Restaurant',
		        dbConn: Neoceres.util.InitSQLite.getConnection()
		      }
		    }
	/*	validations: [
			{ type: "presense", field: "id" },
			{ type: "presense", field: "name" }
		] */
	}
});