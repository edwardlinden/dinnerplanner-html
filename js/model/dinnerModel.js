//DinnerModel Object constructor

var DinnerModel = function(amountOfGuests, type) {
	// implementing the data structure that will hold amount of guests
	// and selected dishes for the dinner menu
	var amountOfGuests = 1;
	var type = [];
	var observers = [];
	var menu = [];
	var currentDish;
  
	var notifyObservers = function(obj) {
	  for(var i=0; i<observers.length; i++){
		observers[i].update(obj);
	  }
	}
  
	this.addObserver = function(observer) {
	  observers.push(observer);
	}
  
  // setting the value for the number of guests
	this.setNumberOfGuests = function(amount) {
	  if(amount > 0){
		amountOfGuests = amount;
	  }
	  else{
		amountOfGuests = 0;
	  }
	  notifyObservers(amount);
	  return amountOfGuests;
	}
  // returning the value for the number of guests
	this.getNumberOfGuests = function() {
	  return amountOfGuests;
	}
	// Set a current dish
	this.setCurrentDish = function(id){
		this.getDish(id, function(dish) {
		 currentDish = dish;
		 notifyObservers();
	 });
	}
  // returning the id of the selected dish
	this.getCurrentDish = function(id) {
	  return currentDish;
	}
	// returning the dish on the menu for selected type
	this.getSelectedDish = function(typein) {
	  for(dish in dishes){
		if(dishes[dish].type == typein){
		  type.push(dishes[dish]);
		}
	  }
	  return type;
	}
	// returning all dishes
	this.getFullMenu = function() {
	  return menu
	}
  // returning the price of a dish by sending the ingredient array to the function
	this.getDishPrice = function(ingredients){
	  var dishprice = 0;
	  for(i in ingredients){
		dishprice += ingredients[i].amount;
	  }
	  return dishprice*amountOfGuests;
	}
	// Adding the dish to the menu. If the dish of that type already exists on the menu
	// it is removed from the menu and the new one added.
	this.addDishToMenu = function(dish) {
	  menu.push(dish);
	  notifyObservers(dish);
	}
	
	// function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	// you can use the filter argument to filter out the dish by name or ingredient (use for search)
	// if you don't pass any filter all the dishes will be returned

	this.getAllDishes = function (type, filter, callback, callBackError) {

    $.ajax( {
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?query='+type+','+filter,
      headers: {
        'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'
			},
      success: function(data) {

        callback(data);
      },
      error: function(error) {
				callBackError(error);
      }
    })
  }


	// function that returns a dish of specific ID	
	this.getDish = function (id, callback, callBackError) {

    $.ajax( {
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/'+id+'/information',

      headers: {
        'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'
      },
      success: function(data) {
        callback(data);
      },
      error: function(error) {
				callBackError(error);
				
      }
    })
  }
    
}
  