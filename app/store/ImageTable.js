Ext.define('Neoceres.store.ImageTable', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.ImageTable'],
  
  config: {
    model: 'Neoceres.model.ImageTable',
    autoLoad: true,
    storeId: 'ImageTable'
   // pageSize: 1000
  }
});
