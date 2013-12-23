Ext.define('Neoceres.store.Billing', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.Billing'],
  
  config: {
    model: 'Neoceres.model.Billing',
    autoLoad: true,
    storeId: 'Billing'
   // pageSize: 1000
  }
});
