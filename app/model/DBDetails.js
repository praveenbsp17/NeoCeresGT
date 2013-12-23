Ext.define('Neoceres.model.DBDetails', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' }, // Every model must start with an id of type int
    { name: "Tablename", type: "TEXT" } ,
    { name: "UpdateCount", type: "int" } 
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
        tablename: 'DBDetails',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});