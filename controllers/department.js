const Department = require('../classes/department.js');

exports.create = async (req, res) => {
    const department = new Department(req.body);
    await department.insert();
    res.json(department.getLiteral());
}

exports.readAll = async (req, res) => {
    const department = new Department();
    await department.getAll();
    res.json(department.getLiteral());
}

exports.read = async (req, res) => {
    const id = req.params.id;
    const department = new Department();
    await department.getById(id);
    res.json(department.getLiteral());
}

exports.update = async (req, res) => {
    const id = req.params.id;
    const department = new Department();
    await department.getById(id);
    await department.merge(req.body);
    console.log(department, "merge");
    await department.update(id);
    res.json(department.getLiteral());
}