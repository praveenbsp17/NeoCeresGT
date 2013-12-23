Ext.define('Neoceres.store.Menu', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.Menu'],
  
  config: {
    model: 'Neoceres.model.Menu',
    autoLoad: true,
    storeId: 'Menu'
   // pageSize: 1000
  }
});
