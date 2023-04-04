const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

const routeName = "product" ;

// CREATE - Cria um novo produto
router.post(`/${routeName}`, productController.create);

// READ - Retorna todos os produtos
router.get(`/${routeName}`, productController.getAll);

// READ - Retorna um produto por ID
router.get(`/${routeName}/:id`, productController.getById);

// UPDATE - Atualiza um produto por ID
router.put(`/${routeName}/:id`, productController.update);

// DELETE - Deleta um produto por ID
router.delete(`/${routeName}/:id`, productController.delete);

module.exports = router;
