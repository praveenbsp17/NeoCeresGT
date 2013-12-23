Ext.define('Neoceres.model.TableGroup', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' }, // Every model must start with an id of type int
    { name: "TableGroupName", type: "TEXT" } ,
    { name: "BranchID", type: "int" } ,
    { name: "Description", type: "TEXT" } ,
    { name: "IsFloorPlanRequired", type: "int" } ,
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
        tablename: 'TableGroup',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});