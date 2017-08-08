const { div, h1, h2, h3, button, ul, li, img, form, input, label } = require('elementx');
const { RecipePageScraper } = require('./scrapers/recipePageScraper.js');
const { SearchPageScraper } = require('./scrapers/searchPageScraper.js');

addEventListener('DOMContentLoaded', main());
function main() {
  const $urlSpace = div(
    { class: 'card search' },
    label({ id: 'search' }, `Give me your link!`),
    form({ id: 'mainForm' }, input({ id: 'infoInput', type: 'url' }), button({ type: 'submit', id: 'goButton' }, 'Get Widget'))
  );
  document.body.appendChild($urlSpace);

  const $searchSpace = div(
    { class: 'card search' },
    label({ id: 'search' }, `Not sure? Search for a recipe suggestion here.`),
    form({ id: 'secondForm' }, input({ id: 'searchInput', type: 'text' }), button({ type: 'submit', id: 'searchButton' }, 'Search'))
  );
  document.body.appendChild($searchSpace);

  let $goButton = document.getElementById('goButton');
  $goButton.addEventListener('click', function(event) {
    event.preventDefault();
    let $space = document.getElementById('infoInput');
    let website = $space.value;
    if (website.length > 0) {
      widgetBuilder(website);
    } else {
      Materialize.toast('Feed me a link!', 4000);
    }
  });
  //search below
  let $searchButton = document.getElementById('searchButton');
  $searchButton.addEventListener('click', function(event) {
    event.preventDefault();
    let $searchSpace = document.getElementById('searchInput');
    let thisQuery = $searchSpace.value;
    if (thisQuery.length > 0) {
      searchBuilder(thisQuery);
    } else {
      Materialize.toast('Give me a search term!', 4000);
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
      h3({ id: 'timeCal' }, `Time: ${pageObject.timeTaken} - Calories: ${pageObject.calories}`),
      ul(pageObject.ingredients.map(key => li(key))),
      ul(pageObject.steps.map(key => li(key)))
    );
    document.body.appendChild($myWidget);
  });
}

function searchBuilder(search) {
  let listObject = new SearchPageScraper(); //new type of scraper
  let searchURL = 'http://allrecipes.com/search/results/?wt=' + search.split(' ').join('%') + '&sort=re';
  listObject.scrape(`http://cors-bypass-proxy.axiomlogic.com/${searchURL}`).then(function() {
    //console.log(listObject.links[0]);
    widgetBuilder(listObject.links[0]);
  });
}
