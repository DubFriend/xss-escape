var xss = require('./xss-escape');

var constructString = function (numberOfIterations) {
    var longString = '';
    var string = '&abc/def\'ghi"klm<nop>qrs';
    // var string = '&abc/def\'ghi"klm<nop>qrs01234567';
    var i;
    for(i = 0; i < numberOfIterations; i += 1) {
        longString += string;
    }
    return longString;
};

var string1 = constructString(1);
var string10 = constructString(10);
var string100 = constructString(100);

var stringVariable = constructString(1);

module.exports = {
    name: 'xss escaping',
    tests: {
        charactersVariableCharForLoopStrategy: function () {
            xss(stringVariable, 'charForLoopStrategy');
        },
        charactersVariableRegexStrategy: function () {
            xss(stringVariable, 'regexStrategy');
        },

        characters24CharForLoopStrategy: function () {
            xss(string1, 'charForLoopStrategy');
        },
        characters240CharForLoopStrategy: function () {
            xss(string10, 'charForLoopStrategy');
        },
        characters2400CharForLoopStrategy: function () {
            xss(string100, 'charForLoopStrategy');
        },

        characters24RegexStrategy: function () {
            xss(string1, 'regexStrategy');
        },
        characters240RegexStrategy: function () {
            xss(string10, 'regexStrategy');
        },
        characters2400RegexStrategy: function () {
            xss(string100, 'regexStrategy');
        }
    }
};