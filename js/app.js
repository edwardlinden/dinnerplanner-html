$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	this.type = "All dishes";
	this.filter = "";

	var welcome = $("#welcomeView");
	var dishSearch = $("#dishSearchView");
	var sidebar = $("#sidebarView");
	var notConfirmDinner = $("#notConfirmDinner");
	this.dinnerConfirm = $("#dinnerConfirm");
	var detailsDish = $("#detailsDishView");
	var dishes = $("#dishView");
	var dinneroverview = $("#dinnerOverView");
	var dinnerprintout = $("#dinnerPrintOutView");
	var dinnerOverView = $("#dinnerOverView");

	var welcomeView = new WelcomeView(welcome, model);
	new WelcomeController(welcomeView, model, this);

	var sidebarView = new SidebarView(sidebar, model);
	new SidebarController(sidebarView, model, this);

	var dishSearchView = new DishSearchView(dishSearch, model);
	new DishSearchController(dishSearchView, model, this);

	var dishView = new DishView(dishes, model, this);

	var detailsDishView = new DetailsDishView(detailsDish, model);
	new DetailsDishController(detailsDishView, model, this);

	var overView = new OverView(dinnerOverView, model);
	new OverViewController(overView, model, this);

	new PrintOutView(dinnerprintout, model);


	// show or hide all screens
	this.showSelectDishScreen = function(){
		dishSearch.show();
		sidebar.show();
		welcome.hide();
		detailsDish.hide();
		dishes.hide();
		this.dinnerConfirm.hide();
	}

	this.showDishScreen = function(){
		dishes.show();
		dishView.displayDishes(this.type, this.filter);
	}

	this.showDishDetailsScreen= function(){
		dishSearch.hide();
		sidebar.show();
		welcome.hide();
		detailsDish.show();
		detailsDishView.displayDish();
	}

	this.showSelectDishAgainScreen= function(){
		dishSearch.show();
		sidebar.show();
		welcome.hide();
		detailsDish.hide();
		dishes.hide();
		dinneroverview.hide();
		this.dinnerConfirm.show();
		notConfirmDinner.hide();

}
this.showDinnerOverviewScreen= function(){
		dishSearch.hide();
		sidebar.hide();
		detailsDish.hide();
		dishes.hide();
		dinneroverview.show();
	}

this.showDinnerPrintOutScreen= function(){
		dinneroverview.hide();
		dinnerprintout.show();
	}
		dishSearch.hide();
		sidebar.hide();
		detailsDish.hide();
		dinneroverview.hide();
		dinnerprintout.hide();


});
