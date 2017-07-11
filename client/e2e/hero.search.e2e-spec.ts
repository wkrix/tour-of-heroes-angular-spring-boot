import { browser, element, by, until } from 'protractor';

describe('Search', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have an input', () => {
    expect(element(by.css('app-root app-dashboard app-hero-search input')).isPresent()).toEqual(true);
  });

  it('should allow searching', () => {
    // const searchButton = element(by.css('button'));
    const searchBox = element(by.id('search-box'));
    searchBox.sendKeys('M');
    const list = element.all(by.css('.search-result'));
    expect(list.count()).toBe(6);
  });
});
