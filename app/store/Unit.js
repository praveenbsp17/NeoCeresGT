Ext.define('Neoceres.store.Unit', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.Unit'],
  
  config: {
    model: 'Neoceres.model.Unit',
    autoLoad: true,
    storeId: 'Unit'
   // pageSize: 1000
  }
});
