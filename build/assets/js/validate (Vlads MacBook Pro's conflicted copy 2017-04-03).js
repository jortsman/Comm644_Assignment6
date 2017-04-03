// Validate Blank
function IsBlank(text) {
  return (text === "");
}
// Validate Name
function IsName(text) {
  return /^[a-zA-Z]*$/.test(text);
}
// Validate Address
function IsAddress(text) {
  return /^[a-zA-Z0-9 ]*$/.test(text);
}
// Validate City Name
function IsCity(text) {
  return /^[a-zA-Z0-9]+$/.test(text);
}
// Validate State Initals
function IsState(text) {
  return /^[A-Z]+$/.test(text);
}
// Validate Zip Code
function IsZipCode(text) {
  return /^\d{5}(-\d{4})?$/.test(text);
}
// Validate Phone Number
function IsPhone(text) {
  return /^(([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+$/.test(text);
}
// Validate Email
function IsEmailAddress(text) {
  return /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(text);
}
// Validate Credit Card
function IsCreditCard(text) {
  return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(text);
}
// Validate Amex
function IsAmex(text) {
  return /^(3[47][0-9]{13})*$/.test(text);
}
// Validate MasterCard
function IsMasterCard(text) {
  return /^(5[1-5][0-9]{14})*$/.test(text);
}
// Validate Visa
function IsVisa(text) {
  return /^(4[0-9]{12}(?:[0-9]{3})?)*$/.test(text);
}
