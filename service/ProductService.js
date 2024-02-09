'use strict';


/**
 * Rota para apagar um produto
 * Essa rota apaga um produto pelo seu id, precisa substituir o id pelo id do produto a ser apagado e precisa de um token gerado na autenticacao ou registro
 *
 * id String ID do produto a ser apagado
 * returns ProductDeleteResponse
 **/
exports.deleteProduct = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Product successfully removed!"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Rota para editar dados do produto
 * Faz a edicao dos dados dos produtos, precisa substituir o id pelo id do produto a ser editado e precisa de um token gerado na autenticacao ou registro
 *
 * body Product Para editar o produto e preciso preencher os campos abaixos
 * id String ID do produto a ser editado
 * returns ProductResponse
 **/
exports.editProduct = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Tenis",
  "category" : "Desportivos",
  "brand" : "Adidas",
  "quantity" : 50,
  "price_f" : "15,000",
  "price" : "20,000",
  "reference" : "referencia_do_produto",
  "description" : "Bom tenis",
  "image" : "tenis_adidas.png",
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
 * Rota para editar dados do produto
 * Faz a edicao dos dados dos produtos, precisa substituir o id pelo id do produto a ser editado e precisa de um token gerado na autenticacao ou registro
 *
 * body Product Para editar o produto e preciso preencher os campos abaixos
 * id String ID do produto a ser editado
 * returns ProductResponse
 **/
exports.editProduct = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Tenis",
  "category" : "Desportivos",
  "brand" : "Adidas",
  "quantity" : 50,
  "price_f" : "15,000",
  "price" : "20,000",
  "reference" : "referencia_do_produto",
  "description" : "Bom tenis",
  "image" : "tenis_adidas.png",
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
 * Retorna todos os produtos
 * Retorna uma lista de todos os produtos registrados - precisas de um token
 *
 * returns AllProduct
 **/
exports.getAllProduct = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "product" : [ {
    "name" : "Tenis",
    "category" : "Desportivos",
    "brand" : "Adidas",
    "quantity" : 50,
    "price_f" : "15,000",
    "price" : "20,000",
    "reference" : "referencia_do_produto",
    "description" : "Bom tenis",
    "image" : "tenis_adidas.png",
    "_id" : "eyJhbGciO1"
  }, {
    "name" : "Tenis",
    "category" : "Desportivos",
    "brand" : "Adidas",
    "quantity" : 50,
    "price_f" : "15,000",
    "price" : "20,000",
    "reference" : "referencia_do_produto",
    "description" : "Bom tenis",
    "image" : "tenis_adidas.png",
    "_id" : "eyJhbGciO1"
  }, {
    "name" : "Tenis",
    "category" : "Desportivos",
    "brand" : "Adidas",
    "quantity" : 50,
    "price_f" : "15,000",
    "price" : "20,000",
    "reference" : "referencia_do_produto",
    "description" : "Bom tenis",
    "image" : "tenis_adidas.png",
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
 * Retorna uma lista dos produtos com estoque baixo
 * Retorna uma lista dos produtos com estoque baixo - precisas de um token
 *
 * returns AllProductLowStock
 **/
exports.getAllProductLowStock = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "product" : [ {
    "name" : "Tenis",
    "purchase_number" : 20,
    "category" : "Desportivos",
    "brand" : "Adidas",
    "quantity" : 10,
    "price_f" : "15,000",
    "price" : "20,000",
    "reference" : "referencia_do_produto",
    "description" : "Bom tenis",
    "image" : "tenis_adidas.png",
    "_id" : "eyJhbGciO1"
  }, {
    "name" : "Tenis",
    "purchase_number" : 43,
    "category" : "Desportivos",
    "brand" : "Adidas",
    "quantity" : 10,
    "price_f" : "15,000",
    "price" : "20,000",
    "reference" : "referencia_do_produto",
    "description" : "Bom tenis",
    "image" : "tenis_adidas.png",
    "_id" : "eyJhbGciO1"
  }, {
    "name" : "Tenis",
    "purchase_number" : 28,
    "category" : "Desportivos",
    "brand" : "Adidas",
    "quantity" : 10,
    "price_f" : "15,000",
    "price" : "20,000",
    "reference" : "referencia_do_produto",
    "description" : "Bom tenis",
    "image" : "tenis_adidas.png",
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
 * Retorna uma lista dos 5 produtos mais comprados
 * Retorna uma lista dos 5 produtos mais comprados - precisas de um token
 *
 * returns AllProductMorePurchased
 **/
exports.getAllProductMorePurchased = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "product" : [ {
    "name" : "Tenis",
    "purchase_number" : 20,
    "category" : "Desportivos",
    "brand" : "Adidas",
    "quantity" : 50,
    "price_f" : "15,000",
    "price" : "20,000",
    "reference" : "referencia_do_produto",
    "description" : "Bom tenis",
    "image" : "tenis_adidas.png",
    "_id" : "eyJhbGciO1"
  }, {
    "name" : "Tenis",
    "purchase_number" : 43,
    "category" : "Desportivos",
    "brand" : "Adidas",
    "quantity" : 50,
    "price_f" : "15,000",
    "price" : "20,000",
    "reference" : "referencia_do_produto",
    "description" : "Bom tenis",
    "image" : "tenis_adidas.png",
    "_id" : "eyJhbGciO1"
  }, {
    "name" : "Tenis",
    "purchase_number" : 28,
    "category" : "Desportivos",
    "brand" : "Adidas",
    "quantity" : 50,
    "price_f" : "15,000",
    "price" : "20,000",
    "reference" : "referencia_do_produto",
    "description" : "Bom tenis",
    "image" : "tenis_adidas.png",
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
 * Retorna uma lista dos produtos com estoque em falta
 * Retorna uma lista dos produtos com estoque em falta - precisas de um token
 *
 * returns AllProductOutStock
 **/
exports.getAllProductOutStock = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "product" : [ {
    "name" : "Tenis",
    "purchase_number" : 20,
    "category" : "Desportivos",
    "brand" : "Adidas",
    "quantity" : 0,
    "price_f" : "15,000",
    "price" : "20,000",
    "reference" : "referencia_do_produto",
    "description" : "Bom tenis",
    "image" : "tenis_adidas.png",
    "_id" : "eyJhbGciO1"
  }, {
    "name" : "Tenis",
    "purchase_number" : 43,
    "category" : "Desportivos",
    "brand" : "Adidas",
    "quantity" : 0,
    "price_f" : "15,000",
    "price" : "20,000",
    "reference" : "referencia_do_produto",
    "description" : "Bom tenis",
    "image" : "tenis_adidas.png",
    "_id" : "eyJhbGciO1"
  }, {
    "name" : "Tenis",
    "purchase_number" : 28,
    "category" : "Desportivos",
    "brand" : "Adidas",
    "quantity" : 0,
    "price_f" : "15,000",
    "price" : "20,000",
    "reference" : "referencia_do_produto",
    "description" : "Bom tenis",
    "image" : "tenis_adidas.png",
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
 * Rota para registro de produtos(product)
 * Faz o registro de novos produtos
 *
 * body Product Faz o registro de produtos usando o seu nome, categoria, marca, quantidade, preco do fornecedor, preco de venda, referencia, descricao e imagem.
 * returns ProductResponse
 **/
exports.registerProduct = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Tenis",
  "category" : "Desportivos",
  "brand" : "Adidas",
  "quantity" : 50,
  "price_f" : "15,000",
  "price" : "20,000",
  "reference" : "referencia_do_produto",
  "description" : "Bom tenis",
  "image" : "tenis_adidas.png",
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
 * Rota para pegar ou ver os dados de apenas um produto
 * Essa rota retorna os dados de apenas um produto pelo seu id, precisa substituir o id pelo id do produto a ser visualizado e precisa de um token gerado na autenticacao ou registro
 *
 * id String ID do produto a ser visualizado
 * returns ProductResponse
 **/
exports.viewProduct = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Tenis",
  "category" : "Desportivos",
  "brand" : "Adidas",
  "quantity" : 50,
  "price_f" : "15,000",
  "price" : "20,000",
  "reference" : "referencia_do_produto",
  "description" : "Bom tenis",
  "image" : "tenis_adidas.png",
  "_id" : "eyJhbGciO1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

