const DevSkill = require('../models/devSkill');

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('devSkills/index', {
        devSkills: DevSkill.getAll()
    });
}

function show(req, res) {
    res.render('devSkills/show', {
        devSkill: DevSkill.getOne(req.params.id)
    });
}