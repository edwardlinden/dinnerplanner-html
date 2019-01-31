var SidebarController = function (view, model, app) {
    model.addObserver(view);

    view.plusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });

    view.minusButton.click(function(){
    model.setNumberOfGuests(model.getNumberOfGuests() - 1);
    });

    app.dinnerConfirm.click(function(){
      app.showDinnerOverviewScreen();
    })

};
