'use strict';

var utils = require('../utils/writer.js');
var Brand = require('../service/BrandService');

module.exports.deleteBrand = function deleteBrand (req, res, next, id) {
  Brand.deleteBrand(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editBrand = function editBrand (req, res, next, body, id) {
  Brand.editBrand(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editBrand = function editBrand (req, res, next, body, id) {
  Brand.editBrand(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBrand = function getAllBrand (req, res, next) {
  Brand.getAllBrand()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerBrand = function registerBrand (req, res, next, body) {
  Brand.registerBrand(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerBrand = function registerBrand (req, res, next, body) {
  Brand.registerBrand(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewBrand = function viewBrand (req, res, next, id) {
  Brand.viewBrand(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
