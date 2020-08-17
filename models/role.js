const mysql = require('../config/connection');

exports.selectAll = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM role`);
    return data;
}

exports.selectByID = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM role WHERE id = ?`, [id]);
    return data[0];
}

exports.insert = async(department_obj) =>{
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO role SET ?;`, [department_obj]);
    return data;
}

exports.update = async(id, department_obj) =>{
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE role SET ? WHERE id = ?`, [department_obj, id]);
    return data;
}