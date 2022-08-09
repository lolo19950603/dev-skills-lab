var express = require('express');
var router = express.Router();
const devSkillsCtrl = require('../controllers/devSkills');

/* GET users listing. */
router.get('/', devSkillsCtrl.index);
router.get('/new', devSkillsCtrl.createPage);
router.post('/', devSkillsCtrl.create);
router.get('/:id/edit', devSkillsCtrl.edit);
router.put('/:id', devSkillsCtrl.editSkill);
router.delete('/:id', devSkillsCtrl.deleteSkill);
router.get('/:id', devSkillsCtrl.show);

module.exports = router;
