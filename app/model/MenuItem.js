Ext.define('Neoceres.model.MenuItem', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' },
    { name: 'MenuitemName', type: 'TEXT' },
    { name: 'MenuitemDescription', type: 'TEXT' },
    { name: 'KitchenBarType', type: 'int' },
    { name: "Price", type: "NUMERIC" } ,
    { name: "Rating", type: "NUMERIC" } ,
    { name: "KitchenBar", type: "int" } ,
    { name: 'ExclusionStartDate', type: 'DATE' }, // bools, floats, objects and arrays also supported
    { name: "ExclusionEndDate", type: "DATE" } ,
    { name: "OrderSequence", type: "int" } ,
    { name: 'Tags', type: 'TEXT' }, // bools, floats, objects and arrays also supported
    { name: "BranchID", type: "int" } ,
    { name: "RecipeID", type: "int" } ,
    { name: "IsActive", type: "int" } ,
	{ name: "CreatedByUID", type: "int" },
	{ name: "CreatedDate", type: "DATE" } ,
	{ name: "ModifiedByUID", type: "int" } ,
	{ name: "ModifiedDate", type: "DATE" }
    ],
    
   /* validations: [
    {
      name: 'EmployeeID',
      type: 'length',
      min: 4,
      message: 'Person\'s name must be at least 4 characters long'
    }
    ], */
    
    proxy: {
      type: 'sqlitestorage',
      dbConfig: {
        tablename: 'MenuItem',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});