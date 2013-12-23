Ext.define('Neoceres.store.IngredientCategory', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.IngredientCategory'],
  
  config: {
    model: 'Neoceres.model.IngredientCategory',
    autoLoad: true,
    storeId: 'IngredientCategory'
   // pageSize: 1000
  }
});
