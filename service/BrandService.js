'use strict';


/**
 * Rota para apagar uma marca
 * Essa rota apaga uma marca pelo seu id, precisa substituir o id pelo id da marca a ser apagada e precisa de um token gerado na autenticacao ou registro
 *
 * id String ID da marca a ser apagada
 * returns BrandDeleteResponse
 **/
exports.deleteBrand = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Brand successfully removed!"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para editar dados da marca
 * Faz a edicao dos dados das marcas, precisa substituir o id pelo id da marca a ser editada e precisa de um token gerado na autenticacao ou registro
 *
 * body Brand Para editar a marca e preciso preencher os campos abaixos
 * id String ID da marca a ser editada
 * returns BrandResponse
 **/
exports.editBrand = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Adidas",
  "_id" : "eyJhbGciO1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para editar dados da marca
 * Faz a edicao dos dados das marcas, precisa substituir o id pelo id da marca a ser editada e precisa de um token gerado na autenticacao ou registro
 *
 * body Brand Para editar a marca e preciso preencher os campos abaixos
 * id String ID da marca a ser editada
 * returns BrandResponse
 **/
exports.editBrand = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Adidas",
  "_id" : "eyJhbGciO1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna todas as marcas
 * Retorna uma lista de todas as marcas registradas - precisas de um token
 *
 * returns AllBrand
 **/
exports.getAllBrand = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "brand" : [ {
    "name" : "Nike",
    "_id" : "a1hdbb"
  }, {
    "name" : "Adidas",
    "_id" : "akghdgb"
  }, {
    "name" : "Gucci",
    "_id" : "akghdgbgs"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para registro de marcas(brand)
 * Faz o registro de novas marcas
 *
 * body Brand Faz o registro de marcas usando o seu nome.
 * returns BrandResponse
 **/
exports.registerBrand = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Adidas",
  "_id" : "eyJhbGciO1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para registro de marcas(brand)
 * Faz o registro de novas marcas
 *
 * body Brand Faz o registro de marcas usando o seu nome.
 * returns BrandResponse
 **/
exports.registerBrand = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Adidas",
  "_id" : "eyJhbGciO1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para pegar ou ver os dados de apenas uma marca
 * Essa rota retorna os dados de apenas uma marca pelo seu id, precisa substituir o id pelo id da marca a ser visualizada e precisa de um token gerado na autenticacao ou registro
 *
 * id String ID da marca a ser visualizada
 * returns BrandResponse
 **/
exports.viewBrand = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Adidas",
  "_id" : "eyJhbGciO1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

