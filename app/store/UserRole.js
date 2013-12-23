Ext.define('Neoceres.store.UserRole', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.UserRole'],
  
  config: {
    model: 'Neoceres.model.UserRole',
    autoLoad: true,
    storeId: 'UserRole'
   // pageSize: 1000
  }
});
