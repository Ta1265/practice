let myArray = [];
myArray.push('Taylor M. Anderson');
myArray.push('Blue');

let cutName = function (name) {
    return name.split(' ');
}
let myInfo = {};
myInfo['fullname'] = cutName(myArray[0]);
myInfo.favoriteColor = myArray[1];
myInfo.github = 'https://github.com/Ta1265';



