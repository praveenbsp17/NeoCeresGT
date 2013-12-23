Ext.define('Neoceres.store.LoginDetails', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.LoginDetails'],
  
  config: {
    model: 'Neoceres.model.LoginDetails',
    autoLoad: true,
    storeId: 'LoginDetails'
   // pageSize: 1000
  }
});
