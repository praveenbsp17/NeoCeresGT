Ext.define('Neoceres.store.FoodMenuList', {
	extend : 'Ext.data.TreeStore',
	requires : [ 'Neoceres.model.FoodMenuList' ],

	config : {
		 defaultRootProperty : 'items', 
		model : 'Neoceres.model.FoodMenuList',

		// XXX: AccordionList Now show data from JSON

		proxy : {
			type : 'ajax',
			url : 'resources/data/testData.json'
		}

	}

});
