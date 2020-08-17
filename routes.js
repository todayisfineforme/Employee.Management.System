// const company = require('./controllers/employee.js');
const department = require('./controllers/department.js');
// const role = require('./controllers/role.js');

exports.route = (app, connection) => {
    app.get('/status', (request,response) => {
        const status = {
            status: 'ok'
        }
        response.json(status);
    });

    // app.post('/employee', company.create);
    // app.get('/employee/', company.readAll);
    // app.get('/employee/:id?', company.read);
    // app.patch('/employee/:id', company.update);

    app.post('/department', department.create);
    app.get('/department/', department.readAll);
    app.get('/department/:id?', department.read);
    app.patch('/department/:id', department.update);

    // app.post('/role', role.create);
    // app.get('/role/', role.readAll);
    // app.get('/role/:id?', role.read);
    // app.patch('/role/:id', role.update);
}