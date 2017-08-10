const { div, h1, h2, ul, li, img } = require('elementx');
module.exports = function Widget(recipe) {
  return div(
    { class: 'widget' },
    img({ src: recipe.photoLink }),
    h1({ class: 'bold' }, recipe.name),
    h2(`Time: ${recipe.timeTaken}`),
    h2(`Calories: ${recipe.calories}`),
    div(
      { class: 'carousel' },
      recipe.ingredients.map(ingredient => {
        const oneIngredient = div({ class: 'carousel-item' }, div({ class: 'ingredient' }, ingredient));
        return oneIngredient;
      })
    ),
    ul({ class: 'steps' }, recipe.steps.map(key => li(key)))
  );
};
