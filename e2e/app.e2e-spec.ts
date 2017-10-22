import { A4MaterialPage } from './app.po';

describe('a4-material App', function() {
  let page: A4MaterialPage;

  beforeEach(() => {
    page = new A4MaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
