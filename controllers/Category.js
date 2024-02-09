'use strict';

var utils = require('../utils/writer.js');
var Category = require('../service/CategoryService');

module.exports.deleteCategory = function deleteCategory (req, res, next, id) {
  Category.deleteCategory(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editCategory = function editCategory (req, res, next, body, id) {
  Category.editCategory(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editCategory = function editCategory (req, res, next, body, id) {
  Category.editCategory(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCategorys = function getAllCategorys (req, res, next) {
  Category.getAllCategorys()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerCategory = function registerCategory (req, res, next, body) {
  Category.registerCategory(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerCategory = function registerCategory (req, res, next, body) {
  Category.registerCategory(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewCategory = function viewCategory (req, res, next, id) {
  Category.viewCategory(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
