const { div, h1, h2, ul, li, img } = require('elementx');

module.exports = function Widget(recipe) {
  return div(
    { class: 'card widget' },
    img({ src: recipe.photoLink }),
    h1({ class: 'bold' }, recipe.name),
    h2(`Time: ${recipe.timeTaken}`),
    h2(`Calories: ${recipe.calories}`),
    div(
      { class: 'carousel' },
      recipe.ingredients.map(ingredient => {
        const oneIngredient = div(
          { class: 'carousel-item' },
          img({ src: 'http://www.trbimg.com/img-56e088f9/turbine/la-sci-sn-raw-meat-stone-tools-evolution-20160309' }),
          div({ style: 'text-align: center; font-size: 12px; font-weight: bold;' }, ingredient)
        );
        return oneIngredient;
      })
    ),
    //ul(recipe.ingredients.map(key => li(key))),
    ul({ class: 'steps' }, recipe.steps.map(key => li(key)))
  );
};
