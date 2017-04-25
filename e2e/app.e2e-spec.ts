import { IntegratiPage } from './app.po';

describe('integrati App', () => {
  let page: IntegratiPage;

  beforeEach(() => {
    page = new IntegratiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
