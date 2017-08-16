class Hero {
    constructor(newId, newName) {
        this._id = newId;
        this._name = newName;
    }

    get id(){
        return this._id;
    }

    set id(newId){
        this._id = newId;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }
}

let names = [
    'Mr. Viorel',
    'Narco', 
    'Bombasto', 
    'Celeritas', 
    'Magneta', 
    'RubberMan', 
    'Dynama', 
    'Dr IQ', 
    'Magma', 
    'Tornado'
];

let HEROES = [];
for(let i = 0; i < names.length; i++){
    HEROES.push(new Hero(i, names[i]));
}


function getHeroes() {
    return HEROES;
}

function getHeroById(id) {
    let len = HEROES.length;
    for (let i = 0; i < len; i++) {
        let currentHero = HEROES[i];
        if (currentHero.id === id) {
            return currentHero;
        }
    }
}

function updateHero(id, changes){
    let len = HEROES.length;
    for(let i = 0; i < len; i++){
        let currentHero = HEROES[i];
        if(currentHero.id === id){
            currentHero._name = changes.newName;
        }
        break;
    }
}

module.exports = {
    getHeroes: getHeroes,
    getHeroById: getHeroById,
    updateHero: updateHero
}