Ext.define('Neoceres.view.CustomerMainView', {
	extend: 'Ext.Container',
	xtype: 'customerMainView',
	id: 'customerMainPage',
	style: 'background-color: #F13638;',
	requires: [
		'Ext.TitleBar',
		'Ext.SegmentedButton',
		'Ext.ux.AccordionList',
		'Ext.plugin.ListPaging',
		'Ext.Label',
		'Ext.plugin.PullRefresh',
		'Ext.Img',
		'Ext.dataview.List',
		'Ext.form.FieldSet',
		'Neoceres.view.CustomerFoodItems',
		'Neoceres.view.CustomerOrderStatus',
		'Neoceres.view.CustomerFeedbackForm',
		'Neoceres.view.CustomerFoodItemsHeader',
		'Neoceres.view.CustomerTakeATour'
	],
	config: {
		tabBarPosition: 'bottom',
		tabBar: {
			scrollable: 'horizontal'
		},
		cls: 'sidenav',
		style: 'background-color: #F13638;',
		items: [{
			xtype: "toolbar",
			dock: 'top',
			layout: 'hbox',
			defaults: {
				margin: 0,
				height: 80
			},
			style: 'background-color: #F13638;',
			//Header menu 
			items: [{
				xtype: 'container',
				style: 'background-color: #F13638;',
				flex: 3,
				layout: 'hbox',
				defaults: {
					margin: 10
				},
				items: [{
					//Header menu- logo
					xtype: 'image',
					flex: 1,
					cls: 'imageCls',
					src: 'resources/images/customer/neoceres-logo-white.png',
					layout: {
						pack: 'left'
					}
				}, {
					//Header menu- video 
					xtype: 'container',
					margin: 20,
					items: [{
						xtype: 'image',
						flex: 1,
						src: 'resources/images/play-icon.png'
					}, {
						xtype: 'button',
						margin: '.30em 0 .3em .3em',
						id: 'sideFeedbackButtonddsdsds',
						//ui: 'action-round',
						//ui: 'confirm',
						//iconCls: 'compose',
						cls: 'take_a_tour',
						text: '',
						// calling video pop-up 
						handler: function (button) {
							Ext.getCmp('rightText').setHtml('<b></b>');
							Ext.getCmp('customer_main_content').setCls('set_bg_null');
							var sheet = Ext.create('Neoceres.view.CustomerTakeATour');
							sheet.show({
								type: 'pop',
								duration: 100
							});
						}
					}]
				}]
			}, {
				// header menu right side icon set
				xtype: 'container',
				style: 'background-color: #F13638;',
				flex: 1,
				layout: 'hbox',
				items: [
					{
						xtype: 'image',
						flex: 1,
						cls: 'customer_header_image_orderWater',
						src: 'resources/images/customer/orderwater-icon.png'
				    }, {
						xtype: 'image',
						flex: 1,
						cls: 'customer_header_image_request',
						src: 'resources/images/customer/requestcheck-icon.png'
				    }, {
						xtype: 'image',
						flex: 1,
						cls: 'customer_header_image_assistance',
						src: 'resources/images/customer/assistance-icon.png'
				    }]
			}, ]
		}, {
			// accordionlist view  
			xtype: 'container',
			docked: 'top',
			left: 0,
			height: '100%',
			layout: 'card',
			itemId: 'left',
			cls: 'left',
			zIndex: 1,
			items: [{
				// search item fieldset
				xtype: 'fieldset',
				title: 'Search Item',
				id: 'foodSearch',
				items: [{
					xtype: 'textfield',
					placeHolder: 'Item Name'
				}, {
					xtype: 'selectfield',
					placeHolder: 'choose',
					options: [{
						text: 'Choose....',
						value: ''
					}, {
						text: 'Second Option',
						value: 'second'
					}, {
						text: 'Third Option',
						value: 'third'
					}]
				}, {
					xtype: 'button',
					name: 'search',
					ui: 'decline',
					text: 'search'
				}]
			}, {
				//accordionlist view 
				xtype: 'accordionlist',
				store: Ext.create('Neoceres.store.FoodMenuList'),
				removeCls: 'sidenav',
				singleMode: true,
				cls: 'acrodin ',
				itemId: 'plain',
				id: 'menus',
				animation: true,
				animationDuration: 1000,
				listeners: {
					initialize: function () {
						this.load();
						//this.addCls('PL-view');
					}
				}
				
			}, ]
		}, {
			xtype: 'container',
			docked: 'top',
			right: 0,
			height: '100%',
			layout: 'card',
			cls: 'right',
			itemId: 'right',
			id: 'rightText',
			zIndex: 2,
			html: 'This is your right hand container. Normally for search'
		}, {
			xtype: 'container',
			zIndex: 3,
			itemId: 'customerPageContent',
			id: 'customerpagecontent',
			cls: 'main',
			layout: {
				type: 'card',
				height: '100'
			},
			scrollable: null,
			draggable: 'horizontal',
			items: [

				{
					xtype: 'container',
					items: [{
						xtype: 'container',
						docked: 'top',
						layout: 'hbox',
						height: '50%',
						id:'customer_main_content',
						items: [
							{
								xtype: "customerorderstatus",
								docked: 'right',
								width: '25%'
						}, {

								layout: "vbox",
								docked: 'right',
								width: '65%',
								style: 'background-color: #FFFFFF;',
								items: [
									{
										xtype: "customerfooditemsheader",
										height:'15%',
										flex: 1
									}, {
										xtype: "customerfooditems",
										id: "centerContent",
										flex: 9
								}]
						}, {
								xtype: 'container',
								itemId: 'customerMenuButtons',
								docked: 'left',
								flex: 1,
								margin: '.3em 0 .3em 0em',
								id: 'customermenubuttons',
								items: [{
										xtype: 'button',
										itemId: 'sideMenu',
										id: 'sideMenuItems',
										margin: '.3em 0 .3em .3em',
										//ui: 'action',
										//iconCls: 'list',
										iconMask: true,
										text: '',
										cls:'list_item_menu',
										handler: function (button) {}
								}, {
										xtype: 'button',
										itemId: 'sideSearch',
										id: 'sideSearchItems',
										margin: '.30em 0 .3em .3em',
										cls:'search_item_menu',
										//ui: 'action-round',
										//ui: 'decline',
										//iconCls: 'search',
										iconMask: true,
										text: ''
								}, {
										xtype: 'button',
										margin: '.30em 0 .3em .3em',
										id: 'sideFeedbackButton',
										cls:'feedback_item_menu',
										//ui: 'action-round',
										//ui: 'confirm',
										//iconCls: 'compose',
										text: '',
										handler: function (button) {
											Ext.getCmp('rightText')
												.setHtml('<b></b>');
										Ext.getCmp('customer_main_content').setCls('set_bg_null');
											var sheet = Ext.create('Neoceres.view.CustomerFeedbackForm');
											sheet.show({
												type: 'pop',
												duration: 100
											});
										}
								}
							]
						}]
					}]
				}
			]
		}]
	}
});