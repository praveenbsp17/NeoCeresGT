Ext.define('Neoceres.model.LoginDetails', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' }, // Every model must start with an id of type int
    { name: "LoginTime", type: "DATE" } ,
    { name: "EmployeeID", type: "int" } ,
    { name: "LogoutTime", type: "DATE" } ,
	{ name: "IsActive", type: "int" } 
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
        tablename: 'LoginDetails',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});