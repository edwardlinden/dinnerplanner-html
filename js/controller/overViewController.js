var OverViewController = function (view, model, app) {

    //back to search button
    view.infoBackToSearch.click(function(){
      app.showSelectDishAgainScreen();
      app.showDishScreen();
    });

    view.printFullRecipe.click(function(){
      app.showDinnerPrintOutScreen();
    });
  
  };
  