Ext.define('Neoceres.store.RecipeObjectURL', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.RecipeObjectURL'],
  
  config: {
    model: 'Neoceres.model.RecipeObjectURL',
    autoLoad: true,
    storeId: 'RecipeObjectURL'
   // pageSize: 1000
  }
});
