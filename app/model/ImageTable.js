Ext.define('Neoceres.model.ImageTable', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' }, // Every model must start with an id of type int
    { name: "ImagePath", type: "TEXT" } ,
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
        tablename: 'ImageTable',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});