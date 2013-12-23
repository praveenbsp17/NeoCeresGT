Ext.define('Neoceres.store.MenuData', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.MenuData'],
  
  config: {
    model: 'Neoceres.model.MenuData',
    autoLoad: true,
    storeId: 'MenuData'
   // pageSize: 1000
  }
});
