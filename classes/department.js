const model = require('../models/department');

class Department {
    constructor(Department_obj){
        this._Department = Department_obj;
    }
    get id(){
        return this._Department.id;
    }
    get department(){
        return this._Department.department
    }
    set department(department){
        this._Department.department = department;
    }
    async insert(){
        const results = await model.insert(this._Department);
        this._Department.id = results.insertId;
    }
    async getAll(){
        this._Department = await model.selectAll();
    }
    async getById(id){
        this._Department = await model.selectByID(id);
    }
    async merge(new_Department){
        this._Department = {...this._Department, ...new_Department}
    }
    async update(id){
        await model.update(id, this._Department);
    }
    getLiteral(){
        return this._Department;
    }
}

module.exports = Department;