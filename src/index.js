const { div, h1, h2, h3, button, ul, li, img, form, input, label } = require('elementx');
const { RecipePageScraper } = require('./scrapers/recipePageScraper.js');

addEventListener('DOMContentLoaded', main());
function main() {
  const $searcher = div(
    { class: 'card search' },
    label({ id: 'search' }, `Give me your link!`),
    form({ id: 'mainForm' }, input({ id: 'infoInput', type: 'url' }), button({ type: 'submit', id: 'goButton' }, 'Submit'))
  );
  document.body.appendChild($searcher);

  let $goButton = document.getElementById('goButton');
  $goButton.addEventListener('click', function(event) {
    event.preventDefault();
    let website = document.getElementById('infoInput').value;
    if (website.length > 0) {
      widgetBuilder(website);
    } else {
      Materialize.toast('Feed me a link!', 4000);
    }
  });
}

function widgetBuilder(url) {
  let pageObject = new RecipePageScraper();
  pageObject.scrape(`http://cors-bypass-proxy.axiomlogic.com/${url}`).then(function() {
    const $myWidget = div(
      { class: 'card widget' },
      img({ src: pageObject.photoLink }),
      h1({ class: 'bold' }, pageObject.name),
      h2({ id: 'time' }, `Total Time: ${pageObject.timeTaken}`),
      h3({ id: 'calories' }, `Calories: ${pageObject.calories}`),
      ul(pageObject.ingredients.map(key => li(key))),
      ul(pageObject.steps.map(key => li(key)))
    );
    document.body.appendChild($myWidget);
  });
}
