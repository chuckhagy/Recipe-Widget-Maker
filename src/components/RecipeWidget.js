const { div, h1, h3, ul, li, img } = require('elementx');

module.exports = function Widget(recipe) {
  return div(
    { class: 'card widget' },
    img({ src: recipe.photoLink }),
    h1({ class: 'bold' }, recipe.name),
    h3({ id: 'timeCal' }, `Time: ${recipe.timeTaken} - Calories: ${recipe.calories}`),
    ul(recipe.ingredients.map(key => li(key))),
    ul(recipe.steps.map(key => li(key)))
  );
};
