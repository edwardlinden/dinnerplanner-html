var PrintOutView = function (container, model){
  model.addObserver(this);

  this.update = function(){
    container.html("");
    var myHTML = '';
    var menu = model.getFullMenu();
    var numOfGuests = model.getNumberOfGuests();

    for(i in menu){
      var ingredients = menu[i].ingredients;
      var ingrStr = '';
      for(ingr in ingredients){
        var quantity = ingredients[ingr].quantity*numOfGuests;
        var unit = ingredients[ingr].unit;
        var name = ingredients[ingr].name;
        ingrStr += ""+quantity+" "+unit+" "+name+"<br>";
      }

      myHTML += "<div class='row borderline'><div class='col-xs-12 col-sm-3'><a href='#' class='thumbnail'><img id='imagePrintOut' src='/images/"
      +menu[i].image+"'></a></div><div class='col-xs-12 col-sm-5'><div><div class='panel-heading'><h3 class='panel-title'>"
      +menu[i].name+"</h3></div><div class='panel-body'>"
      +ingrStr+"</div></div> </div><div class='col-xs-12 col-sm-4'><div><h4>PREPARATIONS</h4><div>"
      +menu[i].description+"</div></div>  </div></div>";
    }
    container.append(myHTML);
  }

}
