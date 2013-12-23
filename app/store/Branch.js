Ext.define('Neoceres.store.Branch', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.Branch'],
  
  config: {
    model: 'Neoceres.model.Branch',
    autoLoad: true,
    storeId: 'Branch'
   // pageSize: 1000
  }
});
