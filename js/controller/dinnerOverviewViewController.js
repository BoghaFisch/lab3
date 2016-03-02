var DinnerOverviewViewController = function(app, view, model ) {
  view.numberOfGuestsInput.change(function() {
    model.setNumberOfGuests(document.getElementById("numberOfGuestsInput").value);
  });
  view.confirmButton.click(function(){
    app.showView("dinnerSummary");
  });
  $(".mainContainer").on("click", "#rmStarter", function() {
    model.removeDishFromMenu(model.getFullMenu()[0].id);
  });
  $(".mainContainer").on("click", "#rmMain", function() {
    model.removeDishFromMenu(model.getFullMenu()[1].id);
  });
  $(".mainContainer").on("click", "#rmDessert", function() {
    model.removeDishFromMenu(model.getFullMenu()[2].id);
  });
}
