/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if ( s.length !== words.length ) return false

    for (let i=0; i< words.length;i++) {
        if (s[i] !== words[i][0] ) return false
    }
    return true
};