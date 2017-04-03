// Regex vars
// var checkName = /^[a-zA-Z]*$/,
//   checkAddress = /^[a-zA-Z0-9 ]*$/,
//   checkCity = /^[a-zA-Z0-9]+$/,
//   checkState = /^[A-Z]+$/,
//   checkZip = /^[0-9]{5}(?:-[0-9]{4})?$/,
//   checkPhone = /^(([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+$/,
//   checkEmail = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//   checkCC = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})$/,
//   checkAmex = /^(3[47][0-9]{13})*$/,
//   checkMasterCard = /^(5[1-5][0-9]{14})*$/,
//   checkVisa = /^(4[0-9]{12}(?:[0-9]{3})?)*$/;

// Form 1 Reset
getElement('#deliverySubmitReset').addEventListener('click', deliveryLocationReset);

// Delivery Location
// function deliveryLocation(e) {
//   e.preventDefault();
//   var isValid = true,
//     name = getElement('#name');
//   alert('yo')
//   if (name.value !== "") {
//     name.value =
//   }
// }
// Delivery Location Form Reset
function deliveryLocationReset(e) {
  e.preventDefault();
  alert('bro')
}

// function deliveryLocation(e) {
//   e.preventDefault();
//   var check = getElement('#cheeseOptions').value;
//   if (check) {
//     alert('yeah this works');
//   }
// }

function(e) {
  e.preventDefault();
  var name = getElement('#name').value;
  var addressType = getElement('#addressType').value;
  // var otherOption = getElement('#otherOption').value;
  var address = getElement('#address').value;
  // var apt = getElement('#apt').value;
  var city = getElement('#city').value;
  var state = getElement('#state').value;
  var zipCode = getElement('#zipCode').value;
  var phone = getElement('#phone').value;
  var emailAddress = getElement('#emailAddress').value;
  deliveryForm.validateForm(name);
}


// Validate Delivery Form
function ValidateDelivery() {
  var name = getElement('#name').value,
    addressType = getElement('#addressType').value,
    otherOption = getElement('#otherOption').value,
    address = getElement('#address').value,
    apt = getElement('#apt').value,
    city = getElement('#city').value,
    state = getElement('#state').value,
    zipCode = getElement('#zipCode').value,
    phone = getElement('#phone').value,
    emailAddress = getElement('#emailAddress').value,
    isValid = true;
  sessionStorage.removeItem('name', name);
  sessionStorage.removeItem('other', otherOption);
  sessionStorage.removeItem('address', address);
  sessionStorage.removeItem('apt', apt);
  sessionStorage.removeItem('city', city);
  sessionStorage.removeItem('state', state);
  sessionStorage.removeItem('zipCode', zipCode);
  sessionStorage.removeItem('phone', phone);
  sessionStorage.removeItem('email', emailAddress);
  // Validate Name Field
  if (IsBlank(name)) {
    AddClass('name_invalid');
    RemoveClass('name_empty');
    isValid = false;
  } else if (!IsName(name)) {
    AddClass('name_empty');
    RemoveClass('name_invalid');
    isValid = false;
  } else {
    AddClass('name_empty');
    AddClass('name_invalid');
    sessionStorage.setItem('name', name);
  }
  // Validate Address Type
  if (IsBlank(otherOption)) {
    AddClass('other_invalid');
    RemoveClass('other_empty');
    isValid = false;
  } else if (!IsName(otherOption)) {
    AddClass('other_empty');
    RemoveClass('other_invalid');
    isValid = false;
  } else {
    AddClass('other_empty');
    AddClass('other_invalid');
    sessionStorage.setItem('other', otherOption);
  }
  // Validate Address
  if (IsBlank(address)) {
    AddClass('address_invalid');
    RemoveClass('address_empty');
    isValid = false;
  } else if (!IsAddress(address)) {
    AddClass('address_empty');
    RemoveClass('address_invalid');
    isValid = false;
  } else {
    AddClass('address_empty');
    AddClass('address_invalid');
    sessionStorage.setItem('address', address);
  }
  if (apt.length !== 0) {
    sessionStorage.setItem('apt', apt);
  }
  // Validate City
  if (IsBlank(city)) {
    AddClass('city_invalid');
    RemoveClass('city_empty');
    isValid = false;
  } else if (!IsCity(city)) {
    AddClass('city_empty');
    RemoveClass('city_invalid');
    isValid = false;
  } else {
    AddClass('city_empty');
    AddClass('city_invalid');
    sessionStorage.setItem('city', city);
  }
  // Validate State
  if (IsBlank(state)) {
    AddClass('state_invalid');
    RemoveClass('state_empty');
    isValid = false;
  } else if (!IsState(state)) {
    AddClass('state_empty');
    RemoveClass('state_invalid');
    isValid = false;
  } else {
    AddClass('state_empty');
    AddClass('state_invalid');
    sessionStorage.setItem('state', state);
  }
  // Validate State
  if (IsBlank(zipCode)) {
    AddClass('zipCode_invalid');
    RemoveClass('zipCode_empty');
    isValid = false;
  } else if (!IsZipCode(zipCode)) {
    AddClass('zipCode_empty');
    RemoveClass('zipCode_invalid');
    isValid = false;
  } else {
    AddClass('zipCode_empty');
    AddClass('zipCode_invalid');
    sessionStorage.setItem('zipCode', zipCode);
  }
  // Validate Phone
  if (IsBlank(phone)) {
    AddClass('phone_invalid');
    RemoveClass('phone_empty');
    isValid = false;
  } else if (!IsPhone(phone)) {
    AddClass('phone_empty');
    RemoveClass('phone_invalid');
    isValid = false;
  } else {
    AddClass('phone_empty');
    AddClass('phone_invalid');
    sessionStorage.setItem('phone', phone);
  }
  // Validate Email Address
  if (IsBlank(emailAddress)) {
    AddClass('emailAddress_invalid');
    RemoveClass('emailAddress_empty');
    isValid = false;
  } else if (!IsEmailAddress(emailAddress)) {
    AddClass('emailAddress_empty');
    RemoveClass('emailAddress_invalid');
    isValid = false;
  } else {
    AddClass('emailAddress_empty');
    AddClass('emailAddress_invalid');
    sessionStorage.setItem('email', emailAddress);
  }
  return isValid
  // AddClass('deliveryInformation');
  // RemoveClass('orderInformation');
}
// Check on Other
getElement('#addressType').addEventListener('change', function() {
  if (getElement('#addressType').value !== "Other") {
    AddClass('otherOption');
  } else {
    RemoveClass('otherOption');
  }
});
