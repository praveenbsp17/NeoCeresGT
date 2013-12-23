Ext.define("Neoceres.view.CustomerFoodItems", {
	extend: "Ext.Container",
	xtype: "customerfooditems",
	alias: 'customerfooditems.customerfooditems',
	requires: ["Ext.plugin.PullRefresh"],
	initialize: function () {
		var content = {
			xtype: 'container',
			itemId:'foods',
			layout: 'fit',
			width: '100%',
			config: {
				plugins: [	{
			                    xclass: 'Ext.plugin.PullRefresh',
			                    pullRefreshText: 'Pull down for more news!',
			                    releaseRefreshText: 'Release to refresh...'
					         }]
			} ,
			cls: 'listHeight',
					xtype: 'list',
					disableSelection: true,
					pressedCls:'none',
					//itemTpl: '<div class="img customimg" style="background-image: url({photo});"></div><div class="content"><div class="name">{foodItemName}and{age}</div></div>',
					itemTpl: '<span class="food_items"><span class="food_image"><img src="{photo}" /></span><span class="food_desc">{foodItemName}<br><span class="food_desc_indeatil">{foodItemDesc}</span></span><span class="food_cost">{foodCost}</span><span class="food_rating"><img src="{foodRating}"/></span><span class="food_items"><img src="{foodAlbum}" id="foodAlbum"/></span><span class="food_items"><img src="{foodVideo}" id="foodVideo"/></span><span class="food_items"><img src="{foodIngredient}" id="foodIngredient"/></span><span class="food_Add_Order"><img src="{foodAddorder}" id="addToOrder"/></span></span>',
					flex: 6,
					data: [
						{
							photo: 'resources/images/food_1.jpg',
							foodItemName: 'Food Item One',
							foodItemDesc: 'sample Desc',
							foodRating: 'resources/images/customer/stars-rating.png',
							foodAlbum: 'resources/images/customer/photos-icon.png',
							foodVideo: 'resources/images/customer/video-icon.png',
							foodIngredient: 'resources/images/customer/using-itemlist-icon.png',
							foodCost:'$10',
							foodAddorder: 'resources/images/customer/addorder-button.png'
							
						},
						{
							photo: 'resources/images/food_2.jpg',
							foodItemName: 'Food Item two',
							foodItemDesc: 'sample Desc',
							foodRating: 'resources/images/customer/stars-rating.png',
							foodAlbum: 'resources/images/customer/photos-icon.png',
							foodVideo: 'resources/images/customer/video-icon.png',
							foodIngredient: 'resources/images/customer/using-itemlist-icon.png',
							foodCost:'$10',
							foodAddorder: 'resources/images/customer/addorder-button.png'
						},
						{
							photo: 'resources/images/food_3.jpg',
							foodItemName: 'Food Item three',
							foodItemDesc: 'sample Desc',
							age: 100,
							foodRating: 'resources/images/customer/stars-rating.png',
							foodAlbum: 'resources/images/customer/photos-icon.png',
							foodVideo: 'resources/images/customer/video-icon.png',
							foodIngredient: 'resources/images/customer/using-itemlist-icon.png',
							foodCost:'$10',
							foodAddorder: 'resources/images/customer/addorder-button.png'
						},
						{
							photo: 'resources/images/food_4.jpg',
							foodItemName: 'Food Item Four',
							foodItemDesc: 'sample Desc',
							age: 100,
							foodRating: 'resources/images/customer/stars-rating.png',
							foodAlbum: 'resources/images/customer/photos-icon.png',
							foodVideo: 'resources/images/customer/video-icon.png',
							foodIngredient: 'resources/images/customer/using-itemlist-icon.png',
							foodCost:'$10',
							foodAddorder: 'resources/images/customer/addorder-button.png'
						},
						{
							photo: 'resources/images/food_1.jpg',
							foodItemName: 'Food Item Five',
							foodItemDesc: 'sample Desc',
							age: 100,
							foodRating: 'resources/images/customer/stars-rating.png',
							foodAlbum: 'resources/images/customer/photos-icon.png',
							foodVideo: 'resources/images/customer/video-icon.png',
							foodIngredient: 'resources/images/customer/using-itemlist-icon.png',
							foodCost:'$10',
							foodAddorder: 'resources/images/customer/addorder-button.png'
						},
						{
							photo: 'resources/images/food_2.jpg',
							foodItemName: 'Food Item Six',
							foodItemDesc: 'sample Desc',
							age: 100,
							foodRating: 'resources/images/customer/stars-rating.png',
							foodAlbum: 'resources/images/customer/photos-icon.png',
							foodVideo: 'resources/images/customer/video-icon.png',
							foodIngredient: 'resources/images/customer/using-itemlist-icon.png',
							foodCost:'$10',
							foodAddorder: 'resources/images/customer/addorder-button.png'
						},
						{
							photo: 'resources/images/food_3.jpg',
							foodItemName: 'Food Item Seven',
							foodItemDesc: 'sample Desc',
							age: 100,
							foodRating: 'resources/images/customer/stars-rating.png',
							foodAlbum: 'resources/images/customer/photos-icon.png',
							foodVideo: 'resources/images/customer/video-icon.png',
							foodIngredient: 'resources/images/customer/using-itemlist-icon.png',
							foodCost:'$10',
							foodAddorder: 'resources/images/customer/addorder-button.png'
						},
						{
							photo: 'resources/images/food_4.jpg',
							foodItemName: 'Food Item Eight',
							foodItemDesc: 'sample Desc',
							age: 100,
							foodRating: 'resources/images/customer/stars-rating.png',
							foodAlbum: 'resources/images/customer/photos-icon.png',
							foodVideo: 'resources/images/customer/video-icon.png',
							foodIngredient: 'resources/images/customer/using-itemlist-icon.png',
							foodCost:'$10',
							foodAddorder: 'resources/images/customer/addorder-button.png'
						},
						{
							photo: 'resources/images/food_4.jpg',
							foodItemName: 'Food Item Nine',
							foodItemDesc: 'sample Desc',
							age: 100,
							foodRating: 'resources/images/customer/stars-rating.png',
							foodAlbum: 'resources/images/customer/photos-icon.png',
							foodVideo: 'resources/images/customer/video-icon.png',
							foodIngredient: 'resources/images/customer/using-itemlist-icon.png',
							foodCost:'$10',
							foodAddorder: 'resources/images/customer/addorder-button.png'
						},
						{
							photo: 'resources/images/food_1.jpg',
							foodItemName: 'Food Item Ten',
							foodItemDesc: 'sample Desc',
							age: 100,
							foodRating: 'resources/images/customer/stars-rating.png',
							foodAlbum: 'resources/images/customer/photos-icon.png',
							foodVideo: 'resources/images/customer/video-icon.png',
							foodIngredient: 'resources/images/customer/using-itemlist-icon.png',
							foodCost:'$10',
							foodAddorder: 'resources/images/customer/addorder-button.png'
						},
						
						]
						/*listeners: {
					        itemtap: function(list, index, target, record, e, eOpts) {
				var el = Ext.get(e.target);
			    alert(el.dom.id);
							//console.log(target);
							//var value = target.getAlt('werty') || '';	
							//alert(JSON.stringify(e));
					}}*/
                   
		};
		this.add([content]);
	},
	config: {
		layout: "vbox",
			plugins: [
						{
			                    xclass: 'Ext.plugin.PullRefresh',
			                    pullRefreshText: 'Pull down for more news!',
			                    releaseRefreshText: 'Release to refresh...'
			                }
					]
	}
});