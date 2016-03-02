var SelectDishView = function (container, model) {

  this.populateTable = function(type, filter) {
    // Populate dishesTable
    var dishesResultsTable = $("#dishesResultsTable");
    dishesResultsTable.empty();
    if (filter != null) {
      var dishes = model.getAllDishes(type, filter);
    }
    else {
      var dishes = model.getAllDishes(type);
    }
    var i = 0;
    var resultsString = "<tr id='firstRow'>";
    for (; i < dishes.length; i++) {
      // For every 4th dish, make a new row in the beginning
      if (i % 5 == 0) {
        resultsString += "</tr><tr>";
      }
      // Append the image, name and description to table
      resultsString += "<td><figure class='dishResultsFigure'><a href='#'><img class='dishResultsImage' id='dish"+dishes[i].id+"' src='images/"+dishes[i].image+"'></a><figcaption style='text-align:center;'>"+dishes[i].name+"</figcaption></figure>";
      resultsString += "<div class='dishDescription'>"+dishes[i].description+"</div></td>";

    }
    // Add remaining td's for sizing
    while (i % 5 != 0) {
      resultsString += "<td></td>";
      i++;
    }
    resultsString +="</tr>";
    dishesResultsTable.append(resultsString);
  }
  this.show = function() {
    // Show container
    container.show();

  }
  this.hide = function() {
    container.hide();
  }

  this.container = container;
  // Finally, populate the dishes table
  this.populateTable("starter");
}
