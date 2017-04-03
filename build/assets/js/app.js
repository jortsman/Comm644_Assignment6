// Delivery Location Submit
getElement('#deliverySubmitButton').addEventListener('click', function(e) {
  e.preventDefault();
  ValidateDelivery();
});
// Pizza Order Submit
getElement('#pizzaSubmitButton').addEventListener('click', function(e) {
  e.preventDefault();
  ProcessPizzaOrder();
});
getElement('#dough').addEventListener('change', function(e) {
  getElement('#doughSize').removeAttribute('disabled');
  ChooseDough(e);
  DisplayOrderInformation();
  TotalCost();
});
getElement('#doughSize').addEventListener('change', function() {
  ChooseCheese();
  DisplayOrderInformation();
  TotalCost();
});
getElement('#cheese').addEventListener('change', function() {
  ChooseCheese();
  DisplayOrderInformation();
  TotalCost();
});
getElement('#sauce').addEventListener('change', function() {
  ChooseCheese();
  ChooseSauce();
  DisplayOrderInformation();
  TotalCost();
});
getElement('#toppings').addEventListener('change', function() {
  ChooseCheese();
  ChooseSauce();
  ChooseToppings();
  DisplayOrderInformation();
  TotalCost();
});
// Side Bar Options
getElement('#editDelivery').addEventListener('click', function(e) {
  e.preventDefault();
  EditDelivery();
});
getElement('#restartOrder').addEventListener('click', function(e) {
  e.preventDefault();
  location.reload();
});
getElement('#orderTotal').addEventListener('change', function() {

});


// // Billing Info
// lt();
// location.reload();
// });
// getElement('#orderTotal').addEventListener('change', function() {
//
// });


// Billing Info
