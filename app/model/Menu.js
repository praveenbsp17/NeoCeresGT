Ext.define('Neoceres.model.Menu', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' },
    { name: 'MenuName', type: 'TEXT' },
    { name: 'DateSpecific', type: 'int' },
    { name: 'StartDate', type: 'DATE' },
    { name: 'EndDate', type: 'DATE' },
    { name: "MenuDescription", type: "TEXT" } ,
    { name: "IsDefault", type: "int" } ,
    { name: 'Tags', type: 'TEXT' }, // bools, floats, objects and arrays also supported
    { name: "BranchID", type: "int" } ,
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
        tablename: 'Menu',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});