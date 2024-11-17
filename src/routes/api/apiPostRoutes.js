const router = require('express').Router()

const { getAllPost, getPostById, newPost, getPostByAutor, updatePostById, deletePostById } = require('../../controllers/apiPostController');

//GET'S//
router.get('/', getAllPost);
router.get('/:postId', getPostById);
router.get('/autor/:autorId',getPostByAutor);
//POST'S//
router.post('/', newPost);
//MODIFICAR POST//
router.put('/:postId', updatePostById);
//ELIMINAR POST//
router.delete('/:postId', deletePostById);

module.exports = router;