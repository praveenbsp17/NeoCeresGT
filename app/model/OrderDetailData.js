Ext.define('Neoceres.model.OrderDetailData', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' },
    { name: 'OrderDetailID', type: 'int' },
   { name: 'Quantity', type: 'int' },
    { name: 'SpecialInstructions', type: 'TEXT' },
     { name: 'CustomerSpecialInstructions', type: 'TEXT' },
    { name: 'Ordered', type: 'int' },
    { name: 'MenuItemID', type: 'int' },
    { name: 'MenuID', type: 'int' },
    { name: 'SubMenuID', type: 'int' },
    { name: 'OrderID', type: 'int' },
    { name: 'OrderStatus', type: 'int' },
    { name: 'KitchenBar', type: 'int' },
    { name: 'KitchenBarType', type: 'int' },
    { name: 'IsWaterOption', type: 'int' },
    { name: 'OrderTime', type: 'DATE' },
    { name: 'ChefAcknowledgeTime', type: 'DATE' },
    { name: "OrderSequence", type: "int" } ,
    { name: 'MenuitemName', type: 'TEXT' }, // bools, floats, objects and arrays also supported
    { name: "MenuitemDescription", type: "TEXT" } ,
    { name: "Price", type: "NUMERIC" } ,
    { name: "ForceModCost", type: "NUMERIC" } ,
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
        tablename: 'OrderDetailData',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});