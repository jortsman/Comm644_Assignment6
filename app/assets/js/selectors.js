// Helper Functions
var getElement = function(element) {
  return document.querySelector(element);
};
var getId = function(id) {
  return document.getElementById(id);
};
var getIdValue = function(id) {
  return document.getElementById(id).value;
};
// Hide/Show
function AddClass(element) {
  var service = getId(element)
  service.classList.add('hide');
};

function RemoveClass(element) {
  getId(element).classList.remove('hide');
};
// Pizza Options
var order = {
  dough: {
    handTossed: {
      size: ['Small', 'Medium', 'Large'],
      price: [9.99, 12.99, 14.99]
    },
    thinCrust: {
      size: ['Medium', 'Large'],
      price: [11.99, 13.99]
    },
    newYorkStyle: {
      size: ['Large', 'Extra Large'],
      price: [16.99, 19.99]
    },
    glutenFree: {
      size: ['Small'],
      price: [10.99]
    }
  },
  cheese: {
    amount: ['Light', 'Normal', 'Extra', 'Double'],
    price: [0, 0, 2.99, 3.99]
  },
  sauce: {
    amount: ['Regular Tomato', 'Hearty Tomato', 'BBQ Sauce'],
    price: [0, .99, 1.99]
  },
  toppings: ['Pepperoni', 'Sausage', 'Ham', 'Bacon', 'Salami', 'Peppers', 'Olives', 'Jalapenos', 'Mushrooms', 'Pineapple', 'Onion'],
  price: [.99]
}
