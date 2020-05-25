const express = require('express');
const routes = express.Router();

const ProdutosController = require('./controllers/produtoController')

routes.get('/produtos', ProdutosController.index);
routes.post('/produtos', ProdutosController.store);
routes.put('/produtos/:id', ProdutosController.update);
routes.delete('/produtos/:id', ProdutosController.destroy);

module.exports = routes