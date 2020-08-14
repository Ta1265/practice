var index = 0;
var strNum = num.toString();

if (strNum[0] === '-') {
	var sum = -1 * Number(strNum[1]);
	index = 2;
	console.log(sum);
} else {
	console.log(sum);
	var sum = Number(strNum[0]);
	index = 1;
}

for (index; index < strNum.length; index++) {
	console.log(sum);
	sum += Number(strNum[index]);
}
return sum;
