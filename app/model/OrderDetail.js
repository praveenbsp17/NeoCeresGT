Ext.define('Neoceres.model.OrderDetail', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' },
    { name: 'Quantity', type: 'int' },
    { name: 'IsWaterOption', type: 'int' },
    { name: "ForceModCost", type: "NUMERIC" } ,
    { name: 'SpecialInstructions', type: 'TEXT' },
    { name: 'CustomerSpecialInstructions', type: 'TEXT' },
    { name: 'OrderTime', type: 'DATE' },
    { name: 'ChefAcknowledgeTime', type: 'DATE' },
    { name: 'Ordered', type: 'int' },
    { name: 'MenuItemID', type: 'int' },
    { name: 'MenuID', type: 'int' },
    { name: 'SubMenuID', type: 'int' },
    { name: 'OrderID', type: 'int' },
    { name: "BranchID", type: "int" } ,
    { name: 'OrderStatus', type: 'int' },
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
        tablename: 'OrderDetail',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});