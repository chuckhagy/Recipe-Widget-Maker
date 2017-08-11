# Recipe Scraper
A project that scrapes AllRecipes.com to create concise, ad-free widgets with only the necessary information.

![screenshot](./README/screenshot.png?raw=true)

## Links
http://recipewidgets.surge.sh/

For non-proxy scraping, use these example links:
- [Salad](http://recipewidgets.surge.sh/sources/salad.html)
- [Beef](http://recipewidgets.surge.sh/sources/beef.html)
- [Desert](http://recipewidgets.surge.sh/sources/desert.html)


## Functionality 1
As a base functionality, you can submit a link to a recipe and then this tool will scrape the website and return a widget.

## Functionality 2
If you're not sure which recipe you want, you can search using key terms like "spicy orange chicken" and this tool uses the search functionality of AllRecipes.com to pick a single recipe that meets the search query.

## Technical Aspects
- All content is generated dynamically using elementX in Javascript
- Most CSS is custom
- Materialize used to create the ingredient carousel and form
- Responsive sizing for mobile use

## Future Goals
- Deal with video-formatted recipe pages (currently unsupported)
- Add images of each ingredient to the carousel using some kind of publicly available API
- Add more nutritional information / an estimation of the overall healthiness of each recipe
- Add caching logic to avoid repetitive scraping
