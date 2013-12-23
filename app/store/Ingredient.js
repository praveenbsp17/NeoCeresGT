Ext.define('Neoceres.store.Ingredient', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.Ingredient'],
  
  config: {
    model: 'Neoceres.model.Ingredient',
    autoLoad: true,
    storeId: 'Ingredient'
   // pageSize: 1000
  }
});
