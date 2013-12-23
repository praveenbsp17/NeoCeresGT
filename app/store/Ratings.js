Ext.define('Neoceres.store.Ratings', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.Ratings'],
  
  config: {
    model: 'Neoceres.model.Ratings',
    autoLoad: true,
    storeId: 'Ratings'
   // pageSize: 1000
  }
});
