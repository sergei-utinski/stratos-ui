'use strict';

// Service instances registration helpers
var helpers = require('./helpers.po');
var loginPage = require('./login-page.po');

module.exports = {

  login: login,
  registrationOverlay: registrationOverlay,
  serviceInstancesTable: serviceInstancesTable,
  provideCredentialsLink: provideCredentialsLink,
  unregisterLink: unregisterLink,
  doneButton: doneButton,
  provideCredentials: provideCredentials,
  unregister: unregister,
  completeRegistration: completeRegistration,
  registrationNotification: registrationNotification,

  credentialsFlyout: credentialsFlyout,
  credentialsForm: credentialsForm,
  credentialsFormFields: credentialsFormFields,
  cancelButton: cancelButton,
  registerButton: registerButton,
  passwordEye: passwordEye,
  cancel: cancel,
  register: register,
  togglePassword: togglePassword

};

function login() {
  var fields = loginPage.loginFormFields();
  fields.get(0).sendKeys('dev');
  fields.get(1).sendKeys('dev');
  loginPage.loginButton().click();
}

function registrationOverlay() {
  return element(by.id('registration-overlay')).element(by.css('.service-registration'));
}

function serviceInstancesTable() {
  return registrationOverlay().element(by.css('table'));
}

function provideCredentialsLink(rowIndex) {
  return helpers.getTableRowAt(serviceInstancesTable(), rowIndex)
    .element(by.css('[ng-click="serviceRegistrationCtrl.enterCredentials(serviceInstance)"]'));
}

function unregisterLink(rowIndex) {
  return helpers.getTableRowAt(serviceInstancesTable(), rowIndex)
    .element(by.css('[ng-click="serviceRegistrationCtrl.unregister(serviceInstance)"]'));
}

function provideCredentials(rowIndex) {
  return provideCredentialsLink(rowIndex).click();
}

function unregister(rowIndex) {
  return unregisterLink(rowIndex).click();
}

function doneButton() {
  return registrationOverlay().element(by.css('.fixed-footer button'));
}

function completeRegistration() {
  return doneButton().click();
}

function registrationNotification() {
  return registrationOverlay().element(by.css('.fixed-footer .registration-notification'));
}

function credentialsFlyout() {
  return registrationOverlay().element(by.css('.flyout-content'));
}

function credentialsForm() {
  return helpers.getForm('credentialsFormCtrl.credentialsForm');
}

function credentialsFormFields() {
  return helpers.getFormFields('credentialsFormCtrl.credentialsForm');
}

function cancelButton() {
  return credentialsForm().element(by.css('[ng-click="credentialsFormCtrl.cancel()"]'));
}

function registerButton() {
  return credentialsForm().element(by.css('button[type="submit"]'));
}

function cancel() {
  return cancelButton().click();
}

function register() {
  return registerButton().click();
}

function passwordEye() {
  return credentialsForm().element(by.css('.password-reveal'));
}

function togglePassword() {
  return passwordEye().click();
}