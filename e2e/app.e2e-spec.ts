import { FirstTestExpiriencePage } from './app.po';

describe('first-test-expirience App', function() {
  let page: FirstTestExpiriencePage;

  beforeEach(() => {
    page = new FirstTestExpiriencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
