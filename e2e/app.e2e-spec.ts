import { PracticeAngular2Page } from './app.po';

describe('practice-angular2 App', () => {
  let page: PracticeAngular2Page;

  beforeEach(() => {
    page = new PracticeAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
