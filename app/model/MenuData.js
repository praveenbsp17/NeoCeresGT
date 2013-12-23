Ext.define('Neoceres.model.MenuData', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID1', type: 'int' }, // Every model must start with an id of type int
    { name: 'ID', type: 'int' },
    { name: 'Type', type: 'int' },
    { name: 'MenuID', type: 'int' },
    { name: 'MenuName', type: 'TEXT' },
    { name: 'SubMenuID', type: 'int' },
    { name: 'MenuItemID', type: 'int' },
    { name: 'RecipeID', type: 'int' },
    { name: "Price", type: "NUMERIC" } ,
    { name: "Rating", type: "NUMERIC" } ,
    { name: 'Description', type: 'TEXT' }, // bools, floats, objects and arrays also supported
    { name: "Position", type: "int" } ,
    { name: "MenuType", type: "int" } ,
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
        tablename: 'MenuData',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});