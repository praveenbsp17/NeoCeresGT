Ext.define('Neoceres.store.KitchenBar', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.KitchenBar'],
  
  config: {
    model: 'Neoceres.model.KitchenBar',
    autoLoad: true,
    storeId: 'KitchenBar'
   // pageSize: 1000
  }
});
