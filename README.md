#xss-escape

Escapes strings for safe insertion into html, and helps prevents cross site scripting attacks.

xss-escape escapes the following characters to their respective html character codes.

- &amp; -> &amp;amp;
- &lt; -> &amp;lt;
- &gt; -> &amp;gt;
- " -> &amp;quot;
- ' -> &amp;#x27;
- / -> &amp;#x2F;

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
While in the project's root directory.

 - `npm install`
 - `nodeunit test.js`

or run tests on every file save.

 - `grunt watch`


##Run Benchmarks
While in the project's root directory run.

 - `npm install`
 - `grunt benchmark`
