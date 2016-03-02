var DinnerSummaryViewController = function(app, view, model ) {
  $("#dinnerSummaryView").on("click", "#printRecipeButton", function() {
    app.showView("dinnerInstructions");
  });
  $("#dinnerSummaryView").on("click", ".backToEditButton", function() {
    app.showView("selectDish");
  });
}
