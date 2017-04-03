// Validate Delivery Form
function ValidateDelivery() {
  var isValid = 0;
  isValid += ValidateName();
  isValid += ValidateOtherOption();
  isValid += ValidateAddress();
  isValid += ValidateCity();
  isValid += ValidateState();
  isValid += ValidateZipCode();
  isValid += ValidatePhone();
  isValid += ValidateEmailAddress();
  PushAddressType();
  console.log(isValid);
  if (isValid >= 7) {
    AddClass('deliveryInformation');
    RemoveClass('orderInformation');
    DisplayDeliveryInformation();
  } else {
    alert('You need to validate each field to proceed');
  }
}
// Validate Name Field
function ValidateName() {
  var nameField = getElement('#name').value,
    isValid = true;
  if (IsBlank(nameField)) {
    AddClass('name_invalid');
    RemoveClass('name_empty');
    isValid = false;
  }
  if (!IsName(nameField)) {
    AddClass('name_empty');
    RemoveClass('name_invalid');
    isValid = false;
  } else {
    AddClass('name_empty');
    AddClass('name_invalid');
    sessionStorage.setItem('name', nameField);
  }
  return isValid;
}
// Check on Other
getElement('#addressType').addEventListener('change', function() {
  if (getElement('#addressType').value !== "Other") {
    AddClass('otherOption');
  } else {
    RemoveClass('otherOption');
  }
});
// Validate Other Option Address Type
function ValidateOtherOption() {
  var otherOptionField = getElement('#other').value,
    isValid = true;
  if (IsBlank(otherOptionField)) {
    AddClass('other_invalid');
    RemoveClass('other_empty');
    isValid = false;
  } else if (!IsName(otherOptionField)) {
    AddClass('other_empty');
    RemoveClass('other_invalid');
    isValid = false;
  } else {
    AddClass('other_empty');
    AddClass('other_invalid');
    sessionStorage.setItem('other', otherOptionField);
  }
  return isValid;
}
// Push Address Type
function PushAddressType() {
  var addressTypeField = getId('addressType').value;
  if (addressTypeField !== 'Other') {
    sessionStorage.setItem('addressType', addressTypeField);
  } else {
    return ValidateOtherOption();
  }
}
// Validate Address Field
function ValidateAddress() {
  var addressField = getElement('#address').value,
    aptField = getElement('#apt').value,
    isValid = true;
  if (IsBlank(addressField)) {
    AddClass('address_invalid');
    RemoveClass('address_empty');
    isValid = false;
  } else if (!IsAddress(addressField)) {
    AddClass('address_empty');
    RemoveClass('address_invalid');
    isValid = false;
  } else {
    AddClass('address_empty');
    AddClass('address_invalid');
    sessionStorage.setItem('address', addressField);
  }
  if (aptField.length !== 0) {
    sessionStorage.setItem('apt', aptField);
  }
  return isValid;
}
// Validate City Field
function ValidateCity() {
  var cityField = getElement('#city').value,
    isValid = true;
  if (IsBlank(cityField)) {
    AddClass('city_invalid');
    RemoveClass('city_empty');
    isValid = false;
  } else if (!IsCity(cityField)) {
    AddClass('city_empty');
    RemoveClass('city_invalid');
    isValid = false;
  } else {
    AddClass('city_empty');
    AddClass('city_invalid');
    sessionStorage.setItem('city', cityField);
  }
  return isValid;
}
// Validate State Field
function ValidateState() {
  var stateField = getElement('#state').value,
    isValid = true;
  if (IsBlank(stateField)) {
    AddClass('state_invalid');
    RemoveClass('state_empty');
    isValid = false;
  } else if (!IsState(stateField)) {
    AddClass('state_empty');
    RemoveClass('state_invalid');
    isValid = false;
  } else {
    AddClass('state_empty');
    AddClass('state_invalid');
    sessionStorage.setItem('state', stateField);
  }
  return isValid;
}
// Validate Zip Code Field
function ValidateZipCode() {
  var zipCodeField = getElement('#zipCode').value,
    isValid = true;
  if (IsBlank(zipCodeField)) {
    AddClass('zipCode_invalid');
    RemoveClass('zipCode_empty');
    isValid = false;
  } else if (!IsZipCode(zipCodeField)) {
    AddClass('zipCode_empty');
    RemoveClass('zipCode_invalid');
    isValid = false;
  } else {
    AddClass('zipCode_empty');
    AddClass('zipCode_invalid');
    sessionStorage.setItem('zipCode', zipCodeField);
  }
  return isValid;
}
// Validate Phone Field
function ValidatePhone() {
  var phoneField = getElement('#phone').value,
    isValid = true;
  if (IsBlank(phoneField)) {
    AddClass('phone_invalid');
    RemoveClass('phone_empty');
    isValid = false;
  } else if (!IsPhone(phoneField)) {
    AddClass('phone_empty');
    RemoveClass('phone_invalid');
    isValid = false;
  } else {
    AddClass('phone_empty');
    AddClass('phone_invalid');
    sessionStorage.setItem('phone', phoneField);
  }
  return isValid;
}
// Validate Email Address Field
function ValidateEmailAddress() {
  var emailAddress = getElement('#emailAddress').value,
    isValid = true;
  if (IsBlank(emailAddress)) {
    AddClass('emailAddress_invalid');
    RemoveClass('emailAddress_empty');
    isValid = false;
  } else
  if (!IsEmailAddress(emailAddress)) {
    AddClass('emailAddress_empty');
    RemoveClass('emailAddress_invalid');
    isValid = false;
  } else {
    AddClass('emailAddress_empty');
    AddClass('emailAddress_invalid');
    sessionStorage.setItem('email', emailAddress);
  }
  return isValid;
}
