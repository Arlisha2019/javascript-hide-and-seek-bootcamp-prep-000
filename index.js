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

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  for ( var i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children
  }
}