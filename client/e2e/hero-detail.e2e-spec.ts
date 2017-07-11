import { browser, element, by, until } from 'protractor';

describe('Detail', () => {

  beforeEach(() => {
    browser.get('/detail/11');
  });

  const name = element(by.id('name'));
  const id = element(by.id('id'));

  it('should allow viewing a hero', () => {
    expect(element(by.css('h2')).getText()).toEqual('Mr. Nice details!');
    expect(id.getText()).toContain('11');
    expect(name.getAttribute('value')).toEqual('Mr. Nice');
  });

  it('should allow updating a name', function () {
    const save = element(by.id('save'));
    name.clear();
    name.sendKeys('BATMAN!');
    save.click();
    const hero = element(by.bindig = 'hero');
    // TODO complete the test case
  });

});
