const Role = require('../classes/role.js');

exports.create = async (req, res) => {
    const organization = new Role(req.body);
    await organization.insert();
    res.json(organization.getLiteral());
}

exports.readAll = async (req, res) => {
    const organization = new Role();
    await organization.getAll();
    res.json(organization.getLiteral());
}

exports.read = async (req, res) => {
    const id = req.params.id;
    const organization = new Role();
    await organization.getById(id);
    res.json(organization.getLiteral());
}

exports.update = async (req, res) => {
    const id = req.params.id;
    const organization = new Role();
    await organization.getById(id);
    await organization.merge(req.body);
    console.log(organization, "merge");
    await organization.update(id);
    res.json(organization.getLiteral());
}