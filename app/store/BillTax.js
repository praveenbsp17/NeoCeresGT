Ext.define('Neoceres.store.BillTax', {
  
  extend: 'Ext.data.Store',
  
  requires: ['Neoceres.model.BillTax'],
  
  config: {
    model: 'Neoceres.model.BillTax',
    autoLoad: true,
    storeId: 'BillTax'
   // pageSize: 1000
  }
});
