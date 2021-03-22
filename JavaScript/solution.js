(function () {
  let maxCells = 0;
  [...document.getElementsByTagName('table')].forEach((table) => {
    // maxCells = Math.max(table.getElementsByTagName('td').length, maxCells);
    let cells = 0;
    [...table.getElementsByTagName('tr')].forEach((row) => {
      cells += row.getElementsByTagName('td').length;
    });
    maxCells = maxCells > cells ? maxCells : cells;
  });
  console.log(maxCells);
}());
