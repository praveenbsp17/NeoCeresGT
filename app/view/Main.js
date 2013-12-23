Ext.define('Neoceres.view.Main', {
	extend: 'Ext.Container',
	xtype: 'main',
	cls: 'mainPage',
    id: 'mainPanel',
    config: {
        layout: {
		   type: 'vbox',
		   align: 'stretch'
		},
		items: [{
		   xtype: 'container',
           itemId: 'homePageHeader',
           height: 50, 
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults : {
			 xtype: 'container',             
			},
            items: [{
			   height: 5,
               style: 'background-color: #ff0000',
			   layout : 'vbox'   
			},
			{
				xtype: 'container',
                layout: {
						 type : 'hbox',
						 pack: 'right',
                         align: 'start'						 
						},
				 height: 45,	
				 items: [
					 { 
					    xtype: 'panel',
                        id: 'loginPanelContainer',
                        items: [{
						  xtype: 'Loginform'						  	  
						}]
				     },
					 {
                        xtype: 'button',
                        cls: 'loginButtonImg',
						id: 'loginButtonShowId',
                        style: 'margin-right:42px',
						handler: function() {
							var loginPanel = Ext.getCmp('loginformPanel');
							/*if (!loginPanel.isHidden()) {
								loginPanel.hide();
								Ext.getCmp('loginButton').removeCls('visiblity-hidden');
							} else {*/
								loginPanel.show();
								Ext.getCmp('loginButtonShowId').addCls('visiblity-hidden');			
							//}
						},
					    scope: this
                    }]
			}]		   
		 },
		 {
		   xtype: 'container',
           layout: {
						 type : 'hbox',
						 pack: 'center',
                         align: 'stretch' 
						},
			 margin: 5,	
			 items: [{
							 html: '<img src="resources/css/img/neoceres-logo-img.png">'
					 }]	  
          
		 },
         {
		   xtype: 'container',
           layout: {
						 type : 'hbox',
						 pack: 'center',
                         align: 'stretch' 
						},
			 margin: 5,	
			 items: [{
							 html: 'Place orders with in 3 Easy Steps',
	                         style: 'font-size:25pt; color:#ff0000'
					 }]	  
          
		 },
         {
		   xtype: 'container',
           layout: {
						 type : 'hbox',
						 pack: 'center',
                         align: 'center' 
						},
			 margin: 5,
			 defaults: {
				style: 'font-size:18pt; color:#333333',
                margin: 5
			 },				 
			 items: [{
							 html: '<img src="resources/css/img/choose-food-icon.png">'                         
					 },
					 {
							 html: 'Choose order food'
					 },
					 {
							 html: '<img src="resources/css/img/confirm-food-icon.png">'	                         
					 },
					 {
							 html: 'Confirm order food'	                         
					 },
					 {
							 html: '<img src="resources/css/img/get-food-icon.png">'	                         
					 },
					 {
							 html: 'Get your order food'                        
					 }]	  
          
		 },
		 {
		   xtype: 'container',
           layout: {
			 type : 'hbox'
			},
            items: [{
			    layout: {
			    type : 'hbox',				
			    },
				flex: 2		
			  },
			  {
		      xtype: 'videoPage',
			  layout: {
			    type : 'hbox',				
			    },
			  flex: 4
			  },
			  {
			    layout: {
			    type : 'hbox',				
			    },
				flex: 2
			 }],
           flex: 6,
		   margin: 5
		 },
		 {
		   xtype: 'container',
		   layout: {
			 type : 'hbox',
			 pack: 'right',
			 align: 'center' 
			},
            items: [
					 {
                        xtype:'button',
						cls:'skipButton',
						//html: '<img src="resources/css/img/skip-button.png">',
					    style: 'margin-right:40px'	,
							handler:function(){
							
														Ext.Viewport.animateActiveItem((
														Ext.create('Neoceres.view.CustomerMainView')),
														{type: 'slide',duration: 500, direction:'left'}).show();
							}
                    }],
           flex: 1,
		   margin: 5
	  }]
        
    }
});
