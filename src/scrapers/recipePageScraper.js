let parser = new DOMParser();

class RecipePageScraper {
  constructor() {
    this._cache = {}; // url => recipe object
  }

  scrape(url) {
    let recipe = {
      name: '',
      timeTaken: '',
      ingredients: [],
      steps: [],
      photoLink: '',
      calories: ''
    };
    return fetch(url)
      .then(response => response.text())
      .then(text => {
        let myDoc = parser.parseFromString(text, 'text/html');
        if (myDoc.getElementsByClassName('recipe-summary__h1')) {
          recipe.name = myDoc.getElementsByClassName(
            'recipe-summary__h1'
          )[0].innerText;
        } else {
          recipe.name = 'N/A';
        }
        if (myDoc.querySelector('.ready-in-time')) {
          recipe.timeTaken = myDoc.querySelector('.ready-in-time').innerText;
        } else {
          recipe.timeTaken = 'N/A';
        }
        if (myDoc.querySelector('.nutrientLine__item--amount')) {
          recipe.calories = myDoc.querySelector(
            '.nutrientLine__item--amount'
          ).innerText;
        } else {
          recipe.calores = 'N/A';
        }
        if (myDoc.querySelector('.photo-strip__items li a img')) {
          recipe.photoLink = myDoc.querySelector(
            '.photo-strip__items li a img'
          ).src;
        } else {
          recipe.photoLink =
            'https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png';
        }
        let allIngr = [...myDoc.querySelectorAll('.recipe-ingred_txt')];
        let allSteps = [...myDoc.querySelectorAll('.step')];

        for (let ingr of allIngr) {
          recipe.ingredients.push(ingr.innerText);
        }
        for (let step of allSteps) {
          recipe.steps.push(step.innerText);
        }
        recipe.ingredients.splice(recipe.ingredients.length - 3);
        recipe.steps.pop();
        return recipe;
      });
  }
}
module.exports = RecipePageScraper;
