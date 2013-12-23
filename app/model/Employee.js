Ext.define("Neoceres.model.Employee",{
	extend: "Ext.data.Model",

	config: {
		idProperty: "id",
		fields: [
			{ name: "ID", type: "integer" }, //need an id field else model.phantom won't work correctly (reverse actually)
			{ name: "EmployeeName" , type: "string" },
			{ name: "Gender", type: "string" },
			{ name: "Dob", type: "DATE" },
			{ name: "Address1", type: "string" },
			{ name: "Address2", type: "string" },
			{ name: "City", type: "string" } ,
			{ name: "State", type: "string" },
			{ name: "Zipcode", type: "integer" },
			{ name: "Phone1", type: "integer" },
			{ name: "Phone2", type: "integer" },
			{ name: "Email", type: "string" } ,
			{ name: "Username", type: "string" } ,
			{ name: "Password", type: "string" } ,
			{ name: "MaritalStatus", type: "string" }, 
			{ name: "Ssn", type: "string" } ,
			{ name: "Doj", type: "DATE" },
			{ name: "EmployeeType", type: "int" } ,
			{ name: "Salary", type: "int" } ,
			{ name: "IsActive", type: "int" } ,
			{ name: "CreatedByUID", type: "int" },
			{ name: "CreatedDate", type: "DATE" } ,
			{ name: "ModifiedByUID", type: "int" } ,
			{ name: "ModifiedDate", type: "DATE" },
			{ name: "KitchenBar", type: "int" } ,
			{ name: "BranchID", type: "int" }
			
			/*{ name: "id", type: "integer" }, //need an id field else model.phantom won't work correctly
			{ name: "name", type: "string" }*/
		],
		proxy: {
		      type: 'sqlitestorage',
		      dbConfig: {
		        tablename: 'Employee',
		        dbConn: Neoceres.util.InitSQLite.getConnection()
		      }
		    }
	/*	validations: [
			{ type: "presense", field: "id" },
			{ type: "presense", field: "name" }
		] */
	}
});