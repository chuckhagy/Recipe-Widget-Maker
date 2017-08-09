let parser = new DOMParser();

class SearchPageScraper {
  constructor() {
    this.links = [];
  }
  scrape(url) {
    return fetch(url).then(response => response.text()).then(text => {
      let myDoc = parser.parseFromString(text, 'text/html');
      let randomSeed = Math.floor(Math.random() * 5) + 2;
      let topName = myDoc.getElementsByClassName('grid-col__h3')[randomSeed];
      let thisLink;
      if (topName.previousSibling.href) {
        thisLink = topName.previousSibling.href;
      } else {
        thisLink = topName.parentElement.href;
      }
      thisLink = thisLink.split('');
      thisLink.splice(0, 7);
      thisLink = thisLink.join('');
      this.links.push('http://allrecipes.com' + thisLink);
    });
  }
}
module.exports = SearchPageScraper;
