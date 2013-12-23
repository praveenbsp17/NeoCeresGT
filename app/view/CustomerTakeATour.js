Ext.define('Neoceres.view.CustomerTakeATour', {
	extend: 'Ext.Panel',
	alias: 'customertakeatour..customertakeatour',
	requires: [
	           'Ext.Video'
	       ],
	config: {
		layout: 'vbox',
		id: 'customertakeatour',
		//styleHtmlContent: true,
		//hidden: true,
		style: 'background-color: #000 ;',
		modal: true,
		hideOnMaskTap: true,
		height: '60%',
		width: '50%',
		//margin: '5em 10em 10em 10em',
		margin: '10% 0% 0 25%',
		items: [
			{
				layout: 'fit',
				style: 'background-color: #190707 ;',
				flex: 1,
				items: [{
					xtype: 'button',
					docked: 'right',
					iconCls: 'delete',
					ui: 'confirm',
					handler: function (button) {
						Ext.getCmp('customertakeatour').hide({
							type: 'fadeOut',
							duration: 1000
							});
						Ext.getCmp('customer_main_content').setCls('set_bg_none');
					}
				}]
			},{
				xtype: 'video',
				flex:9,
				url: ['resources/media/BigBuck.m4v', 'resources/media/BigBuck.webem'],
				loop: true,
				posterUrl: 'resources/images/cover.jpg'
		        }
		    ],
		    handler: function (button) {
		    	alert("test");
			}
	}
});