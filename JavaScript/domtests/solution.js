(function () {
  // let maxCells = 0;
  // [...document.getElementsByTagName('table')].forEach((table) => {
  //   maxCells = Math.max(table.getElementsByTagName('td').length, maxCells);
  // });

  // const tables = document.getElementsByTagName('table');
  // Array.prototype.forEach.call(tables, (table) => console.log('hi'));

  const tables = document.getElementsByTagName('table');
  let maxCells = 0;
  for (let i = 0; i < tables.length; i += 1) {
    maxCells = Math.max(tables[i].getElementsByTagName('td').length, maxCells);
  }
  console.log(maxCells)
  return maxCells;
}());
