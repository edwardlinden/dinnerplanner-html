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
    var ingredQuant = [];
    var ingredPrice = [];
    img.html("<div class='loader'></div>");
  
    this.update = function(){
      img.html("<div class='loader'></div>");
      var num = model.getNumberOfGuests();
      var dish = model.getCurrentDish();
      console.log(dish);
      var myHTML = '';
      var totPrice = 0;
  
      for(i in dish.extendedIngredients){
        var name = dish.extendedIngredients[i].name;
        var unit = dish.extendedIngredients[i].unit;
        var quantity = dish.extendedIngredients[i].amount*num;
        ingredQuant.push(quantity);
        var price = dish.extendedIngredients[i].amount*num;
        ingredPrice.push(price)
        totPrice += price;
        myHTML += "<tr><td id='ingrnum'>"+quantity+"<td/><td>"+unit+"</td><td>"+name+"</td><td>SEK</td><td id='ingrnum'>"+price+"</td></tr>";
        dishIngredients.html( myHTML );
      }
  
      var ingredFor = "INGREDIENTS FOR "
      var people = " PEOPLE"
      numGuestIngred.html(ingredFor+num + people);
      totCostDish.html(totPrice + " SEK");

      img.html("<img src='"+ dish.image +"'> <div class='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis varius nisi, eu scelerisque ex. Cras faucibus posuere erat eu auctor. Integer molestie nulla quam, at ultrices neque maximus eu. In non risus at dolor sollicitudin euismod. In vel est non ipsum pellentesque aliquet gravida nec risus. Praesent nisi ligula, tristique vitae aliquet a, venenatis nec elit. Suspendisse orci massa, venenatis vitae magna in, finibus pretium quam. Curabitur sit amet facil </div>");
      dishDescription.html(dish.instructions);
      dishNameBox.html(dish.title);


    }
  }
  

  