var OverView = function (container, model){

    //back to search button
    var overViewName = container.find("#overViewName");
    this.infoBackToSearch = container.find("#infoBackToSearch");

    //Dinner overview 
    this.printFullRecipe = container.find("#printFullRecipe");
    var overViewSpan = container.find("#overViewSpan");
    var totMenuPrice = container.find("#totMenuPrice");
  
    this.update = function(){

      var fullMenu = model.getFullMenu();
      var menuPrice = 0;
      var myHTML = '';
  
      for(i in fullMenu){
        var dish = fullMenu[i];
        var dishPrice = model.getDishPrice(dish.ingredients);
        menuPrice += dishPrice;
        myHTML += "<div class='col-sm-4'> <a href='#' class='thumbnail'> <img src='images/"
        +dish.image+"'><div class='caption'><span>"
        +dish.name+ "</span><div class='redmoney'> <span>"
        +dishPrice+" SEK</span></div></div></a></div>";
      }
      overViewName.html("My dinner: "+ model.getNumberOfGuests()+" people");
      overViewSpan.html(myHTML);
      totMenuPrice.html(menuPrice+" SEK");     
    }
    model.addObserver(this);
  }
  