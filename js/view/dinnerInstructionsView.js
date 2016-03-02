var DinnerInstructionsView = function (container, model) {

  this.populateTable = function() {
    var diView = $("#dinnerInstructionsView");
    diView.empty();

    // Append top navigation banner
    diView.append("<div class='row myDinnerBanner'><div class='col-md-6'><h3>My Dinner: "+model.getNumberOfGuests()
      +" people</h3></div><div class='col-md-6'><button type='submit' class='btn btn-default pull-right backToEditButton' id='iBackToEdit'>Go back and edit dinner</button></div></div>");

    // Create preparations-list
    var menu = model.getFullMenu();
    var ditString = "<table id='dinnerInstructionsTable'>";
    for (var i = 0; i < menu.length; i++) {
      if (menu[i] != null) {
        ditString += "<tr>";

        // Add image column
        ditString += "<td class='col-md-2 imageCol'><img class='instructionsImage' src='images/"+menu[i].image+"'></td>";

        // Add Dinner Description
        ditString += "<td class='col-md-4 desciptionCol'><h3>"+menu[i].name+"</h3>"+menu[i].description+"</td>";

        // Add preparations
        ditString += "<td class='col-md-6 preparationCol'><h4>Preparation</h4>"+menu[i].description+"</td></tr>";
      }
    }

    // Close table
    ditString += "</table>";

    // Append html to container
    diView.append(ditString);
  }

  // Shows view
  this.show = function() {

    // Show container
    container.show();
  }
  // Hides view
  this.hide = function() {
    container.hide();
  }
  this.update = function(obj) {
    this.populateTable();
  }
  this.container = container;
  this.populateTable();
  this.backToEditButton = $("#iBackToEdit");
  model.addObserver(this);
}
