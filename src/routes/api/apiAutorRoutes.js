const router = require('express').Router()

const { Router } = require('express');
const { getAllAutor, getAutorById, newAutor, updateAutorById, deleteAutorById } = require('../../controllers/apiAutoController');
//GET'S//
router.get('/', getAllAutor);
router.get('/:autorId', getAutorById);
//POST'S//
router.post('/', newAutor);
//MODIFICAR Autor//
router.put('/:autorId', updateAutorById);
//ELIMINAR Autor//
router.delete('/:autorId', deleteAutorById);

module.exports = router;