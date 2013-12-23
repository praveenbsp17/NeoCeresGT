Ext.define('Neoceres.store.ForceModifications', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.ForceModifications'],
  
  config: {
    model: 'Neoceres.model.ForceModifications',
    autoLoad: true,
    storeId: 'ForceModifications'
   // pageSize: 1000
  }
});
