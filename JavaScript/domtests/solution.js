(function () {
  let maxCells = 0;
  [...document.getElementsByTagName('table')].forEach((table) => {
    maxCells = Math.max(table.getElementsByTagName('td').length, maxCells);
  });
  return maxCells;
}());
