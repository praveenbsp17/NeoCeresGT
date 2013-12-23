Ext.define('Neoceres.model.FoodMenuList', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ {
			name : 'text',
			type : 'string'
		} ],

		/*proxy : {
			type : 'sqlitestorage',
			dbConfig : {
				tablename : 'FoodMenuList',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}*/
	}
});
