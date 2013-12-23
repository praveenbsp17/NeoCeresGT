Ext.define('Neoceres.store.OrderDetailData', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.OrderDetailData'],
  
  config: {
    model: 'Neoceres.model.OrderDetailData',
    autoLoad: true,
    storeId: 'OrderDetailData'
   // pageSize: 1000
  }
});
