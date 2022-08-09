const DevSkill = require('../models/devSkill');

module.exports = {
    index,
    show,
    createPage,
    create,
    deleteSkill,
    edit,
    editSkill
}

function index(req, res) {
    res.render('devskills/index', {
        devSkills: DevSkill.getAll(),
        time: req.time  // add this line
    });
}

function show(req, res) {
    res.render('devskills/show', {
        devSkill: DevSkill.getOne(req.params.id)
    });
}

function createPage(req, res) {
    res.render('devskills/new', {
    });
}

function create(req, res) {
    DevSkill.create(req.body.skill, req.body.years);
    res.redirect('/devskills');
}

function deleteSkill(req, res) {
    DevSkill.deleteSkill(req.params.id);
    res.redirect('/devskills');
}

function edit(req, res) {
    res.render('devskills/edit', {
        devSkill: DevSkill.getOne(req.params.id)
    });
}

function editSkill(req, res) {
    DevSkill.editSkill(req.params.id, req.body);
    res.redirect('/devskills/' + req.params.id);
}