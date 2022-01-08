const axios = require('axios')
const cheerio = require('cheerio')
const baseURL = 'https://nhentai.net'

module.exports = class Request {
    constructor() {}

    //get book by code
    async getBook(code) {
        return axios.get(`${baseURL}/g/${code}`).then(response => {
            var english
            var japan
            var tags
            var totalpages
            var favorites
            const html = response.data
            const $ = cheerio.load(html)
            const thumbnail = $('#cover', html).find('img').attr('data-src')
            $('#info', html).each(function() {
                english = $('h1.title', this).text()
                japan = $('h2.title', this).text()
                tags = $('.name', this).toArray().map(element => {
                    return {"type": $(element).parent().attr('href').split('/')[1],
                            "name": $(element).text(),
                            "url": `${baseURL}` + $(element).parent().attr('href'),
                            "count": $(element).parent().children('.count').text()}
                });
                totalpages = tags.pop().name
                favorites = $('span.nobold', this).text().replaceAll('(', '').replaceAll(')', '')
            })
            return {
                "id": code,
                "english title": english,
                "japanese title": japan,
                thumbnail,
                tags,
                totalpages,
                favorites
            }
        })
        .catch((e) => {
            if (e == 404 || e.response.status == 403)
              return "Book not found!";
            else throw e;
        });
    }

    //get list of book by url
    async getList(inputUrl) {
        return axios.get(`${baseURL}${inputUrl}`).then(response => {
            const results = []
            const html = response.data
            const $ = cheerio.load(html)
            $('.gallery', html).each(function() {
                const url = $(this).find('a').attr('href')
                const id = $(this).find('a').attr('href').split('/')[2]
                const title = $(this).find('.caption').text()
                const thumbnail = $(this).find('img').attr('data-src')
                const tags = $(this).attr("data-tags").split(" ")
                const language = tags.includes("6346") ? "japanese" : tags.includes("12227") 
                ? "english" : tags.includes("29963") ? "chinese" : undefined;
                results.push({
                    id,
                    thumbnail,
                    "url": `${baseURL}${url}`,
                    language,
                    title
                })
            })
            return results
        })
        .catch((e) => {
            if (e.response.status == 404 || e.response.status == 403)
              return "Book not found!";
            else throw e;
        });
    }

    //get trending book
    async getPopularNow() {
        return axios.get(`${baseURL}`).then(response => {
            const results = []
            const html = response.data
            const $ = cheerio.load(html)
            $('.index-popular .gallery', html).each(function() {
                const url = $(this).find('a').attr('href')
                const id = $(this).find('a').attr('href').split('/')[2]
                const title = $(this).find('.caption').text()
                const thumbnail = $(this).find('img').attr('data-src')
                const tags = $(this).attr("data-tags").split(" ")
                const language = tags.includes("6346") ? "japanese" : tags.includes("12227") 
                ? "english" : tags.includes("29963") ? "chinese" : undefined;
                results.push({
                    id,
                    thumbnail,
                    "url": `${baseURL}${url}`,
                    language,
                    title
                })
            })
            return results
        })
        .catch((e) => {
            if (e.response.status == 404 || e.response.status == 403)
              return "Book not found!";
            else throw e;
        });
    }
}