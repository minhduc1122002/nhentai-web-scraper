const axios = require('axios')
const Request = require("./util/Request");
const request = new Request();
const baseUrl = "https://nhentai.net";

module.exports = class nhentai {
    constructor() {}

    getBook(query) {
        var id
        if (typeof query == "number") query = query.toString()
        if (typeof query == "string") {
            id = query.includes(baseUrl) ? query.slice(`${baseUrl}/g/`.length).replace(/\//g, "") : query
        }
        return request.getBook(id)
        
    }

    random() {
        let random = `${baseUrl}/random`;
        return axios.get(random).then((res) => {
            let url = res.request._redirectable._currentUrl;
            return this.getBook(url);
        })
    }

    tag(tag, page = 1, sort) {
        var book
        if (sort) {
            book = request.getList(`/tag/${tag}/${sort}?page=${page}`)
        } else {
            book = request.getList(`/tag/${tag}/?page=${page}`)
        }
        return book
    }

    search(query, page = 1, sort) {
        var book
        if (sort) {
            book = request.getList(`/search/?q=${query}&sort=${sort}&page=${page}`)
        } else {
            book = request.getList(`/search/?q=${query}&page=${page}`)
        }
        return book
    }

    character(character, page = 1, sort) {
        var book
        if (sort) {
            book = request.getList(`/character/${character}/${sort}?page=${page}`)
        } else {
            book = request.getList(`/character/${character}/?page=${page}`)
        }
        return book
    }

    parody(parody, page = 1, sort) {
        var book
        if (sort) {
            book = request.getList(`/parody/${parody}/${sort}?page=${page}`)
        } else {
            book = request.getList(`/parody/${parody}/?page=${page}`)
        }
        return book
    }

    artist(artist, page = 1, sort) {
        var book
        if (sort) {
            book = request.getList(`/artist/${artist}/${sort}?page=${page}`)
        } else {
            book = request.getList(`/artist/${artist}/?page=${page}`)
        }
        return book
    }

    //get trending book
    getPopularNow() {
        return request.getPopularNow()
    }
}