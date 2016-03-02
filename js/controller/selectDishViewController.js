var SelectDishViewController = function(app, view, model ) {
  $("#dishesResults").on("click", ".dishResultsImage", function(event) {
    var id = event.target.id;
    id = id.replace("dish", "");
    model.setDetailedDish(model.getDish(id));
    app.showView("dishDetails");
  });
  $('#selectType').on('change', function() {
    var filter = $("#searchBox").val();
    if (filter != "")
      view.populateTable(this.value, filter);
    else {
      view.populateTable(this.value);
    }
  });
  $('#submitSearch').click(function(event) {
    event.preventDefault();
    var filter = $("#searchBox").val();
    var type = $("#selectType").val();
    view.populateTable(type, filter);
  });
}
