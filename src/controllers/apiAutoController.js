const { selectAll, selectById, insertAutor, updateById, deleteById } = require("../models/apiAutorModel");

const getAllAutor = async (req, res, next) => {
    try {
        const [result] = await selectAll();
        res.json(result);
    } catch (error) {
        next(error)
    }
};
const getAutorById = async (req, res, next) => {
    const {autorId} = req.params;
    try {
        const [result] = await selectById(autorId);
        res.json(result);
    } catch (error) {
        next(error);
    }
};
const newAutor = async (req, res, next) =>{
    try {
        const [result] = await insertAutor(req.body);
        const [autor] = await selectById(result.insertId);
        res.json(autor);
    } catch (error) {
        next(error);
    }
}
const updateAutorById = async (req, res, next) => {
    const {autorId} = req.params
    try {
        const [result] = await updateById (req.body,autorId);
        const [autor] = await selectById (autorId);
        res.json(autor)
    } catch (error) {
        next(error)
    }
}
const deleteAutorById = async (req, res, next) => {
    const {autorId} = req.params
    try {
        const [autor] = await selectById (autorId);
        const [result] = await deleteById (autorId);
        res.json(autor)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllAutor, getAutorById, newAutor, updateAutorById, deleteAutorById
}