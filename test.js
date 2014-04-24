var xss = require('./xss-escape');

exports.escapeAmpersand = function (test) {
    test.strictEqual(xss('a&b&c'), 'a&amp;b&amp;c');
    test.done();
};

exports.escapeLessThan = function (test) {
    test.strictEqual(xss('a<b<c'), 'a&lt;b&lt;c');
    test.done();
};

exports.escapeGreaterThan = function (test) {
    test.strictEqual(xss('a>b>c'), 'a&gt;b&gt;c');
    test.done();
};

exports.escapeDoubleQuote = function (test) {
    test.strictEqual(xss('a"b"c'), 'a&quot;b&quot;c');
    test.done();
};

exports.escapeSingleQuote = function (test) {
    test.strictEqual(xss("a'b'c"), 'a&#x27;b&#x27;c');
    test.done();
};

exports.escapeForwardSlash = function (test) {
    test.strictEqual(xss("a/b/c"), 'a&#x2F;b&#x2F;c');
    test.done();
};

exports.escapeSimpleArray = function (test) {
    test.deepEqual(xss(['a&', 'b/']), ['a&amp;', 'b&#x2F;']);
    test.done();
};

exports.escapeSimpleObject = function (test) {
    test.deepEqual(xss({ a: '&', b:'/' }), { a :'&amp;', b: '&#x2F;' });
    test.done();
};

exports.escapeNestedObject = function (test) {
    test.deepEqual(xss({ a: '&', b: [{c: '/'}]}), { a: '&amp;', b: [{c: '&#x2F;'}]});
    test.done();
};

exports.escapeNumber = function (test) {
    test.strictEqual(xss(5), 5);
    test.done();
};
