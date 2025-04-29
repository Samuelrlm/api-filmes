const express = require('express');
const router = express.Router();
const controllerFilmes = require('../controllers/filmes')

router.get("/", controllerFilmes.getFilmes);
router.post("/", controllerFilmes.insertFilmes);

module.exports = router;