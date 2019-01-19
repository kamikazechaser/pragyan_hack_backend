function simpleDist(pointA, pointB) {
    var x = pointA.x - pointB.x,
        y = pointA.y - pointB.y;
  
    return Math.sqrt(x*x + y*y);
  }
  
  var sortByDist = (function() {
    var comparator = function(a,b) { return a.value - b.value; };
  
    return function (pointRef, pointArray) {
      var reorder = function(e) { return pointArray[e.index]; };
      var distanceFromArray = function(b,i) {
        return { index: i, value: simpleDist(pointRef, b) };
      };
      return pointArray.map(distanceFromArray).sort(comparator).map(reorder);
    };
  }());

  //console.log(simpleDist({x: 1, y: 3}, {x: 2, y: 5}))
  //console.log(sortByDist({x: 10, y: 9}, [{x: 7, y: 4},{x: 1, y: 2}, {x: 6, y: 8}]))