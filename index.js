function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
 return document.querySelector('div.target');
}

function deepestChild() {
  var current = document.getElementById('grand-node');
  var nextNode = current.children[0];
  while (nextNode) {
   current = nextNode;
   nextNode = current.children[0];
  }
 return current 
}

function increaseRankedBy(n) {
  var newVar = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  var increase = parseInt(n);
  for (var i = 0; i < increase.length; i++); {
  }
  return 
}