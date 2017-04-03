// Process Pizza Order Form
function ProcessPizzaOrder() {
  AddClass('orderInformation');
  RemoveClass('billingInformation');
};

function ChooseDough(e) {
  var input = e.target,
    doughOption = order.dough[input.id],
    doughTotal;
  sessionStorage.removeItem('toppings');
  sessionStorage.removeItem('toppingsCost');
  getElement('#doughSize').options.length = 0;
  for (var i in doughOption.size) {
    var option = document.createElement('option')
    option.innerHTML = (doughOption.size[i] + ": " + doughOption.price[i]);
    getElement('#doughSize').appendChild(option);
  }
  doughTotal = doughOption.price[getElement('#doughSize').options.selectedIndex];
  getElement("#doughSize").addEventListener('change', function() {
    doughTotal = doughOption.price[getElement('#doughSize').options.selectedIndex];
    sessionStorage.removeItem('doughTotal');
    sessionStorage.setItem('doughTotal', doughTotal);
  });
  sessionStorage.setItem('doughTotal', doughTotal);
  console.log(doughTotal);
}
// Select Cheese
function ChooseCheese() {
  var chooseCheese = getElement("#cheese");
  var cheeseTotal = order.cheese.price[chooseCheese.selectedIndex];
  getElement("#cheese").addEventListener('change', function() {
    cheeseTotal = order.cheese.price[chooseCheese.selectedIndex];
    sessionStorage.removeItem('cheeseTotal');
    sessionStorage.setItem('cheeseTotal', cheeseTotal);
  });
  sessionStorage.setItem('cheeseTotal', cheeseTotal);
}
// Choose Sauce
function ChooseSauce() {
  var chooseSauce = getElement("#sauce");
  var sauceTotal = order.sauce.price[chooseSauce.selectedIndex];
  getElement("#sauce").addEventListener('change', function() {
    sauceTotal = order.sauce.price[chooseSauce.selectedIndex];
    sessionStorage.removeItem('sauceTotal');
    sessionStorage.setItem('sauceTotal', sauceTotal);
  });
  sessionStorage.setItem('sauceTotal', sauceTotal);
}
// Choose Toppings
function ChooseToppings() {
  var display = "",
    cost = 0;
  checkboxes = document.getElementsByName("optionsRadios");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      display += " " + checkboxes[i].value;
      cost += .99;
    }
  }
  sessionStorage.setItem('toppings', display);
  sessionStorage.setItem('toppingsCost', cost);
}
// Total Cost
function TotalCost() {
  var doughCost = sessionStorage.getItem('doughTotal'),
    cheeseCost = sessionStorage.getItem('cheeseTotal'),
    sauceCost = sessionStorage.getItem('sauceTotal'),
    toppingsCost = sessionStorage.getItem('toppingsCost'),
    totalCost = parseFloat(doughCost) + parseFloat(cheeseCost) + parseFloat(sauceCost) + parseFloat(toppingsCost),
    totalCostOutput = getElement('#orderTotal');
  totalCostOutput.innerHTML = "Total: " + totalCost.toFixed(2);
}
