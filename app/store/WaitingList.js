Ext.define('Neoceres.store.WaitingList', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.WaitingList'],
  
  config: {
    model: 'Neoceres.model.WaitingList',
    autoLoad: true,
    storeId: 'WaitingList'
   // pageSize: 1000
  }
});
