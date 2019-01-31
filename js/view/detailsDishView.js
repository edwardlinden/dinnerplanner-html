var DetailsDishView = function(container, model){

    this.backtoselectdish = container.find("#backtoselectdish");
    this.addtomenu = container.find("#addtomenu");
    var dishIngredients = container.find("#dishIngredients");
    var img = container.find("#img");
    var dishCaption = container.find("#dishCaption");
    var dishDescription = container.find("#dishDescription");
    var numGuestIngred = container.find("#numGuestIngred");
    var totCostDish = container.find("#totCostDish");
    var dishNameBox = container.find("#dishNameBox");
  
    this.displayDish = function() {
      var id = model.getDishId();
      var dish = model.getDish(id);
      var dishName = dish.name;
  
      img.html("<img src='images/"+ dish.image +
      "'> <div class='caption'>Lorem Ipsum är en utfyllnadstext från tryck- och"
      + "förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet," 
      + "när en okänd boksättare tog att antal bokstäver och blandade dem för att göra"
      + " ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden,"
      + "utan även övergången till elektronisk typografi utan större förändringar. Det blev "
      + "allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem "
      + "Ipsum, och senare med mjukvaror som Aldus PageMaker. </div>");
  
      dishDescription.html(dish.description);
      dishNameBox.html(dishName);
    }
  
    this.update = function(){
  
      var id = model.getDishId();
      var nume = model.getNumberOfGuests();
      var dish = model.getDish(id);
      var dishPrice = model.getDishPrice(dish.ingredients);
      var myHTML = '';
  
      for(i in dish.ingredients){
        var name = dish.ingredients[i].name;
        var unit = dish.ingredients[i].unit;
        var quantity = dish.ingredients[i].quantity*nume;
        var price = dish.ingredients[i].price*nume;
        myHTML += "<tr><td>"+quantity+" "+unit+"</td><td>"+name+"</td><td>SEK</td><td>"+price+"</td></tr>";
        dishIngredients.html( myHTML );
      }
  
      var ingredFor = "INGREDIENTS FOR "
      var people = " PEOPLE"

      numGuestIngred.html(ingredFor+nume + people);
      totCostDish.html(dishPrice + " SEK");
    }
  }
  