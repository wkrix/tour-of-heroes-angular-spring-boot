import { TourPage } from './app.po';

describe('Tour of Heroes App', () => {
  let page: TourPage;

  beforeEach(() => {
    page = new TourPage();
  });

  it('should display message saying Tour of Heroes', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });
});
