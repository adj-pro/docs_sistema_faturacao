'use strict';


/**
 * Rota para apagar um cliente
 * Essa rota apaga um cliente pelo seu id, precisa substituir o id pelo id do cliente a ser apagado e precisa de um token gerado na autenticacao ou registro
 *
 * id String ID do cliente a ser apagado
 * returns ClientDeleteResponse
 **/
exports.deleteClient = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Client successfully removed!"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para editar dados do cliente
 * Faz a edicao dos dados dos clientes, precisa substituir o id pelo id do cliente a ser editado e precisa de um token gerado na autenticacao ou registro
 *
 * body Client Para editar o cliente e preciso preencher os campos abaixos
 * id String ID do cliente a ser editado
 * returns ClientResponse
 **/
exports.editClient = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Carlos Mateus",
  "email" : "carlos.mateus@gmail.com",
  "phone" : 27847836,
  "address" : "France, paris.",
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
 * Rota para editar dados do cliente
 * Faz a edicao dos dados dos clientes, precisa substituir o id pelo id do cliente a ser editado e precisa de um token gerado na autenticacao ou registro
 *
 * body Client Para editar o cliente e preciso preencher os campos abaixos
 * id String ID do cliente a ser editado
 * returns ClientResponse
 **/
exports.editClient = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Carlos Mateus",
  "email" : "carlos.mateus@gmail.com",
  "phone" : 27847836,
  "address" : "France, paris.",
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
 * Retorna todos os clientes
 * Retorna uma lista de todos os clientes registrados - precisas de um token
 *
 * returns AllClient
 **/
exports.getAllClient = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "client" : [ {
    "name" : "Carlos Mateus",
    "email" : "carlos.mateus@gmail.com",
    "phone" : 27847836,
    "address" : "France, paris.",
    "_id" : "eyJhbGciO1"
  }, {
    "name" : "Carlos Mateus",
    "email" : "carlos.mateus@gmail.com",
    "phone" : 27847836,
    "address" : "France, paris.",
    "_id" : "eyJhbGciO1"
  }, {
    "name" : "Carlos Mateus",
    "email" : "carlos.mateus@gmail.com",
    "phone" : 27847836,
    "address" : "France, paris.",
    "_id" : "eyJhbGciO1"
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
 * Rota para registro de clientes
 * Faz o registro de novos clientes
 *
 * body Client Faz o registro de clientes usando o seu nome, email, telefone e o endereco.
 * returns ClientResponse
 **/
exports.registerClient = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Carlos Mateus",
  "email" : "carlos.mateus@gmail.com",
  "phone" : 27847836,
  "address" : "France, paris.",
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
 * Rota para pegar o perfil ou ver os dados de apenas um cliente
 * Essa rota retorna os dados de apenas um cliente pelo seu id, precisa substituir o id pelo id do cliente a ser visualizado e precisa de um token gerado na autenticacao ou registro
 *
 * id String ID do cliente a ser visualizado
 * returns ClientResponse
 **/
exports.viewClient = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Carlos Mateus",
  "email" : "carlos.mateus@gmail.com",
  "phone" : 27847836,
  "address" : "France, paris.",
  "_id" : "eyJhbGciO1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

