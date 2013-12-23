Ext.define('Neoceres.store.Customer', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.Customer'],
  
  config: {
    model: 'Neoceres.model.Customer',
    autoLoad: true,
    storeId: 'Customer'
   // pageSize: 1000
  }
});
