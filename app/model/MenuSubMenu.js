Ext.define("Neoceres.model.MenuSubMenu", {
	extend : "Ext.data.Model",

	config : {
		fields : [ {
			name : "ID",
			type : "integer"
		}, {
			name : "Position",
			type : "integer"
		}, {
			name : "Tags",
			type : "string"
		}, {
			name : "BranchID",
			type : "integer"
		}, {
			name : "MenuID",
			type : "integer"
		}, {
			name : "SubMenuID",
			type : "integer"
		}, {
			name : "ParentSubMenuID",
			type : "integer"
		}, {
			name : "IsActive",
			type : "boolean"
		}, {
			name : "CreatedByUID",
			type : "integer"
		}, {
			name : "CreatedDate",
			type : "date"
		}, {
			name : "ModifiedByUID",
			type : "integer"
		}, {
			name : "ModifiedDate",
			type : "date"
		} ],

		proxy : {
			type : 'sqlitestorage',
			dbConfig : {
				tablename : 'MenuSubMenu',
				dbConn : Neoceres.util.InitSQLite.getConnection()
			}
		}
	}
});