Ext.define("Neoceres.model.Ingredient",{
	extend: "Ext.data.Model",

	config: {
		idProperty: "id",
		fields: [
			{ name: "ID", type: "integer" }, //need an id field else model.phantom won't work correctly (reverse actually)
			{ name: "IngredientName" , type: "string" },
			{ name: "Brand", type: "string" },
			{ name: "Description", type: "string" },
			{ name: "PacksPerOuter", type: "int" },
			{ name: "OuterPackCost", type: "NUMERIC" },
			{ name: "InnerPackCost", type: "NUMERIC" } ,
			{ name: "ServingUnitCost", type: "NUMERIC" },
			{ name: "Calories", type: "NUMERIC" },
			{ name: "SaturatedFat", type: "NUMERIC" },
			{ name: "MonoSaturatedFat", type: "NUMERIC" },
			{ name: "PolySaturatedFat", type: "NUMERIC" } ,
			{ name: "Carbohydrates", type: "NUMERIC" } ,
			{ name: "Proteins", type: "NUMERIC" } ,
			{ name: "Sugars", type: "NUMERIC" }, 
			{ name: "Sodium", type: "NUMERIC" } ,
			{ name: "Vitamina", type: "NUMERIC" },
			{ name: "Vitaminc", type: "NUMERIC" } ,
			{ name: "Iron", type: "NUMERIC" } ,
			{ name: "Calcium", type: "NUMERIC" } ,
			{ name: "BranchID", type: "int" },
			{ name: "Tags", type: "string" } ,
			{ name: "ServingUnitID", type: "int" } ,
			{ name: "InnerPackingUnitID", type: "int" } ,
			{ name: "OuterPackingUnitID", type: "int" } ,
			{ name: "IngredientCategoryID", type: "int" } ,
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
		        tablename: 'Ingredient',
		        dbConn: Neoceres.util.InitSQLite.getConnection()
		      }
		    }
	/*	validations: [
			{ type: "presense", field: "id" },
			{ type: "presense", field: "name" }
		] */
	}
});