const devSkills = [
    {id: 125223, name: 'Java Script', years: 3},
    {id: 127904, name: 'CSS', years: 3},
    {id: 139608, name: 'HTML', years: 3},
    {id: 165485, name: 'Python', years: 1}
  ];

idCounter = 165486

module.exports = {
    getAll,
    getOne,
    create
}

function getAll() {
    return devSkills;
}

function getOne(id) {
    for (let skill of devSkills) {
        if (skill.id === parseInt(id)) {
            return skill;
        }
    }
    return null;
}

function create(skill, exp) {
    devSkills.push({id: idCounter, name: skill, years: exp})
}