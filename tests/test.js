
fs = require('fs');




function writeLine(line) {
  return new Promise((resolve, reject) => {
    fs.writeFile('mycsv.csv', line, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}


function makeCSV(data, addColNames=true) {
  let childList, lines = [];
  let colKeys = Object.keys(data)
    .filter(k => {
      if(Array.isArray(data[k])) childList = data[k];
      else return true;
    });
  if (addColNames) lines.push(colKeys.join(','));
  lines.push(colKeys.map(k => data[k]).join(','));
  childList.forEach((data) => { lines = lines.concat(makeCSV(data, false)) })
  return lines.join('\n');
}











let reqbody = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": [
  {
    "firstName": "Beth Jr.",
    "lastName": "Johnson",
    "county": "San Mateo",
    "city": "Pacifica",
    "role": "Manager",
    "sales": 2900000,
    "children": [
      {
        "firstName": "Smitty",
        "lastName": "Won",
        "county": "San Mateo",
        "city": "Redwood City",
        "role": "Sales Person",
        "sales": 4800000,
        "children": []
      },
      {
        "firstName": "Allen",
        "lastName": "Price",
        "county": "San Mateo",
        "city": "Burlingame",
        "role": "Sales Person",
        "sales": 2500000,
        "children": []
      }
    ]
  },
  {
    "firstName": "Beth",
    "lastName": "Johnson",
    "county": "San Francisco",
    "city": "San Francisco",
    "role": "Broker/Sales Person",
    "sales": 7500000,
    "children": []
  }
]
}



reqbody = JSON.stringify(reqbody);



const tester = () => {



  let data = JSON.parse(reqbody)


  let ans = makeCSV(data, true);

  console.log(ans);

};
tester();