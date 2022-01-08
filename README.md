# nhentai-web-scraper

## Example

```js
const nhentai = require("./nhentai");
const n = new nhentai();

// Get gallery from book ID
n.getBook("386724").then((g) => {
  console.log(g);
});
```

```
http://localhost:8000/g/386724
```

## Results

- **Book Object**

```
{
  "id": "386724",
  "english title": "(C99) [manymanyrain (Amagasa Ikuta)] Sakayume no Nokoriga (THE iDOLM@STER Shiny Colors) [English] [SatorinTL]",
  "japanese title": "(C99) [manymanyrain (雨暈郁太)] 逆夢の残り香 (アイドルマスター シャイニーカラーズ) [英訳]",
  "thumbnail": "https://t.nhentai.net/galleries/2104849/cover.jpg",
  "tags": [
    {
      "type": "parody",
      "name": "the idolmaster",
      "url": "https://nhentai.net/parody/the-idolmaster/",
      "count": "10K"
    },
    {
      "type": "character",
      "name": "madoka higuchi",
      "url": "https://nhentai.net/character/madoka-higuchi/",
      "count": "36"
    },
   ...
  ],
  "totalpages": "20",
  "favorites": "12931"
}
```
## API List

**nhentai.getBook(ID)**

Get book API from book ID of book Link  
return a `Book Object`

**nhentai.randome()**

Get random book
return a `Book Object`

**nhentai.popular()** 

Get book list from popular section  
return a `List Object`

**nhentai.search(keyword, page, sort)**

Get search list from keyword provided
return a `List Object`
