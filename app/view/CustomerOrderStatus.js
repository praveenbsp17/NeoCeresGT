Ext.define("Neoceres.view.CustomerOrderStatus", {
	extend: "Ext.Toolbar",
	xtype: "customerorderstatus",
	alias: 'customerorderstatus.customerorderstatus',
	requires: ["Ext.field.Search"],
	initialize: function () {
		var content = {
			xtype: "toolbar",
			ui: "searchbar",
			items: [
				{
					xtype: "label",
					itemId:'OrderFoodItem',
					id:'OrderFoodItem',
					cls:'food_items_header',
					//html: 'Menu name',
					flex: 1
				},
				{
					xtype: "button",
					cls:'pending_disable',
					itemId: "pendingOrders",
					id:'pendingOrders'
				},{
					xtype: "button",
					cls:'confirm_disable',
					itemId: "confirmOrders",
					id: "confirmOrders"	
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