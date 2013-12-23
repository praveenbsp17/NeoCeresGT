Ext.define('Neoceres.store.Orders', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.Orders'],
  
  config: {
    model: 'Neoceres.model.Orders',
    autoLoad: true,
    storeId: 'Orders'
   // pageSize: 1000
  }
});
