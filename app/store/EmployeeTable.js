Ext.define('Neoceres.store.EmployeeTable', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.EmployeeTable'],
  
  config: {
    model: 'Neoceres.model.EmployeeTable',
    autoLoad: true,
    storeId: 'EmployeeTable'
   // pageSize: 1000
  }
});
