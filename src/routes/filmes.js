const express = require('express');
const router = express.Router();
const controllerFilmes = require('../controllers/filmes')
const middlewareFilmes = require("../middlewares/filmes")

router.get("/", controllerFilmes.getFilmes);
router.post("/", middlewareFilmes.validateInsertFilmes, controllerFilmes.insertFilmes);

module.exports = router;