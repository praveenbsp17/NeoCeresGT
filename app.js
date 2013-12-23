/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Ext.ux': 'src/ux',
    'Neoceres': 'app',
  //  'Sqlite': 'sqlite'
});
Ext.application({
    name: 'Neoceres',

    requires: [
        'Ext.MessageBox',
		'Ext.Anim',
        'Neoceres.util.InitSQLite'
    ],
	models:[
		'FoodMenuList',
		'UserRole',
		'WaitingList',
		'MenuData',
		'OrderDetailData',
		'OrderDetail',
		'ForceModifications',
		'RecipeObjectURL',
		'KitchenBar',
		'ImageTable',
		'Ratings',
		'DBDetails',
		'TakeawayOrderDetailData',
		'LoginDetails',
		'Orders',
		'Tables',
		'Menu',
		'MenuItem',
		'MenuitemForcemodMapping',
		'UIMenu',
		'Tax',
		'TableBooking',
		'SubMenuMenuItem',
		'SubMenu',
		'Role',
		'RecipeObject',
		'RecipeIngredient',
		'RecipeCategory',
		'Recipe',
		'Airhostess',
		'OrderInstruction',
		'MenuSubMenu',
		'FloorPlan',
		'MenuItemTax',
		'RoleUIMenu',
		'IngredientCategory',
		'Unit',
		'Restaurant',
		'Employee',
		'CustomerFeedback',
		'Customer',
		'TableGroup',
		'Branch',
		'GlobalObject1',
		'BillTax',
		'Billing',
		'EmployeeTable',
		'Ingredient'
    ],
    
    stores: [
             'FoodMenuList',
             'UserRole',
             'WaitingList',
             'MenuData',
             'OrderDetailData',
             'OrderDetail',
             'ForceModifications',
             'RecipeObjectURL',
             'KitchenBar',
             'ImageTable',
             'Ratings',
             'DBDetails',
             'TakeawayOrderDetailData',
             'LoginDetails',
             'Orders',
             'Tables',
             'Menu',
             'MenuItem',
             'RoleUIMenu',
             'IngredientCategory',
             'Unit',
             'Restaurant',
             'Employee',
             'CustomerFeedback',
             'Customer',
             'TableGroup',
             'Branch',
             'GlobalObject1',
             'BillTax',
             'Billing',
             'EmployeeTable',
             'Ingredient'
             ],
   
    views: [
        'Main', 'Loginform', 'Video', 'CustomerMainView',
        'ListItem',
		'CustomerFeedbackForm',
		'CustomerFoodItems',
		'CustomerOrderStatus',
		'CustomerFoodItemsHeader'
    ],
	controllers: [
        'CustomerMainController'
    ],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        //Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Neoceres.view.Main'));
		//Ext.create('Neoceres.view.Main');

    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});