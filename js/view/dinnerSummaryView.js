var DinnerSummaryView = function (container, model) {

  this.populate = function() {
    var dsView = $("#dinnerSummaryView");

    dsView.empty();

    // Append top navigation banner
    dsView.append("<div class='row myDinnerBanner'><div class='col-md-6'><h3>My Dinner: "+model.getNumberOfGuests()
      +" people</h3></div><div class='col-md-6'><button type='submit' class='btn btn-default pull-right backToEditButton' id='sBackToEdit'>Go back and edit dinner</button></div></div>");

    // Get menu
    var menu = model.getFullMenu();
    var menuTableString = "<table id='dinnerSummaryTable'><tr><td class='col-md-2'></td>";

    // Append dish-figures, captions and prices
    for (var i = 0; i < menu.length; i++) {
      if (menu[i] != null) {
        menuTableString += "<td class='col-md-2'><figure class='dishSummaryFigure'><img class='dishSummaryImage' src='images/"+menu[i].image
          +"'><figcaption style='text-align:center;' class='dishName'>"+menu[i].name+"</figcaption><figcaption class='dishPrice' style='text-align:right;'>"+
          model.getDishPrice(menu[i])+" SEK</figcaption></figure></td>";
      }
      else {
        menuTableString += "<td class='col-md-2'><figure class='dishSummaryFigure'><img class='dishSummaryImage' src='images/noimage.jpg'><figcaption style='text-align:center;' class='dishName'>"
          +"None selected</figcaption><figcaption class='dishPrice' style='text-align:right;'>0 SEK</figcaption></figure></td>";
      }
    }

    // Append dishes total price
    menuTableString += "<td class='col-md-2' id='priceSummary'><p>Total: <br />"+model.getTotalMenuPrice()+" SEK</p></td></tr></table>";

    dsView.append(menuTableString);
    dsView.append("<hr class='breakLine'>");
    dsView.append("<div id='printButtonDiv'><button type='submit' class='btn btn-default' id='printRecipeButton'>Print Full Recipe</button></div>");
  }

  // Shows view
  this.show = function() {
    // Show container
    container.show();
  }

  // hides view
  this.hide = function() {
    container.hide();
  }

  this.update = function(obj) {
    if (obj == "menu" || obj == "guests")
      this.populate();
  }

  this.populate();

  model.addObserver(this);
}
