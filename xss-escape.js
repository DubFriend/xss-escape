// xss-escape
// https://github.com/DubFriend/xss-escape

// https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet

(function () {
    'use strict';

    var escapedCharacters = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;'
    };

    var escapeRegex = {
        '&': /&/g,
        '<': /</g,
        '>': />/g,
        '"': /"/g,
        "'": /'/g,
        '/': /\//g
    };

    var isString = function (data) {
        return typeof data === 'string';
    };

    var isArray = function (value) {
        return toString.call(value) === "[object Array]";
    };

    var isObject = function (value) {
        return !isArray(value) && (value instanceof Object);
    };

    var xssEscape = function (data) {
        var escapedData, character, key, i;

        if(isString(data)) {
            escapedData = data;
            for(character in escapedCharacters) {
                escapedData = escapedData.replace(
                    escapeRegex[character], escapedCharacters[character]
                );
            }
        }
        else if(isArray(data)) {
            escapedData = [];
            for(i = 0; i < data.length; i += 1) {
                escapedData.push(xssEscape(data[i]));
            }
        }
        else if(isObject(data)) {
            escapedData = {};
            for(key in data) {
                if(data.hasOwnProperty(key)) {
                    escapedData[key] = xssEscape(data[key]);
                }
            }
        }

        return escapedData;
    };

    // use in browser or nodejs
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = xssEscape;
        }
        exports.xssEscape = xssEscape;
    } else {
        this.xssEscape = xssEscape;
    }

}).call(this);
