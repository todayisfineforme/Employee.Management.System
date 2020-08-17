const model = require('../models/role.js');

class Role {
    constructor(Role_obj){
        this._Role = Role_obj;
    }
    get id(){
        return this._Role.id;
    }
    get title(){
        return this._Role.Role
    }
    set title(title){
        this._Role.title = title;
    }
    get salary(){
        return this._Role.salary
    }
    set salary(salary){
        this._Role.salary = salary;
    }
    get department_id(){
        return this._Role.department_id
    }
    set department_id(department_id){
        this._Role.department_id = department_id;
    }
    async insert(){
        const results = await model.insert(this._Role);
        this._Role.id = results.insertId;
    }
    async getAll(){
        this._Role = await model.selectAll();
    }
    async getById(id){
        this._Role = await model.selectByID(id);
    }
    async merge(new_Role){
        this._Role = {...this._Role, ...new_Role}
    }
    async update(id){
        await model.update(id, this._Role);
    }
    getLiteral(){
        return this._Role;
    }
}
module.exports = Role;