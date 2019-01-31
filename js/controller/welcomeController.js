var WelcomeController = function(view, model, app){
    view.enter.click(function(){
        app.showSelectDishScreen();
        app.showDishScreen();
    })
}