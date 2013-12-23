Ext.define('Neoceres.store.GlobalObject1', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.GlobalObject1'],
  
  config: {
    model: 'Neoceres.model.GlobalObject1',
    autoLoad: true,
    storeId: 'GlobalObject1'
   // pageSize: 1000
  }
});
