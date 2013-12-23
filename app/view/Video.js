/**
 * Demonstrates the Ext.Video component
 */
Ext.define('Neoceres.view.Video', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Video'
    ],
	xtype: 'videoPage',
	id: 'videoContainer',
    config: {
        layout: 'fit',
		id: 'videoContainer',
        items: [{
            xtype: 'video',
            url: ['resources/media/BigBuck.m4v', 'resources/media/BigBuck.webm'],
            loop: true,
            posterUrl: 'resources/images/cover.jpg'
        }]
    }
});
