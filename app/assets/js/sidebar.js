// Display Delivery Information
function DisplayDeliveryInformation() {
  var name = sessionStorage.getItem('name'),
    addressType = sessionStorage.getItem('addressType'),
    other = sessionStorage.getItem('other'),
    address = sessionStorage.getItem('address'),
    apt = sessionStorage.getItem('apt'),
    city = sessionStorage.getItem('city'),
    state = sessionStorage.getItem('state'),
    zipCode = sessionStorage.getItem('zipCode'),
    phone = sessionStorage.getItem('phone'),
    emailAddress = sessionStorage.getItem('email');
  if (addressType !== null) {
    getId('nameOutput').innerHTML = name + "'s " + addressType;
  } else {
    getId('nameOutput').innerHTML = name + "'s " + other;
  }
  if (apt !== null) {
    getId('addressOutput').innerHTML = address + " " + apt;
  } else {
    getId('addressOutput').innerHTML = address;
  }
  getId('cityOutput').innerHTML = city + " " + state + " " + zipCode;
  getId('phoneOutput').innerHTML = phone;
  getId('emailAddressOutput').innerHTML = emailAddress;
}
// Display Order Information
function DisplayOrderInformation() {
  var dough = document.querySelector('input[name="doughOption"]:checked').value,
    doughSize = getId('doughSize').value,
    doughName = doughSize.split(":"),
    doughNameFinal = doughName[0],
    cheese = getId('cheese').value,
    sauce = getId('sauce').value,
    toppings = sessionStorage.getItem('toppings');
  getId('doughOutput').innerHTML = "Dough Selected: " + dough;
  getId('doughSizeOutput').innerHTML = "Dough Size: " + doughNameFinal;
  getId('cheeseOutput').innerHTML = "Cheese: " + cheese;
  getId('sauceOutput').innerHTML = "Sauce: " + sauce;
  if (toppings !== null) {
    getId('toppingsOutput').innerHTML = "Toppings: " + toppings;
  } else {
    getId('toppingsOutput').innerHTML = "Toppings: ";
  }
}
// Edit Delivery
function EditDelivery() {
  sessionStorage.removeItem('name', name);
  sessionStorage.removeItem('addressType', addressType);
  sessionStorage.removeItem('other', otherOption);
  sessionStorage.removeItem('address', address);
  sessionStorage.removeItem('apt', apt);
  sessionStorage.removeItem('city', city);
  sessionStorage.removeItem('state', state);
  sessionStorage.removeItem('zipCode', zipCode);
  sessionStorage.removeItem('phone', phone);
  sessionStorage.removeItem('email', emailAddress);
  AddClass('orderInformation');
  AddClass('billingInformation');
  RemoveClass('deliveryInformation');
}
// Edit Pizza Order
function EditPizza() {
  sessionStorage.removeItem('doughTotal');
  sessionStorage.removeItem('cheeseTotal');
  sessionStorage.removeItem('sauceTotal');
  sessionStorage.removeItem('toppings');
  sessionStorage.removeItem('toppingsCost');
  AddClass('billingInformation');
  AddClass('deliveryInformation');
  RemoveClass('orderInformation');
}
