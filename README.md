# nhentai-web-scraper

## Example

```js
const nhentai = require("nana-api");
const n = new nhentai();

// Get gallery from book ID
n.getBook("386724").then((g) => {
  console.log(g);
});

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
      "name": "producer",
      "url": "https://nhentai.net/character/producer/",
      "count": "3K"
    },
    ...
  ],
  "totalpages": "20",
  "favorites": "12931"
}
```
