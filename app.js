const express   = require('express'),
      app       = express(),
      cors      = require('cors'),
      bodyParser = require('body-parser'),
      db        = require('./DB.js'),
      apiConfig = require('./config.json');


function getHeroesList(req, res) {
    let heroesListObject = {
        heroes: db.getHeroes()
    };

    res.json(JSON.stringify(heroesListObject));
    res.end();
}

function getHeroById(req, res) {
    let heroId = parseInt(req.params.heroId);
    let heroObject = {
    	hero: db.getHeroById(heroId)
    }

    res.json(JSON.stringify(heroObject));
    res.end();
}

function updateHeroById(req, res){    
    let heroId = parseInt(req.params.heroId);
    let changes = req.body;
    db.updateHero(heroId, changes);
    res.end();
}

app.use(cors());
app.use(bodyParser.json());

app.get(apiConfig.apiUrl, function(req, res){
    res.send('Heroes Backend Api Root');
    res.end();
});
app.get(apiConfig.apiUrl + apiConfig.heroQueryUrls[0], getHeroesList)
app.get(apiConfig.apiUrl + apiConfig.heroQueryUrls[1], getHeroById)
app.put(apiConfig.apiUrl + apiConfig.heroUpdateUrl, updateHeroById)

app.listen(3000, function() {
    console.log('Backend listening on port 3000!');
})
