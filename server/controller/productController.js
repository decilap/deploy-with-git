const path = require('path');
const fs = require('fs');
const HTTP_STATUS_CODE_NOT_FOUND = 404;

//const basePathToData = path.join(__dirname, './server');

const getJsonData = function (basePathToData, filename) {
  var filename = path.join(basePathToData, filename);
  return JSON.parse(fs.readFileSync(filename, 'utf-8'));
};

exports.getProducts = function (request, response) {
  var data = getJsonData("server", 'data.json');
  setTimeout(function() {
    return response.send(data.list_products);
  }, 100);
};

exports.getProductsById = function (request, response) {
    const productId = request.params.id;
    var data = getJsonData("server", 'data.json');
    setTimeout(function() {
        let isExist = data.list_products.find(product => product.product_id === productId);
        return isExist ? response.send(isExist) : response.status(HTTP_STATUS_CODE_NOT_FOUND).send({datas: "not found"});
    }, 100);
};