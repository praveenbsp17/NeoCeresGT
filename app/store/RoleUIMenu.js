Ext.define('Neoceres.store.RoleUIMenu', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.RoleUIMenu'],
  
  config: {
    model: 'Neoceres.model.RoleUIMenu',
    autoLoad: true,
    storeId: 'RoleUIMenu'
   // pageSize: 1000
  }
});
