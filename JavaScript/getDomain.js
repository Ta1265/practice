/*
Write a function that when given
a URL as a string, parses out
just the domain name and returns
it as a string. For example:

Input1: "http://github.com/carbonfive/raygun  " Output1: "github"

Input2: "http://www.zombie-bites.com  " Output2: "zombie-bites"

Input3: "https://www.cnet.com  " Output3: "cnet"

*/


function getDomain(url) {
    if (url === undefined) {
        return ''
    }
    if (url.indexOf('//') > -1) {
        url = url.split('/')[2];
    }

    if (url.indexOf('www.') > -1) {
        url = url.split('.')[1];

    } else {
        url = url.split('.')[0];
    }
    return url;
}





console.log(getDomain('http://github.com/carbonfive/raygun'));

console.log(getDomain('http://www.zombie-bites.com'));

console.log(getDomain('https://www.cnet.com'));