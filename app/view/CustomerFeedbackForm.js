Ext.define('Neoceres.view.CustomerFeedbackForm', {
	extend: 'Ext.Panel',
	alias: 'widget.customerfeedbackform',
	config: {
		layout: 'vbox',
		id: 'customerfeedbackformpanel',
		//cls:'border_color',
		style: 'background-color: #FFFFFF ;',
		styleHtmlContent: true,
		hidden: true,
		modal: true,
		Draggable:true,
		hideOnMaskTap: true,
		height: '80%',
		width: '75%',
		margin: '5em 10em 10em 10em',
		//margin: '5% 10% 10% 10%',
		scrollable: 'vertical',
		items: [
			{
				layout: 'hbox',
				style: 'background-color: #7EB105 ;',
				flex: 1,
				items: [{
					html: 'Feedback Form'
				}, {
					xtype: 'button',
					docked: 'right',
					iconCls: 'delete',
					ui: 'confirm',
					handler: function (button) {
						Ext.getCmp('customerfeedbackformpanel')
							.hide({
								type: 'fadeOut',
								duration: 1000
							});
						Ext.getCmp('customer_main_content').setCls('set_bg_none');
					}
				 }]
        },
			{
				html: 'We would appreciate your taking time to complete fallowing feedback form.',
				style: 'background-color: #A4A4A4;',
				flex: 1
        },
			{
				layout: 'hbox',
				style: 'background-color: #FFFFFF;',
				flex: 8,
				items: [{
					xtype: 'fieldset',
					title: 'Please fill your details',
					id: 'srch2323',
					flex: 1,
					items: [
						{
							xtype: 'textfield',
							placeHolder: 'Your Name'
						}, {
							xtype: 'emailfield',
							placeHolder: 'Your Email ID'
						}, {
							xtype: 'numberfield',
							placeHolder: 'Your Phone'

						}, {
							xtype: 'textfield',
							placeHolder: 'Your Address'

						}, {
							xtype: 'datepickerfield',
							placeHolder: 'Your Birthday'
							
						}, {
							xtype: 'datepickerfield',
							placeHolder: 'Your Anniversary'
							
						}, {
							xtype: 'textfield',
							placeHolder: 'Others'
						}


					]
						}, {
					xtype: 'fieldset',
					title: 'Please Evaluate the following',
					id: 'srchww',
					flex: 2,
					layout: 'vbox',
					defaults: {
						margin: '.10em 0 .3em .3em'
					},
					items: [
						{
							xtype: 'fieldset',
							title: 'Taste',
							layout: 'hbox',
							defaults: {
								labelWidth: '100px'
							},
							items: [
								{
									xtype: 'radiofield',
									name: 'taste',
									value: 'poor',
									label: 'Poor',
									flex: 1
						}, {
									xtype: 'radiofield',
									name: 'taste',
									value: 'average',
									label: 'Average',
									flex: 1
						}, {
									xtype: 'radiofield',
									name: 'taste',
									value: 'good',
									label: 'Good',
									flex: 1
						}, {
									xtype: 'radiofield',
									name: 'taste',
									value: 'excelent',
									label: 'Excelent',
									flex: 1
						}

						]
						},
						{
							xtype: 'fieldset',
							title: 'Presentation',
							layout: 'hbox',
							defaults: {
								labelWidth: '100px'
							},
							items: [
								{
									xtype: 'radiofield',
									name: 'prsnt',
									value: 'poor',
									label: 'Poor',
									flex: 1

						}, {
									xtype: 'radiofield',
									name: 'prsnt',
									value: 'average',
									label: 'Average',
									flex: 1
						}, {
									xtype: 'radiofield',
									name: 'prsnt',
									value: 'good',
									label: 'Good',
									flex: 1
						}, {
									xtype: 'radiofield',
									name: 'prsnt',
									value: 'excelent',
									label: 'Excelent',
									flex: 1
						}
						]
						},
						{
							xtype: 'fieldset',
							title: 'Service',
							layout: 'hbox',
							defaults: {
								labelWidth: '100px'
							},
							items: [
								{
									xtype: 'radiofield',
									name: 'serv',
									value: 'poor',
									label: 'Poor',
									flex: 1
						}, {
									xtype: 'radiofield',
									name: 'serv',
									value: 'average',
									label: 'Average',
									flex: 1
						}, {
									xtype: 'radiofield',
									name: 'serv',
									value: 'good',
									label: 'Good',
									flex: 1
						}, {
									xtype: 'radiofield',
									name: 'serv',
									value: 'excelent',
									label: 'Excelent',
									flex: 1
						}
						]
						},
						{
							xtype: 'fieldset',
							title: 'Bevarage Selection',
							layout: 'hbox',
							defaults: {
								labelWidth: '100px'
							},
							items: [
								{
									xtype: 'radiofield',
									name: 'bvrg',
									value: 'poor',
									label: 'Poor',
									flex: 1
						}, {
									xtype: 'radiofield',
									name: 'bvrg',
									value: 'average',
									label: 'Average',
									flex: 1
						}, {
									xtype: 'radiofield',
									name: 'bvrg',
									value: 'good',
									label: 'Good',
									flex: 1
						}, {
									xtype: 'radiofield',
									name: 'bvrg',
									value: 'excelent',
									label: 'Excelent',
									flex: 1
						}
						]
						},
					]
						}]
        },
			{
				layout: 'hbox',
				defaults: {
					labelWidth: '100px'
				},
				items: [
					{
						xtype: 'spacer',
						flex: 5
						}, {
						xtype: 'button',
						ui: 'action',
						iconMask: true,
						text: 'Submit Feedback'
						}
						]
		}

    ]
	}
});