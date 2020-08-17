const mysql = require('../config/connection')

exports.selectAll = async () => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM employee`);
    return data;
}

exports.selectByID = async (id) => {
    const connection = await mysql.connect();
    const [data] = await connection.query(`SELECT * FROM employee WHERE id = ?`, [id]);
    return data[0];
}

exports.insert = async(employee_obj) =>{
    const connection = await mysql.connect();
    const [data] = await connection.query(`INSERT INTO employee SET ?;`, [employee_obj]);
    return data;
}

exports.update = async(id, employee_obj) =>{
    const connection = await mysql.connect();
    const [data] = await connection.query(`UPDATE employee SET ? WHERE id = ?`, [employee_obj, id]);
    return data;
}