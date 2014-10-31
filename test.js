var xss = require('./xss-escape');

exports.escapeAmpersandCharForLoopStrategy = function (test) {
    test.strictEqual(xss('a&b&c', 'charForLoopStrategy'), 'a&amp;b&amp;c');
    test.done();
};

exports.escapeLessThanCharForLoopStrategy = function (test) {
    test.strictEqual(xss('a<b<c', 'charForLoopStrategy'), 'a&lt;b&lt;c');
    test.done();
};

exports.escapeGreaterThanCharForLoopStrategy = function (test) {
    test.strictEqual(xss('a>b>c', 'charForLoopStrategy'), 'a&gt;b&gt;c');
    test.done();
};

exports.escapeDoubleQuoteCharForLoopStrategy = function (test) {
    test.strictEqual(xss('a"b"c', 'charForLoopStrategy'), 'a&quot;b&quot;c');
    test.done();
};

exports.escapeSingleQuoteCharForLoopStrategy = function (test) {
    test.strictEqual(xss("a'b'c", 'charForLoopStrategy'), 'a&#x27;b&#x27;c');
    test.done();
};

exports.escapeForwardSlashCharForLoopStrategy = function (test) {
    test.strictEqual(xss("a/b/c", 'charForLoopStrategy'), 'a&#x2F;b&#x2F;c');
    test.done();
};

exports.escapeSimpleArrayCharForLoopStrategy = function (test) {
    test.deepEqual(xss(['a&', 'b/'], 'charForLoopStrategy'), ['a&amp;', 'b&#x2F;']);
    test.done();
};

exports.escapeSimpleObjectCharForLoopStrategy = function (test) {
    test.deepEqual(xss({ a: '&', b:'/' }, 'charForLoopStrategy'), { a :'&amp;', b: '&#x2F;' });
    test.done();
};

exports.escapeNestedObjectCharForLoopStrategy = function (test) {
    test.deepEqual(xss({ a: '&', b: [{c: '/'}]}, 'charForLoopStrategy'), { a: '&amp;', b: [{c: '&#x2F;'}]});
    test.done();
};

exports.escapeNumberCharForLoopStrategy = function (test) {
    test.strictEqual(xss(5), 5, 'charForLoopStrategy');
    test.done();
};

exports.escapeBooleanCharForLoopStrategy = function (test) {
    test.strictEqual(xss(true), true, 'charForLoopStrategy');
    test.done();
};




exports.escapeAmpersandRegex = function (test) {
    test.strictEqual(xss('a&b&c', 'regexStrategy'), 'a&amp;b&amp;c');
    test.done();
};

exports.escapeLessThanRegex = function (test) {
    test.strictEqual(xss('a<b<c', 'regexStrategy'), 'a&lt;b&lt;c');
    test.done();
};

exports.escapeGreaterThanRegex = function (test) {
    test.strictEqual(xss('a>b>c', 'regexStrategy'), 'a&gt;b&gt;c');
    test.done();
};

exports.escapeDoubleQuoteRegex = function (test) {
    test.strictEqual(xss('a"b"c', 'regexStrategy'), 'a&quot;b&quot;c');
    test.done();
};

exports.escapeSingleQuoteRegex = function (test) {
    test.strictEqual(xss("a'b'c", 'regexStrategy'), 'a&#x27;b&#x27;c');
    test.done();
};

exports.escapeForwardSlashRegex = function (test) {
    test.strictEqual(xss("a/b/c", 'regexStrategy'), 'a&#x2F;b&#x2F;c');
    test.done();
};

exports.escapeSimpleArrayRegex = function (test) {
    test.deepEqual(xss(['a&', 'b/'], 'regexStrategy'), ['a&amp;', 'b&#x2F;']);
    test.done();
};

exports.escapeSimpleObjectRegex = function (test) {
    test.deepEqual(xss({ a: '&', b:'/' }, 'regexStrategy'), { a :'&amp;', b: '&#x2F;' });
    test.done();
};

exports.escapeNestedObjectRegex = function (test) {
    test.deepEqual(xss({ a: '&', b: [{c: '/'}]}, 'regexStrategy'), { a: '&amp;', b: [{c: '&#x2F;'}]});
    test.done();
};

exports.escapeNumberRegex = function (test) {
    test.strictEqual(xss(5), 5, 'regexStrategy');
    test.done();
};

exports.escapeBooleanCharForLoopStrategy = function (test) {
    test.strictEqual(xss(true), true, 'regexStrategy');
    test.done();
};