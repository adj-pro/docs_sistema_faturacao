'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.deleteProduct = function deleteProduct (req, res, next, id) {
  Product.deleteProduct(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editProduct = function editProduct (req, res, next, body, id) {
  Product.editProduct(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editProduct = function editProduct (req, res, next, body, id) {
  Product.editProduct(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllProduct = function getAllProduct (req, res, next) {
  Product.getAllProduct()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllProductLowStock = function getAllProductLowStock (req, res, next) {
  Product.getAllProductLowStock()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllProductMorePurchased = function getAllProductMorePurchased (req, res, next) {
  Product.getAllProductMorePurchased()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllProductOutStock = function getAllProductOutStock (req, res, next) {
  Product.getAllProductOutStock()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerProduct = function registerProduct (req, res, next, body) {
  Product.registerProduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewProduct = function viewProduct (req, res, next, id) {
  Product.viewProduct(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
