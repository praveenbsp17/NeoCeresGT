Ext.define('Neoceres.model.RoleUIMenu', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: "ID", type: "int" },
   /* { name: "Add", type: "int" }, //error occuring if these three rows are used 
    { name: "Update", type: "int" },
    { name: "Delete", type: "int" }, */
    { name: "View", type: "int" },
    { name: "RoleID", type: "int" },
    { name: "UimenuID", type: "int" },
    { name: "IsActive", type: "int" } ,
	{ name: "CreatedByUID", type: "int" },
	{ name: "CreatedDate", type: "DATE" } ,
	{ name: "ModifiedByUID", type: "int" },
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
        tablename: 'RoleUIMenu',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});