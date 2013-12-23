Ext.define('Neoceres.model.Billing', {
  extend: 'Ext.data.Model',
  
  config: {
	  idProperty: "ID",
    fields: [
    { name: 'ID', type: 'int' }, // Every model must start with an id of type int
    { name: "BillAmount", type: "NUMERIC" } ,
    { name: "DiscountPercentage", type: "NUMERIC" } ,
    { name: "DiscountAmount", type: "NUMERIC" } ,
    { name: "GratuityPercentage", type: "NUMERIC" } ,
    { name: "TaxableAmount", type: "NUMERIC" } ,
    { name: "OrderID", type: "int" } ,
    { name: "BranchID", type: "int" } ,
    { name: "CashTrayID", type: "int" } ,
    { name: "TenderedCash", type: "NUMERIC" } ,
    { name: "GratuityAmount", type: "NUMERIC" } ,
    { name: "TotalAmount", type: "NUMERIC" } ,
    { name: "BillDate", type: "DATE" } ,
    { name: "Splits", type: "int" } ,
    { name: "PaymentMode", type: "int" } ,
    { name: "PaymentType", type: "int" } ,
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
        tablename: 'Billing',
        dbConn: Neoceres.util.InitSQLite.getConnection()
      }
    }
  }
  
});