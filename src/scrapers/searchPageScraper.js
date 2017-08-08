let parser = new DOMParser();

class SearchPageScraper {
  constructor() {
    this.links = [];
  }
  scrape(url) {
    return fetch(url).then(response => response.text()).then(text => {
      let myDoc = parser.parseFromString(text, 'text/html');
      let topName = myDoc.getElementsByClassName('grid-col__h3')[2];
      // console.log(topName.previousSibling);
      // console.log(topName.parentElement);
      let thisLink;
      if (topName.previousSibling.href) {
        console.log('I should be a SIBLING A-Tag');
        thisLink = topName.previousSibling.href;
        console.log(topName.previousSibling);
      } else {
        thisLink = topName.parentElement.href;
        console.log('I should be a Text sibling');
        console.log(topName.parentElement);
      }
      thisLink = thisLink.split('');
      thisLink.splice(0, 7);
      thisLink = thisLink.join('');
      //console.log(thisLink);
      this.links.push('http://allrecipes.com' + thisLink);
    });
  }
}
module.exports = {
  SearchPageScraper
};

//container
//if fail, try next starting at 1
//also look into quail URL http://allrecipes.com/recipe/112747/grandmas-quail/?internalSource=hub%20recipe&referringContentType=search%20results&clickId=cardslot%202
