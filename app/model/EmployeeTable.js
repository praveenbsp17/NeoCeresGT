Ext.define('Neoceres.model.EmployeeTable', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' }, // Every model must start with an id of type int
    { name: "FromDate", type: "DATE" } ,
    { name: "ToDate", type: "DATE" } ,
    { name: "EmployeeID", type: "int" } ,
    { name: "TableID", type: "int" } ,
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
        tablename: 'EmployeeTable',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});