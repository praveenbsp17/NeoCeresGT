Ext.define('Neoceres.store.TableGroup', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.TableGroup'],
  
  config: {
    model: 'Neoceres.model.TableGroup',
    autoLoad: true,
    storeId: 'TableGroup'
   // pageSize: 1000
  }
});
