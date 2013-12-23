Ext.define('Neoceres.model.KitchenBar', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' }, // Every model must start with an id of type int
    { name: "KitchenBarName", type: "TEXT" },
    { name: "KitchenBarType", type: "int" },
    { name: "BranchID", type: "int" },
	{ name: "IsActive", type: "int" },
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
        tablename: 'KitchenBar',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});