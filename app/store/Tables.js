Ext.define('Neoceres.store.Tables', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.Tables'],
  
  config: {
    model: 'Neoceres.model.Tables',
    autoLoad: true,
    storeId: 'Tables'
   // pageSize: 1000
  }
});
