Ext.define('Neoceres.model.Tax', {
	extend : 'Ext.data.Model',

	config : {
		fields : [ {
			name : 'ID',
			type : 'integer'
		}, {
			name : 'TaxName',
			type : 'string'
		}, {
			name : 'TaxDescription',
			type : 'string'
		}, {
			name : 'TaxPercentage',
			type : 'number'
		}, {
			name : 'TaxMandatory',
			type : 'boolean'
		}, {
			name : 'BranchID',
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
				tablename : 'Tax',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}
});