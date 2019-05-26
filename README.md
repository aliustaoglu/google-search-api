A simple leecher for Google Search API

Self hosted crawler/parser

fetch('http://localhost:3003/search?q=yourgooglesearchquery')

Result:

```json
[
    {
        "link": "https://anywebsitelink",
        "text": "Website's meta description"
    },
    {
        "link": "https://anywebsitelink2",
        "text": "Website's meta description2"
    }
]
```