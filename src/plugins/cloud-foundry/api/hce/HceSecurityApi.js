/* DO NOT EDIT: This code has been generated by swagger-codegen */
(function () {
  'use strict';

  angular
    .module('cloud-foundry.api')
    .run(registerApi);

  registerApi.$inject = [
    '$http',
    'app.api.apiManager'
  ];

  function registerApi($http, apiManager) {
    apiManager.register('cloud-foundry.api.HceSecurityApi', new HceSecurityApi($http));
  }

  /**
    * @constructor
    * @name HceSecurityApi
    * @description For more information on this API, please see:
    * https://github.com/hpcloud/hce-rest-service/blob/master/app/v2/swagger.yml
    * @param {object} $http - the Angular $http service
    * @property {object} $http - the Angular $http service
    * @property {string} baseUrl - the API base URL
    * @property {object} defaultHeaders - the default headers
    */
  function HceSecurityApi($http) {
    this.$http = $http;
    this.baseUrl = '/api/ce/v2';
    this.defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
  }

  angular.extend(HceSecurityApi.prototype, {
    /**
     * @name forgetCredential
     * @description Remove the specified credential from the authstore.
     * @param {!number} credentialId - The credential id.
     * @param {object} params - the query parameters
     * @returns {promise} A resolved/rejected promise
     */
    forgetCredential: function (credentialId, params) {
      var path = this.baseUrl + '/auth/credentials/{credential_id}'
        .replace('{' + 'credential_id' + '}', credentialId);

      var config = {
        method: 'DELETE',
        url: path,
        params: params,
        headers: this.defaultHeaders
      };

      return this.$http(config);
    },

    /**
     * @name listCredentials
     * @description List credentials for the specified user.
     * @param {object} params - the query parameters
     * @returns {promise} A resolved/rejected promise
     */
    listCredentials: function (params) {
      var path = this.baseUrl + '/auth/credentials';

      var config = {
        method: 'GET',
        url: path,
        params: params,
        headers: this.defaultHeaders
      };

      return this.$http(config);
    },

    /**
     * @name storeCredential
     * @description Store auth Credential.
     * @param {object} data - the request body
     * @param {object} params - the query parameters
     * @returns {promise} A resolved/rejected promise
     */
    storeCredential: function (data, params) {
      var path = this.baseUrl + '/auth/credentials';

      var config = {
        method: 'POST',
        url: path,
        params: params,
        data: data,
        headers: this.defaultHeaders
      };

      return this.$http(config);
    },

    /**
     * @name updateCredential
     * @description Update the specified credential.\n
     * @param {!number} credentialId - The id of the &#x60;Credential&#x60; instance.\n
     * @param {object} data - the request body
     * @param {object} params - the query parameters
     * @returns {promise} A resolved/rejected promise
     */
    updateCredential: function (credentialId, data, params) {
      var path = this.baseUrl + '/auth/credentials/{credential_id}'
        .replace('{' + 'credential_id' + '}', credentialId);

      var config = {
        method: 'PUT',
        url: path,
        params: params,
        data: data,
        headers: this.defaultHeaders
      };

      return this.$http(config);
    }
  });
})();