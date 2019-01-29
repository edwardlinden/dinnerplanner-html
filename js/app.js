$(function() {


	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView



	var home = $("#homeView");
	var homeV = new homeView(home, model);
	var homeC = new homeController(homeV, model, this);





// 	var sideBarView = new sidebarView($("#sidebarView"), model);
// 	var dishSearchView = new dishSearchView($("#dishSearchView"), model);
// 	var dishGetImageView = new dishGetImageView($("#dishGetImageView"), model);
// console.log("hello")
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see sidebarView.js).
	 */

});