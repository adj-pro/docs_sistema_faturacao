'use strict';

var utils = require('../utils/writer.js');
var Client = require('../service/ClientService');

module.exports.deleteClient = function deleteClient (req, res, next, id) {
  Client.deleteClient(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editClient = function editClient (req, res, next, body, id) {
  Client.editClient(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editClient = function editClient (req, res, next, body, id) {
  Client.editClient(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllClient = function getAllClient (req, res, next) {
  Client.getAllClient()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerClient = function registerClient (req, res, next, body) {
  Client.registerClient(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewClient = function viewClient (req, res, next, id) {
  Client.viewClient(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
