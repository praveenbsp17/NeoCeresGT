Ext.define('Neoceres.store.OrderDetail', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.OrderDetail'],
  
  config: {
    model: 'Neoceres.model.OrderDetail',
    autoLoad: true,
    storeId: 'OrderDetail'
   // pageSize: 1000
  }
});
