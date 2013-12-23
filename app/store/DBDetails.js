Ext.define('Neoceres.store.DBDetails', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.DBDetails'],
  
  config: {
    model: 'Neoceres.model.DBDetails',
    autoLoad: true,
    storeId: 'DBDetails'
   // pageSize: 1000
  }
});
