Ext.define("Neoceres.model.Customer",{
	extend: "Ext.data.Model",

	config: {
		idProperty: "id",
		fields: [
			{ name: "ID", type: "integer" }, //need an id field else model.phantom won't work correctly (reverse actually)
			{ name: "RestaurantID" , type: "int" },
			{ name: "Fname", type: "string" },
			{ name: "Lname", type: "string" },
			{ name: "Dob", type: "DATE" },
			{ name: "Phone1", type: "integer" },
			{ name: "Phone2", type: "integer" },
			{ name: "Email", type: "string" } ,
			{ name: "Gender", type: "string" },
			{ name: "SpouseName", type: "string" },
			{ name: "SpouseDOB", type: "DATE" },
			{ name: "NoOfChildren", type: "DATE" } ,
			{ name: "AnniversaryDate", type: "string" },
			{ name: "Corporate", type: "integer" },
			{ name: "CorporateAddress", type: "string" } ,
			{ name: "MaritalStatus", type: "string" }, 
			{ name: "Tags", type: "string" } ,
			{ name: "IsActive", type: "int" } ,
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
		        tablename: 'Customer',
		        dbConn: Neoceres.util.InitSQLite.getConnection()
		      }
		    }
	/*	validations: [
			{ type: "presense", field: "id" },
			{ type: "presense", field: "name" }
		] */
	}
});