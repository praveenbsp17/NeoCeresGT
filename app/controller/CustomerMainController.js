Ext.define('Neoceres.controller.CustomerMainController', {
	extend: 'Ext.app.Controller',
	config: {
		views: ['Neoceres.view.CustomerMainView',
		        'Neoceres.view.CustomerFeedbackForm',
		        'Neoceres.view.CustomerFoodItems',
		        'Neoceres.view.CustomerFoodItemsHeader',
		        'Neoceres.view.CustomerTakeATour',
		        'Neoceres.view.CustomerOrderStatus'
		        ],
		refs: {
			customerFoodItems:'customerfooditems #foods',
			custRecommended:'customerfooditemsheader #recommended',
			custMostloved:'customerfooditemsheader #mostloved',
			custPendingOrders:'customerorderstatus #pendingOrders',
			custConfirmOrders:'customerorderstatus #confirmOrders',
			testimage:'customerfooditems food_Add_Order',
			accordionlistexample: 'customerMainView',
			main: 'customerMainView #customerPageContent',
			contentContainer: 'customerMainView #customerMainPage',
			sideMenu: 'customerMainView #sideMenu',
			sideSearch: 'customerMainView #sideSearch',
			sideFeedBack: 'customerMainView #sideFeedBack',
			showRightBtn: 'customerMainView #showRightBtn',
			left: 'customerMainView #left',
			right: 'customerMainView #right'
		},
		control: {
			custRecommended:{
				tap:'custRecommended'
			},
			custMostloved:{
				tap:'custMostloved'
			},
			custPendingOrders:{
				tap:'custPendingOrders'
			},
			custConfirmOrders:{
				tap:'custConfirmOrders'
			},
			customerFoodItems:{
				itemtap:'testImageTap'
			},
			accordionlistexample: {
				activate: 'addMainListeners'
			},
			sideMenu: {
				release: 'toggleLeftMenu'
			},
			sideSearch: {
				release: 'toggleLeftSearch'
			},
			sideFeedBack: {
				release: 'toggleLeftFeedBack'
			},
			showRightBtn: {
				release: 'toggleRight'
			},
			'accordionlist[itemId=plain]': {
				leafitemtap: 'onLeafItemTap'
			},
			'accordionlist[itemId=decorate]': {
				leafitemtap: 'onLeafItemTap'
			},
			'accordionlist[itemId=nested]': {
				leafitemtap: 'onLeafItemTap'
			},
			'accordionlist[itemId=paging]': {
				leafitemtap: 'onLeafItemTap'
			},
			'accordionlist[itemId=grouped]': {
				leafitemtap: 'onLeafItemTap'
			}
		},
		routes: {},
		handleSelector: 'top-toolbar'
	},
	custRecommended: function(){
		var recClass=Ext.getCmp('recommended').getCls();
		if(recClass=='recommended_enable'){
			Ext.getCmp('recommended').setCls('recommended_disable');
			Ext.getCmp('mostloved').setCls('mostloved_enable');
		}else{
			Ext.getCmp('recommended').setCls('recommended_enable');
			Ext.getCmp('mostloved').setCls('mostloved_disable');
		}
	},
	custMostloved: function(){
		var recClass=Ext.getCmp('mostloved').getCls();
		if(recClass=='mostloved_enable'){
			Ext.getCmp('mostloved').setCls('mostloved_disable');
			Ext.getCmp('recommended').setCls('recommended_enable');
		}else{
			Ext.getCmp('mostloved').setCls('mostloved_enable');
			Ext.getCmp('recommended').setCls('recommended_disable');
		}
	},
	custPendingOrders: function(){
		var recClass=Ext.getCmp('pendingOrders').getCls();
		if(recClass=='pending_enable'){
			Ext.getCmp('pendingOrders').setCls('pending_disable');
			Ext.getCmp('confirmOrders').setCls('confirm_enable');
		}else{
			Ext.getCmp('pendingOrders').setCls('pending_enable');
			Ext.getCmp('confirmOrders').setCls('confirm_disable');
		}
	},
	custConfirmOrders: function(){
		var recClass=Ext.getCmp('confirmOrders').getCls();
		if(recClass=='confirm_enable'){
			Ext.getCmp('confirmOrders').setCls('confirm_disable');
			Ext.getCmp('pendingOrders').setCls('pending_enable');
		}else{
			Ext.getCmp('confirmOrders').setCls('confirm_enable');
			Ext.getCmp('pendingOrders').setCls('pending_disable');
		}
	},
	testImageTap: function(list, index, target, record, e, eOpts) {
		var el = Ext.get(e.target);
		var tappedOn=el.dom.id;
		var tappedFoodItem=record.get('foodItemName');
		var tappedFoodCost=record.get('foodCost');
	    //Ext.Msg.alert(tappedOn);
	   // console.log(record.get('foodItemName'));
		if(tappedOn=='addToOrder'){
			Ext.getCmp('OrderFoodItem').setHtml(tappedFoodItem +'<div>'+tappedFoodCost+'</div>');
		}
	    //var tappedOn=el.dom.id;
	    
	    //alert("sadfsdfsdf");
	},
	onLeafItemTap: function (list, index, target, record) {
		var value = record.get('text') || '';
		//var valuewe = record.get('leaf') || '';
		Ext.getCmp('foodLabel').setHtml(value)
		//var sheet = Ext.create('Neoceres.view.CustomerFoodItems');
		//sheet.refresh();
		//this.getCustomerFoodItems().getStore().load();
		//alert(JSON.stringify(this.getGuestList().getData()));
		//console.log('refresh list');
		//Ext.getCmp('centerContent').refresh();
		//Ext.Msg.alert('You tapped leaf! : ' + valuewe);
		
	},
	init: function () {
		var sheet = Ext.create('Neoceres.view.CustomerFoodItems');
		this.getApplication()
			.on('appReady', function () {
				Ext.Viewport.add(Ext.create('Neoceres.view.CustomerMainView'));
			}, this);
	},
	addMainListeners: function () {
		this._leftShown = false;
		this._rightShown = false;

		this.getMain()
			.getDraggable()
			.setConstraint({
				min: {
					x: 0 - this.getLeft()
						.element.getWidth(),
					y: 0
				},
				max: {
					x: this.getRight()
						.element.getWidth(),
					y: 0
				}
			});

		this.getMain()
			.getDraggable()
			.on({
				dragstart: {
					fn: this.onDragStart,
					order: 'before',
					scope: this
				},
				dragend: {
					fn: this.onDragEnd,
					scope: this
				}
			});

	},

	checkMainShown: function () {
		if (this._leftShown || this._rightShown) {

			this.moveMain(0);
		}
	},

	// a drag has just finished: so move main to the nearest logical place
	mainSnapTo: function (draggable, e) {
		var velocity = Math.abs(e.deltaX / e.deltaTime),
			direction = (e.deltaX > 0) ? "right" : "left",
			offsetObj = Ext.clone(draggable.offset),
			offset = offsetObj.x,
			thresholdView = this.getLeft();

		if (offset < 0) thresholdView = this.getRight();

		var startOffsetObj = Ext.clone(draggable.dragStartOffset),
			startOffset = startOffsetObj.x,
			distance = offset - startOffset,
			threshold = parseInt(thresholdView.element.getWidth() * .70),
			twoThreshold = parseInt(thresholdView.element.getWidth() * .70) +
				parseInt(thresholdView.element.getWidth()),
			newOffset = startOffset,
			mustMove = velocity > 0.75 ? true : false;

		if (distance < 0) distance = 0 - distance;

		if ((startOffset == 0 && (mustMove || distance > threshold)) ||
			(startOffset != 0 && distance > twoThreshold)) {
			if (direction == 'right') {
				newOffset = this.getLeft()
					.element.getWidth();
			} else {
				newOffset = 0 - this.getRight()
					.element.getWidth();
			}
		} else if (distance > threshold || mustMove) {
			newOffset = 0;
		}
		this.moveMain(newOffset);
	},

	// prevent the drag if it's not from the top toolbar
	onDragStart: function (draggable, e) {
		// alert(JSON.stringify(draggable));
		if (!Ext.isDefined(this._dragI)) this._dragI = 0;

		var dragI = this._dragI,
			xpos = Ext.clone(draggable.offset)
				.x,

			// this is the method that makes sure the correct side is shown given draggable offset
			checkZIndices = function (draggable, dragI, lastxpos) {
				if (this._dragI != dragI) return;
				var xpos = Ext.clone(draggable.offset)
					.x;
				if ((xpos < 0 && lastxpos >= 0) || (xpos > 0 && lastxpos <= 0)) {
					if (xpos < 0) {
						this.getLeft()
							.setZIndex(1);
						this.getRight()
							.setZIndex(2);
					} else {
						this.getLeft()
							.setZIndex(2);
						this.getRight()
							.setZIndex(1);
					}
				}

				Ext.defer(checkZIndices, 50, this, [draggable, dragI, xpos], false);
			};

		node = e.target;
		while (node = node.parentNode) {
			if (node.className && node.className.indexOf(this.getHandleSelector()) > -1) {
				Ext.defer(checkZIndices, 50, this, [draggable, dragI, xpos], false);
				return true;
			}
		}
		return false;
	},

	onDragEnd: function (draggable, e) {
		this._dragI++;
		this.mainSnapTo(draggable, e);
	},

	// show or hide the left
	toggleLeftMenu: function () {
		if (this._leftShown) {
			this.moveMain(0);
		} else {
			Ext.getCmp('foodSearch').hide();
			Ext.getCmp('menus').show();
			// Ext.getCmp('one').setIconCls('arrow_up');
			this.getLeft().setZIndex(2);
			this.getRight().setZIndex(1);
			this.moveMain(this.getLeft().element.getWidth());
		}
	},
	//show hide search box 
	toggleLeftSearch: function () {
		if (this._leftShown) {
			this.moveMain(0);
		} else {
			Ext.getCmp('menus').hide();
			Ext.getCmp('foodSearch').show();
			this.getLeft().setZIndex(2);
			this.getRight().setZIndex(1);
			this.moveMain(this.getLeft().element.getWidth());
		}
	},
	// show or hide the right
	toggleRight: function () {
		if (this._rightShown) {
			this.moveMain(0);
		} else {
			this.getLeft().setZIndex(1);
			this.getRight().setZIndex(2);
			this.moveMain(0 - this.getRight().element.getWidth());
		}
	},
	// move the main container
	moveMain: function (offset, callback) {
		
		var list = Ext.getCmp('customerfeedbackformpanel');
		try{
		if (list.isHidden()) { // do nothing
			}else {
				Ext.getCmp('customerfeedbackformpanel').hide({type: 'fadeOut',duration: 100});
			// list.hide();
		}
		}catch(err){}
		
		//Ext.getCmp('customerfeedbackformpanel').hide({type: 'fadeOut',duration: 100});
		
		//Ext.getCmp('customertakeatour').hide({type: 'fadeOut',duration: 100});
		offset = offset && Ext.isNumber(offset) ? offset : 0;
		this._leftShown = offset > 0 ? true : false;
		this._rightShown = offset < 0 ? true : false;
		var draggable = this.getMain().draggableBehavior.draggable;
		if (Ext.isFunction(callback)) {
			var translatable = draggable.getTranslatable();
			var hereCallback = Ext.bind(function () {
				translatable.un('animationend', hereCallback);
				callback();
			}, this);
			translatable.on('animationend', hereCallback);
		}
		draggable.setOffset(offset, 0, {duration: 100});
		if (offset == 0) {
			// make sure content container is not masked
			//Ext.getCmp('sideMenuItems').setIconCls('list');
			Ext.getCmp('customermenubuttons').setHtml('');
			Ext.getCmp('sideMenuItems').show({type: 'fadeIn',duration: 100});
			Ext.getCmp('sideSearchItems').show({type: 'fadeIn',duration: 100});
			Ext.getCmp('sideFeedbackButton').show({type: 'fadeIn',duration: 100});
			//Ext.getCmp('customerfeedbackformpanel').hide({type: 'fadeOut',duration: 100});
			this.getMain().setMasked(false);
			/*this.getMain().setMasked({
			       		xtype: 'loadmask'
			           , html:"<img src='http://all-ez.com/images/smiling.gif'/>"
			           , message: ''
			           , indicator:false
			       
			   });*/
		} else {
			Ext.getCmp('customer_main_content').setCls('set_bg_none');
			Ext.getCmp('customermenubuttons').setHtml('<img src="resources/images/customer/tabmenu-open-icon.png">');
			Ext.getCmp('sideMenuItems').hide({type: 'fadeOut',duration: 100});
			Ext.getCmp('sideSearchItems').hide({type: 'fadeOut',duration: 100});
			Ext.getCmp('sideFeedbackButton').hide({type: 'fadeOut',duration: 100});
			this.getMain()
				.setMasked({
					transparent: true,
					listeners: {
						tap: {
							fn: this.moveMain,
							scope: this
						}
					}
				});
		}
	}
});