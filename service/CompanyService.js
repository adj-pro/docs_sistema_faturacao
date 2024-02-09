'use strict';


/**
 * Rota para editar os dados da empresa
 * Faz a edicao dos dados da empresa, precisa substituir o id pelo id da empresa a ser editada e precisa de um token gerado na autenticacao ou registro
 *
 * body Company Para editar os dados da empresa e preciso preencher os campos abaixos
 * id String ID da empresa a ser editada
 * returns CompanyResponse
 **/
exports.editCompany = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "company_name" : "Adj Fashion",
  "company_type" : "Loja de Roupa (Botique)",
  "phone" : "936xxxxxxx",
  "nif" : 50134542438,
  "user_id" : "ghaBWhsja",
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
 * Rota para editar os dados da empresa
 * Faz a edicao dos dados da empresa, precisa substituir o id pelo id da empresa a ser editada e precisa de um token gerado na autenticacao ou registro
 *
 * body Company Para editar os dados da empresa e preciso preencher os campos abaixos
 * id String ID da empresa a ser editada
 * returns CompanyResponse
 **/
exports.editCompany = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "company_name" : "Adj Fashion",
  "company_type" : "Loja de Roupa (Botique)",
  "phone" : "936xxxxxxx",
  "nif" : 50134542438,
  "user_id" : "ghaBWhsja",
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
 * Retorna os dados da minha empresa
 * Retorna os dados da minha empresa - precisas de um token
 *
 * returns CompanyResponse
 **/
exports.getAllCompany = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "company_name" : "Adj Fashion",
  "company_type" : "Loja de Roupa (Botique)",
  "phone" : "936xxxxxxx",
  "nif" : 50134542438,
  "user_id" : "ghaBWhsja",
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
 * Rota para registro dos dados da Empresa(company)
 * Faz o registro da empresa
 *
 * body Company Faz o registro de uma empresa usando o seu nome e o tipo de empresa ou negocio, telefone e o nif - precisas de um token gerado no registro ou autenticacao.
 * returns CompanyResponse
 **/
exports.registerCompany = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "company_name" : "Adj Fashion",
  "company_type" : "Loja de Roupa (Botique)",
  "phone" : "936xxxxxxx",
  "nif" : 50134542438,
  "user_id" : "ghaBWhsja",
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
 * Rota para registro dos dados da Empresa(company)
 * Faz o registro da empresa
 *
 * body Company Faz o registro de uma empresa usando o seu nome e o tipo de empresa ou negocio, telefone e o nif - precisas de um token gerado no registro ou autenticacao.
 * returns CompanyResponse
 **/
exports.registerCompany = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "company_name" : "Adj Fashion",
  "company_type" : "Loja de Roupa (Botique)",
  "phone" : "936xxxxxxx",
  "nif" : 50134542438,
  "user_id" : "ghaBWhsja",
  "_id" : "eyJhbGciO1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

