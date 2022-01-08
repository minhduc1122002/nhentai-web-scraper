const PORT = 8000
const express = require('express')
const nhentai = require("./nhentai");
const n = new nhentai();

const app = express()

//welcome
app.get('/', async (req, res) => {
    res.send('Welcome to nhentai.net Scraper API!');
});

//get book with code
app.get('/g/:code', async (req, res) => {
    const code = req.params.code;
    try {
        n.getBook(code).then((result) => {
            res.json(result)
        });
    } catch(e) {
        console.log(e)
    }
})

//get random book
app.get('/random', async (req, res) => {
    try {
        n.random().then((result) => {
            res.json(result)
        });
    } catch(e) {
        console.log(e)
    }
})

//search by query
app.get('/search/:query/:page?/:sort?/', async (req, res) => {
    const query = req.params.query;
    const page = req.params.page || 1;
    const sort = req.params.sort;
    try {
        n.search(query, page, sort).then((result) => {
            res.json(result)
        });
    } catch(e) {
        console.log(e)
    }
})

//search by tag
app.get('/tag/:tag/:page?/:sort?/', async (req, res) => {
    const tag = req.params.tag.replaceAll(' ', '-');
    const page = req.params.page || 1;
    const sort = req.params.sort;
    try {
        n.tag(tag, page, sort).then((result) => {
            res.json(result)
        });
    } catch(e) {
        console.log(e)
    }
})

//search by character
app.get('/character/:character/:page?/:sort?/', async (req, res) => {
    const character = req.params.character.replaceAll(' ', '-');
    const page = req.params.page || 1;
    const sort = req.params.sort;
    try {
        n.character(character, page, sort).then((result) => {
            res.json(result)
        });
    } catch(e) {
        console.log(e)
    }
})

//search by parody
app.get('/parody/:parody/:page?/:sort?/', async (req, res) => {
    const parody = req.params.parody.replaceAll(' ', '-');
    const page = req.params.page || 1;
    const sort = req.params.sort;
    try {
        n.parody(parody, page, sort).then((result) => {
            res.json(result)
        });
    } catch(e) {
        console.log(e)
    }
})

//search by artist
app.get('/artist/:artist/:page?/:sort?/', async (req, res) => {
    const artist = req.params.artist.replaceAll(' ', '-');
    const page = req.params.page || 1;
    const sort = req.params.sort;
    try {
        n.artist(artist, page, sort).then((result) => {
            res.json(result)
        });
    } catch(e) {
        console.log(e)
    }
})


//popular now
app.get('/popular', async (req, res) => {
    try {
        n.getPopularNow().then((result) => {
            res.json(result)
        });
    } catch(e) {
        console.log(e)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))