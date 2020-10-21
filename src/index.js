module.exports = function check(str, bracketsConfig) {

    strBracketsConfig = [];
    for (let i = 0; i < bracketsConfig.length; i ++) {
        strBracketsConfig = strBracketsConfig.concat(bracketsConfig[i].join(''));
    }
    if (str.length === 0 || str.length % 2 !== 0) return false;
    let i = 0;
    while (i < strBracketsConfig.length) {
        if (str.includes(strBracketsConfig[i])) {
            str = str.replace(strBracketsConfig[i], '');
            i = 0;
        }
        else {
            i = i + 1;
        }
    }
    if (str.length === 0) return true
    else return false;
}
