var express = require('express');
var router = express.Router();

const lgpdController = require("../controllers/lgpdController")

router.get('/', lgpdController.index)

/* POST salvar receitas */
router.post('/save', lgpdController.save);

// /* GET para excluir receita */
// router.get('/delete/:id', lgpdController.delete);

/* GET alterar receita */
router.get('/edit/:id', lgpdController.edit);

/* POST para alterar receita */
router.post('/update/:id', lgpdController.update);

module.exports = router;
