const pool = require("../config/DB");

function selectAll(){
    return pool.query('SELECT * FROM Autor');
}
function selectById(autorId){
    return pool.query('SELECT * FROM Autor WHERE ID = ?', [autorId]);
}
function insertAutor({nombre, email, imagen}){
    return pool.query('INSERT INTO Autor (nombre, email, imagen) VALUES (?, ?, ?)',[nombre, email, imagen]);
}
function updateById ({nombre, email, imagen}, [autorId]){
    return pool.query('UPDATE Autor SET nombre = ?, email = ?, imagen = ? WHERE id = ?',[nombre, email, imagen, autorId])
}
function deleteById(autorId){
    return pool.query('DELETE FROM Autor WHERE id = ?', [autorId]);
}

module.exports = {
    selectAll, selectById, insertAutor, updateById, deleteById
}