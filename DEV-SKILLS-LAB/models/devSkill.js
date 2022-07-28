const devSkills = [
    {id: 125223, name: 'Java Script', years: 3},
    {id: 127904, name: 'Css', years: 3},
    {id: 139608, name: 'Html', years: 3},
    {id: 165485, name: 'Python', years: 1}
  ];

module.exports = {
    getAll,
    getOne
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