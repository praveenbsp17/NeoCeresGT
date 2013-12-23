Ext.define('Neoceres.model.Orders', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' },
    { name: 'OrderDate', type: 'DATE' },
    { name: 'OrderStartTime', type: 'DATE' },
    { name: 'OrderEndTime', type: 'DATE' },
    { name: 'BillAmount', type: 'NUMERIC' },
    { name: 'DiscountAmount', type: 'NUMERIC' },
    { name: 'TotalAmount', type: 'NUMERIC' },
    { name: 'Transferred', type: 'int' },
    { name: 'CustomerID', type: 'int' },
    { name: 'NewEmployeeTableID', type: 'int' },
    { name: 'OldEmployeeTableID', type: 'int' },
    { name: "OldTableID", type: "int" } ,
    { name: 'NewTableID', type: 'int' }, // bools, floats, objects and arrays also supported
    { name: "BranchID", type: "int" } ,
    { name: "TableBookingID", type: "int" } ,
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
        tablename: 'Orders',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});