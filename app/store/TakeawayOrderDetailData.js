Ext.define('Neoceres.store.TakeawayOrderDetailData', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.TakeawayOrderDetailData'],
  
  config: {
    model: 'Neoceres.model.TakeawayOrderDetailData',
    autoLoad: true,
    storeId: 'TakeawayOrderDetailData'
   // pageSize: 1000
  }
});
