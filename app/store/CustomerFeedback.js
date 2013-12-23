Ext.define('Neoceres.store.CustomerFeedback', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.CustomerFeedback'],
  
  config: {
    model: 'Neoceres.model.CustomerFeedback',
    autoLoad: true,
    storeId: 'CustomerFeedback'
   // pageSize: 1000
  }
});
