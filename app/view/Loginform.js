Ext.define('Neoceres.view.Loginform', {
	extend: 'Ext.form.Panel',
	requires: [
        'Ext.form.FieldSet',
		'Ext.field.Password'
	],
    xtype: 'Loginform',
    cls: 'loginFormMainContainer',
    id: 'loginformPanel',
    hidden: true,
    config: {
		showAnimation: {
            type: 'slide',
            direction: 'down'
        },
		hideAnimation: {
            type: 'slideOut',
            direction: 'up',
			listeners: {
			animationend: function(evt, obj) {
			  Ext.getCmp('loginButtonShowId').removeCls('visiblity-hidden');
			 }
			}
        },
		items: [{
			xtype: 'container',
			cls: 'loginFormContainer',
			items: [{
				xtype         : 'textfield',
				name          : 'name',
				placeHolder   : 'Username',
				required      : true,
				cls           : 'loginUserNameField',  
				},
				{
				xtype         : 'passwordfield',
				name          : 'password',
				placeHolder   : 'Password',
				required      : true,
				cls           : 'loginPasswordField'
				},
			   {
				xtype         : 'button',
				name          : 'loginformSubmit',
				cls           : 'loginformButton'
			  }]
		 },
		 {
			xtype: 'container',
			layout: {
			 type : 'hbox',
			 pack: 'right',
			 align: 'stretch' 
			},
			items: [{
			   xtype: 'button',
			   cls: 'loginButtonImg',
			   id: 'loginButtonCloseId',
			   handler: function() {
			     var loginPanel = Ext.getCmp('loginformPanel');
				 loginPanel.hide();				 
			   }
			}]
		 }]	  
    }
});
