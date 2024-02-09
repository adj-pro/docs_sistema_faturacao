'use strict';

var utils = require('../utils/writer.js');
var Company = require('../service/CompanyService');

module.exports.editCompany = function editCompany (req, res, next, body, id) {
  Company.editCompany(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editCompany = function editCompany (req, res, next, body, id) {
  Company.editCompany(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCompany = function getAllCompany (req, res, next) {
  Company.getAllCompany()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerCompany = function registerCompany (req, res, next, body) {
  Company.registerCompany(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerCompany = function registerCompany (req, res, next, body) {
  Company.registerCompany(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
