Ext.define("Neoceres.model.Branch",{
	extend: "Ext.data.Model",

	config: {
		idProperty: "id",
		fields: [
			{ name: "ID", type: "integer" }, //need an id field else model.phantom won't work correctly (reverse actually)
			{ name: "RestaurantID" , type: "int" },
			{ name: "BranchName", type: "string" },
			{ name: "ImageUrl", type: "string" },
			{ name: "Address1", type: "string" },
			{ name: "Address2", type: "string" },
			{ name: "City", type: "string" } ,
			{ name: "State", type: "string" },
			{ name: "Zipcode", type: "integer" },
			{ name: "Phone1", type: "integer" },
			{ name: "Phone2", type: "integer" },
			{ name: "Email", type: "string" } ,
			{ name: "Website", type: "string" },
			{ name: "ContactPerson", type: "string" },
			{ name: "DailyStartTime", type: "DATE" },
			{ name: "DailyEndTime", type: "DATE" } ,
			{ name: "BreakfastStartTime", type: "DATE" },
			{ name: "BreakfastEndTime", type: "DATE" },
			{ name: "LunchStartTime", type: "DATE" } ,
			{ name: "LunchEndTime", type: "DATE" }, 
			{ name: "DinnerStartTime", type: "DATE" } ,
			{ name: "DinnerEndTime", type: "DATE" } ,
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
		        tablename: 'Branch',
		        dbConn: Neoceres.util.InitSQLite.getConnection()
		      }
		    }
	/*	validations: [
			{ type: "presense", field: "id" },
			{ type: "presense", field: "name" }
		] */
	}
});