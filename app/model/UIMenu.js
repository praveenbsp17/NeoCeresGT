Ext.define('Neoceres.model.UIMenu', {
	extend : 'Ext.data.Model',

	config : {
		fields : [ {
			name : 'ID',
			type : 'integer'
		}, {
			name : 'UIMenuName',
			type : 'string'
		}, {
			name : 'Description',
			type : 'string'
		}, {
			name : 'UIMenuID',
			type : 'integer'
		}, {
			name : 'IsActive',
			type : 'boolean'
		}, {
			name : 'CreatedByUID',
			type : 'integer'
		}, {
			name : 'CreatedDate',
			type : 'date'
		}, {
			name : 'ModifiedByUID',
			type : 'integer'
		}, {
			name : 'ModifiedDate',
			type : 'date'
		} ],

		proxy : {
			type : 'sqlitestorage',
			dbConfig : {
				tablename : 'UIMenu',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}
});