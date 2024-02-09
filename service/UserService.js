'use strict';


/**
 * Rota para autenticao de usuarios
 * Faz a autenticao de usuarios usando o email e a senha
 *
 * body UserAuth Faz a autenticao de usuarios usando o seu email e a sua senha
 * returns User
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "I1NiIsInR5cCI6Ik",
  "name" : "Edocha Afonso",
  "_id" : "eyJhbGciO1",
  "email" : "eduardo01@email.com",
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para autenticao de usuarios
 * Faz a autenticao de usuarios usando o email e a senha
 *
 * body UserAuth Faz a autenticao de usuarios usando o seu email e a sua senha
 * returns User
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "I1NiIsInR5cCI6Ik",
  "name" : "Edocha Afonso",
  "_id" : "eyJhbGciO1",
  "email" : "eduardo01@email.com",
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para registro de usuarios
 * Faz o regsitro de novos usuarios
 *
 * body UserRegister Faz a autenticao de usuarios usando o seu o email, nome, phone, pin code e a senha
 * returns User
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "I1NiIsInR5cCI6Ik",
  "name" : "Edocha Afonso",
  "_id" : "eyJhbGciO1",
  "email" : "eduardo01@email.com",
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para registro de usuarios
 * Faz o regsitro de novos usuarios
 *
 * body UserRegister Faz a autenticao de usuarios usando o seu o email, nome, phone, pin code e a senha
 * returns User
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "I1NiIsInR5cCI6Ik",
  "name" : "Edocha Afonso",
  "_id" : "eyJhbGciO1",
  "email" : "eduardo01@email.com",
  "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

