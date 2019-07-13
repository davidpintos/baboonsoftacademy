var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25},
  ];

  function findWhere(array, criteria) {
    var property = Object.keys(criteria)[0];

    return array.find(function(element) {
      return element[property] === criteria[property];
    });
  }

  findWhere(ladders, {id: 3});