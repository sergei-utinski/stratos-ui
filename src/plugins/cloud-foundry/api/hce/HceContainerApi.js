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
    apiManager.register('cloud-foundry.api.HceContainerApi', new HceContainerApi($http));
  }

  /**
    * @constructor
    * @name HceContainerApi
    * @description For more information on this API, please see:
    * https://github.com/hpcloud/hce-rest-service/blob/master/app/v2/swagger.yml
    * @param {object} $http - the Angular $http service
    * @property {object} $http - the Angular $http service
    * @property {string} baseUrl - the API base URL
    */
  function HceContainerApi($http) {
    this.$http = $http;
    this.baseUrl = '/pp/v1/proxy/v2';
  }

  angular.extend(HceContainerApi.prototype, {
    /**
     * @name addBuildContainer
     * @description Add a BuildContainer instance.
     * @param {string} guid - the HCE instance GUID
     * @param {object} data - the request body
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    addBuildContainer: function (guid, data, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/build_containers';
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'POST',
        url: path,
        params: params || {},
        data: data,
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name addImage
     * @description Add a Image instance.
     * @param {string} guid - the HCE instance GUID
     * @param {object} data - the request body
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    addImage: function (guid, data, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/images';
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'POST',
        url: path,
        params: params || {},
        data: data,
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name addImageRegistry
     * @description Add a ImageRegistry instance.
     * @param {string} guid - the HCE instance GUID
     * @param {object} data - the request body
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    addImageRegistry: function (guid, data, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/images/registries';
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'POST',
        url: path,
        params: params || {},
        data: data,
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name getBuildContainer
     * @description Get the BuildContainer specified in the request.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} containerId - The (HCE) item id.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    getBuildContainer: function (guid, containerId, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/build_containers/{container_id}'
        .replace('{' + 'container_id' + '}', containerId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name getBuildContainers
     * @description List BuildContainer instances.
     * @param {string} guid - the HCE instance GUID
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    getBuildContainers: function (guid, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/build_containers';
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name getImage
     * @description Get the Image specified in the request.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} imageId - The (HCE) image id.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    getImage: function (guid, imageId, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/images/{image_id}'
        .replace('{' + 'image_id' + '}', imageId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name getImageRegistries
     * @description List ImageRegistry instances.
     * @param {string} guid - the HCE instance GUID
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    getImageRegistries: function (guid, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/images/registries';
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name getImageRegistry
     * @description Get the ImageRegistry specified in the request.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} registryId - The (HCE) item id.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    getImageRegistry: function (guid, registryId, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/images/registries/{registry_id}'
        .replace('{' + 'registry_id' + '}', registryId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name getImages
     * @description List Image instances.
     * @param {string} guid - the HCE instance GUID
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    getImages: function (guid, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/images';
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'GET',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name removeBuildContainer
     * @description Remove (unregister) the specified BuildContainer.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} containerId - The (HCE) BuildContainer id.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    removeBuildContainer: function (guid, containerId, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/build_containers/{container_id}'
        .replace('{' + 'container_id' + '}', containerId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'DELETE',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name removeImage
     * @description Remove (unregister) the specified Image.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} imageId - The (HCE) Image id.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    removeImage: function (guid, imageId, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/images/{image_id}'
        .replace('{' + 'image_id' + '}', imageId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'DELETE',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name removeImageRegistry
     * @description Remove (unregister) the specified ImageRegistry.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} registryId - The (HCE) ImageRegistry id.
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    removeImageRegistry: function (guid, registryId, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/images/registries/{registry_id}'
        .replace('{' + 'registry_id' + '}', registryId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'DELETE',
        url: path,
        params: params || {},
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name updateBuildContainer
     * @description Update the specified build container
     * @param {string} guid - the HCE instance GUID
     * @param {!number} containerId - BuildContainer id.
     * @param {object} data - the request body
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    updateBuildContainer: function (guid, containerId, data, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/build_containers/{container_id}'
        .replace('{' + 'container_id' + '}', containerId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'PUT',
        url: path,
        params: params || {},
        data: data,
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name updateImage
     * @description Update the specified container image.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} imageId - Container image id.
     * @param {object} data - the request body
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    updateImage: function (guid, imageId, data, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/images/{image_id}'
        .replace('{' + 'image_id' + '}', imageId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'PUT',
        url: path,
        params: params || {},
        data: data,
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    },

    /**
     * @name updateImageRegistry
     * @description Update the specified container registry.
     * @param {string} guid - the HCE instance GUID
     * @param {!number} registryId - Registry id.
     * @param {object} data - the request body
     * @param {object} params - the query parameters
     * @param {object} httpConfigOptions - additional config options
     * @returns {promise} A resolved/rejected promise
     */
    updateImageRegistry: function (guid, registryId, data, params, httpConfigOptions) {
      var path = this.baseUrl + '/containers/images/registries/{registry_id}'
        .replace('{' + 'registry_id' + '}', registryId);
      var headers = {
        'x-cnap-cnsi-list': guid
      };

      var config = {
        method: 'PUT',
        url: path,
        params: params || {},
        data: data,
        headers: headers
      };

      angular.forEach(httpConfigOptions, function (optionConfig, option) {
        if (option === 'headers') {
          angular.extend(config[option], optionConfig);
        } else {
          config[option] = optionConfig;
        }
      });

      return this.$http(config);
    }
  });
})();
