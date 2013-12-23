Ext.define('Neoceres.model.Tables', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' }, // Every model must start with an id of type int
    { name: "TableNo", type: "TEXT" } ,
	{ name: "Capacity", type: "int" },
    { name: 'Location', type: 'TEXT' }, 
    { name: "Description", type: "TEXT" } ,
    { name: 'Tags', type: 'TEXT' },
	{ name: "IsActive", type: "int" } ,
	{ name: "CreatedByUID", type: "int" },
	{ name: "CreatedDate", type: "DATE" } ,
	{ name: "ModifiedByUID", type: "int" } ,
	{ name: "TableGroupID", type: "int" } ,
	{ name: "ModifiedDate", type: "DATE" },
	{ name: "BranchID", type: "int" } 
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
        tablename: 'Tables',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});