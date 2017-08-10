/* global Materialize */

const { div, button, form, input, label } = require('elementx');
const RecipePageScraper = require('./scrapers/RecipePageScraper');
const SearchPageScraper = require('./scrapers/SearchPageScraper');
const RecipeWidget = require('./components/RecipeWidget');

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

  const $holder = div({ id: 'holder' });
  document.body.appendChild($holder);

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
    $space.value = '';
  });

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
    $searchSpace.value = '';
  });
}

function widgetBuilder(url) {
  let scraper = new RecipePageScraper();
  scraper.scrape(url).then(function(recipe) {
    document.getElementById('holder').prepend(RecipeWidget(recipe));
    $('.carousel').carousel();
    console.log(`${recipe.ingredients.length} total ingredients`);
  });
}

function searchBuilder(search) {
  let listObject = new SearchPageScraper(); //new type of scraper
  let searchURL = 'http://allrecipes.com/search/results/?wt=' + search.split(' ').join('%') + '&sort=re';
  listObject.scrape(`${searchURL}`).then(function() {
    widgetBuilder(listObject.links[0]);
  });
}
