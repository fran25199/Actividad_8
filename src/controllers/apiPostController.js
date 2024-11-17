const { selectAll, selectById, insertPost, selectByAutor, updateById, deleteById } = require("../models/apiPostModel");

const getAllPost = async (req, res, next) => {
    try {
        const [result] = await selectAll()
        res.json(result);
    } catch (error) {
        next(error)
    }
};
const getPostById = async (req, res, next) => {
    const {postId} = req.params;
    try {
        const [result] = await selectById(postId);
        res.json(result);
    } catch (error) {
        next(error);
    }
};
const getPostByAutor = async (req, res, next) => {
    const {autorId} = req.params;
    try {
        const [result] = await selectByAutor(autorId);
        res.json(result);
    } catch (error) {
        next(error);
    }
};
const newPost = async (req, res, next) =>{
    try {
        const [result] = await insertPost(req.body);
        const [post] = await selectById(result.insertId);
        res.json(post);
    } catch (error) {
        next(error);
    }
}
const updatePostById = async (req, res, next) => {
    const {postId} = req.params
    try {
        const [result] = await updateById (req.body,postId);
        const [post] = await selectById (postId);
        res.json(post)
    } catch (error) {
        next(error)
    }
}
const deletePostById = async (req, res, next) => {
    const {postId} = req.params
    try {
        const [post] = await selectById (postId);
        const [result] = await deleteById (postId);
        res.json(post)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllPost, getPostById, newPost, getPostByAutor, updatePostById, deletePostById
}