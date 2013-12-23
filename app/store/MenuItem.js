Ext.define('Neoceres.store.MenuItem', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.MenuItem'],
  
  config: {
    model: 'Neoceres.model.MenuItem',
    autoLoad: true,
    storeId: 'MenuItem'
   // pageSize: 1000
  }
});
