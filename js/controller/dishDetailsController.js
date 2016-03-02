var DishDetailsController = function(app, view, model ) {
  $("#dishDetailsView").on("click", "#backToSelectButton", function() {
    model.setDetailedDish(null);
    app.showView("selectDish");
  });
  $("#dishDetailsView").on("click", "#confirmDishButton", function() {
    model.addDishToMenu(model.getDetailedDish().id);
    model.setDetailedDish(null);
    app.showView("selectDish");
  });
}
