
var SidebarView = function (container, model) {

	this.minusButton = container.find("#minusGuest");
	this.plusButton = container.find("#plusGuest");
	var numberOfGuests = container.find("#numberOfGuests");
	numberOfGuests.html(model.getNumberOfGuests());
  
	this.update = function(){
	  var sekTotal = container.find("#sekTotal");
	  var dishMenu = container.find("#dishMenu");
	  numberOfGuests.html(model.getNumberOfGuests());
	  var dishMenu = container.find("#dishMenu");
	  var myHTML = '';
	  var totMenuPrice = 0;
  
	  var menu = model.getFullMenu();
	  for(i in menu){
		var dish = menu[i];
		var dishName = dish.title;
		var dishPrice = model.getDishPrice(dish.extendedIngredients);
		totMenuPrice += dishPrice;
		myHTML += '<li><div class="col-xs-8 font8">'
		+dishName+'</div></li><li><div class="col-xs-4 font8">'
		+dishPrice+'</div></li>'
		dishMenu.html(myHTML);
		sekTotal.html(totMenuPrice + " SEK");
	  }
	}
  }
  
