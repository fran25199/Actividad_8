const pool = require("../config/DB");

function selectAll(){
    return pool.query('SELECT p.id, p.titulo, p.descripcion, p.fecha_creacion, p.categoria, a.nombre, a.email, a.imagen FROM Post p INNER JOIN Autor a ON p.Autor_id = a.id;');
}
function selectById(postId){
    return pool.query('SELECT p.id, p.titulo, p.descripcion, p.fecha_creacion, p.categoria, a.nombre, a.email, a.imagen FROM Post p INNER JOIN Autor a ON p.Autor_id = a.id WHERE p.id = ?;', [postId]);
}
function selectByAutor(autorId){
    return pool.query('SELECT p.id, p.titulo, p.descripcion, p.fecha_creacion, p.categoria, a.nombre, a.email, a.imagen FROM Post p INNER JOIN Autor a ON p.Autor_id = a.id WHERE a.id = ?' , [autorId]);
}
function insertPost({titulo, descripcion, fecha_creacion, categoria, Autor_id}){
    return pool.query('INSERT INTO Post (titulo, descripcion, fecha_creacion, categoria, Autor_id) VALUES (?, ?, ?, ?, ?)',[titulo, descripcion, fecha_creacion, categoria, Autor_id]);
}
function updateById ({titulo, descripcion, fecha_creacion, categoria, Autor_id}, [postId]){
    return pool.query('UPDATE Post SET titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, Autor_id = ? WHERE id = ?',[titulo, descripcion, fecha_creacion, categoria, Autor_id, postId])
}
function deleteById(postId){
    return pool.query('DELETE FROM Post WHERE id = ?', [postId]);
}

module.exports = {
    selectAll, selectById, insertPost, selectByAutor, updateById, deleteById
}