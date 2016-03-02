var DinnerOverviewView = function (container, model) {

  // Populate the table of selected dishes
  this.populateTable = function() {
    // Clear the previous table
    $('#dishesTable tbody').remove();

    // Generate data for the table
    $("#numberOfGuestsInput").val(model.getNumberOfGuests());
    var menu = model.getFullMenu();

    // If starter selected, append starter
    if (menu[0] != null) {
      $("#dishesTable").append("<tr class='dtItem'><td id='numOfCourse'>"+model.getNumberOfGuests()+"</td><td>"+menu[0].name+"</td><td class='totCoursePrice'>"+
        model.getDishPrice(menu[0])+"</td><td><a href='#'><span class='glyphicon glyphicon-remove' id='rmStarter'></span></a></td></tr>");
    }
    // If main selected, append main
    if (menu[1] != null) {
      $("#dishesTable").append("<tr class='dtItem'><td id='numOfCourse'>"+model.getNumberOfGuests()+"</td><td>"+menu[1].name+"</td><td class='totCoursePrice'>"+
        model.getDishPrice(menu[1])+"</td><td><a href='#'><span class='glyphicon glyphicon-remove' id='rmMain'></span></a></td></tr>");
    }
    // If dessert selected, append dessert
    if (menu[2] != null) {
      $("#dishesTable").append("<tr class='dtItem'><td id='numOfCourse'>"+model.getNumberOfGuests()+"</td><td>"+menu[2].name+"</td><td class='totCoursePrice'>"+
        model.getDishPrice(menu[2])+"</td><td><a href='#'><span class='glyphicon glyphicon-remove' id='rmDessert'></span></a></td></tr>");
    }
    if (!model.menuFull()) {
      $("#dishesTable").append("<tr><td></td><td>Pending</td><td id='pendingPrice'>0</td><td></td></tr>");
    }
    this.dishesTable.append("<tr><td colspan=4><hr class='breakLine'></td></tr>");
    this.dishesTable.append("<tr><td></td><td></td><td id='totalMenuPrice' colspan=2>SEK:"+model.getTotalMenuPrice()+"</td></tr>");
  }
  // Show container
  this.show = function() {
    container.show();
  }
  // Hide container
  this.hide = function() {
    container.hide();
  }
  // Update
  this.update = function(obj) {
    if (obj == "menu" || obj == "guests")
      this.populateTable();
  }
  
  this.container = container;

  // Populate container with header and table
  container.append('<div id="overviewTop"><h3>My dinner</h3><label>People: </label> <input type="number" id="numberOfGuestsInput"></div>');
  container.append('<table class=".table col-md-12" id="dishesTable"><thead><tr id="dishesTableHeader"><th class="col-md-1"></th><th class="col-md-8">Dish</th><th class="col-md-2">Cost</th>'+
  '<th></th></tr></thead></table>');
  container.append("<button type='submit' class='btn btn-default' id='confirmButton'>Confirm dinner</button>");

  this.dishesTable = $("#dishesTable");
  this.numberOfGuestsInput = $("#numberOfGuestsInput");
  this.confirmButton = $("#confirmButton");

  // Call populate table
  this.populateTable();

  // Register as a listener on the model
  model.addObserver(this);
}
