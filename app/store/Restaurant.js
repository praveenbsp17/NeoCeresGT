Ext.define("Neoceres.store.Restaurant",{
	extend: "Ext.data.Store",

	requires: ["Neoceres.model.Restaurant"/*, "Ext.data.proxy.JsonP"*/],

	config: {
		model: "Neoceres.model.Restaurant",
		/*proxy: {
			type: "jsonp",
			url:  "http://192.168.100.23/CeresServices/NeoceresServices.svc/GetAllRestaurants",
			callbackKey: 'test',
			reader: {
				type: "json"
			},
			read:function(response) {
			     console.log('res');
			   }
			
		},*/
		
		listeners:{
            load: function( me, records, successful, operation, eOpts ){ 
                console.log("categories tree loaded");
                //console.log(records);
            }
		}, 
		autoLoad: true
	}
});