#xss-escape

Escapes your strings and objects or arrays of strings for prevention of
Cross Site Scripting attacks.

Escapes the following characters to there respective html character codes.

'&' -> '&amp;'
'<' -> '&lt;'
'>' -> '&gt;'
'"' -> '&quot;'
"'" -> '&#x27;'
'/' -> '&#x2F;'

##In NodeJS
`npm install xss-escape`
```js
var xssEscape = require('xss-escape');
var escapedString = xssEscape(unsafeString);
```

##In the Browser
```html
<script src="path/to/xss-escape.js"></script>
<script>
    var escapedString = xssEscape(unsafeString);
</script>
```

##Can be used with nested objects or arrays.
```js
var escapedObject = xssEscape({ a: 'foo', [{ b: 'bar' }, 'baz' ] });
```

##Run Tests
While in the projects root directory run.
`npm install`
`nodeunit test.js`
