Ext.define('Neoceres.store.Employee', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.Employee'],
  
  config: {
    model: 'Neoceres.model.Employee',
    autoLoad: true,
    storeId: 'Employee'
   // pageSize: 1000
  }
});
