'use strict';


/**
 * Rota para apagar uma categoria
 * Essa rota apaga uma categoria pelo seu id, precisa substituir o id pelo id da categoria a ser apagada e precisa de um token gerado na autenticacao ou registro
 *
 * id String ID da categoria a ser apagada
 * returns CategoryDeleteResponse
 **/
exports.deleteCategory = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Category successfully removed!"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para editar dados da categoria
 * Faz a edicao dos dados das categorias, precisa substituir o id pelo id da categoria a ser editada e precisa de um token gerado na autenticacao ou registro
 *
 * body Category Para editar a categoria e preciso preencher os campos abaixos
 * id Long ID da categoria a ser editada
 * returns CategoryResponse
 **/
exports.editCategory = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Bebidas",
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
 * Rota para editar dados da categoria
 * Faz a edicao dos dados das categorias, precisa substituir o id pelo id da categoria a ser editada e precisa de um token gerado na autenticacao ou registro
 *
 * body Category Para editar a categoria e preciso preencher os campos abaixos
 * id Long ID da categoria a ser editada
 * returns CategoryResponse
 **/
exports.editCategory = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Bebidas",
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
 * Retorna todas as categorias
 * Retorna uma lista de todas as categorias registradas - precisas de um token
 *
 * returns AllCategory
 **/
exports.getAllCategorys = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "category" : [ {
    "name" : "Bebidas",
    "_id" : "a1hdbb"
  }, {
    "name" : "Cosmeticos",
    "_id" : "akghdgb"
  }, {
    "name" : "Roupas",
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
 * Rota para registro de categorias
 * Faz o registro de novas categorias
 *
 * body Category Faz o registro de categorias usando o seu nome.
 * returns CategoryResponse
 **/
exports.registerCategory = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Bebidas",
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
 * Rota para registro de categorias
 * Faz o registro de novas categorias
 *
 * body Category Faz o registro de categorias usando o seu nome.
 * returns CategoryResponse
 **/
exports.registerCategory = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Bebidas",
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
 * Rota para pegar ou ver os dados de apenas uma categoria
 * Essa rota retorna os dados de apenas uma categoria pelo seu id, precisa substituir o id pelo id da categoria a ser visualizado e precisa de um token gerado na autenticacao ou registro
 *
 * id String ID da categoria a ser visualizada
 * returns CategoryResponse
 **/
exports.viewCategory = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Bebidas",
  "_id" : "eyJhbGciO1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

