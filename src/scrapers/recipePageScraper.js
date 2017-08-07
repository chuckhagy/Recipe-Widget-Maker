let parser = new DOMParser();

class RecipePageScraper {
  constructor() {
    this.name = '';
    this.timeTaken = '';
    this.ingredients = [];
    this.steps = [];
    this.photoLink = '';
    this.calories = '';
  }
  scrape(url) {
    return fetch(url).then(response => response.text()).then(text => {
      let myDoc = parser.parseFromString(text, 'text/html');
      this.name = myDoc.getElementsByTagName('h1')[0].innerText;
      this.timeTaken = myDoc.querySelector('.ready-in-time').innerText;
      this.calories = myDoc.querySelector('.nutrientLine__item--amount').innerText;
      this.photoLink = myDoc.querySelector('.photo-strip__items').children[1].src;
      let allIngr = [...myDoc.querySelectorAll('.recipe-ingred_txt')];
      let allSteps = [...myDoc.querySelectorAll('.step')];

      for (let ingr of allIngr) {
        this.ingredients.push(ingr.innerText);
      }
      for (let step of allSteps) {
        this.steps.push(step.innerText);
      }
      this.ingredients.splice(this.ingredients.length - 3);
      this.steps.pop();
    });
  }
}
module.exports = {
  RecipePageScraper
};
