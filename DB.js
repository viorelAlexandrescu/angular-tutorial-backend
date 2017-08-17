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

// binary search implementation
function getIndexOfHeroById(id_param){
    let lowerBound = 0, // start from the first item
        upperBound = HEROES.length - 1, // end at the of the array
        guess,
        position;

    while (upperBound >= lowerBound) {
        position = Math.floor((lowerBound + upperBound)/2);
        guess = HEROES[position]._id;

        if (guess == id_param) {
            return position;
        }

        if (guess < id_param) {
            lowerBound = position + 1;
        } else {
            upperBound = position - 1;
        }
    }

    return -1;
}

function getHeroes() {
    return HEROES;
}

// return hero object or null if there is no hero with that id
function getHeroById(id) {
    let queriedHero = HEROES[getIndexOfHeroById(id)];
    if(queriedHero != undefined)
        return queriedHero;
    else
        return null;
}

// return true if hero was found and changes were applied, false if no hero was found
function updateHero(id, changes){
    let queriedHero = HEROES[getIndexOfHeroById(id)];
    if(queriedHero != undefined) {
        // here add the changes that will be made, according to the class's fields.
        queriedHero._name = changes.newName;
        return true;
    } else {
        return false;
    }
}

module.exports = {
    getHeroes: getHeroes,
    getHeroById: getHeroById,
    updateHero: updateHero
}