Ext.define("Neoceres.view.CustomerFoodItemsHeader", {
	extend: "Ext.Toolbar",
	xtype: "customerfooditemsheader",
	id: 'customerfooditemsheaderpanel',
	alias: 'customerfooditemsheader.customerfooditemsheader',
	requires: ["Ext.field.Search"],
	initialize: function () {
		var content = {
			xtype: "toolbar",
			itemId:'foodss',
			ui: "searchbar",
			margin: '1em 0 .3em 0em',
			items: [
				{
					xtype: "label",
					itemId:'foodLabel',
					id:'foodLabel',
					cls:'food_items_header',
					html: 'Menu name',
					flex: 1
				},{
					xtype: "button",
					cls:'recommended_enable',
					itemId: "recommended",
					id:'recommended'
				},{
					xtype: "button",
					cls:'mostloved_enable',
					itemId: "mostloved",
					id: "mostloved"	
				}
			]
		};
		this.add([content]);
	},
	config: {
		docked: "top",
		ui: "searchbar",
		layout: "vbox"
	}
});