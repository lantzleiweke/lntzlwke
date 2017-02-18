var container = document.querySelector('.panel-container');
var articles = container.querySelectorAll('article');

var firstContainer = articles[0].querySelector('.panel-content');
setContentHeight(firstContainer);

for (var i = 0; i < articles.length; i++) {
  articles[i].querySelector('h2').addEventListener('click', function() {
    resetHeights();
    var container = this.parentElement.querySelector('.panel-content');
    setContentHeight(container);
  });
}

function setContentHeight(container) {
  container.style.height = container.querySelector('p').clientHeight + 'px';
}

function resetHeights() {
  for (var i = 0; i < articles.length; i++) {
    articles[i].querySelector('.panel-content').removeAttribute('style');
  }
}
