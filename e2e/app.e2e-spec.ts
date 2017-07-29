import { SsrNgSeedPage } from './app.po';

describe('ssr-ng-seed App', () => {
  let page: SsrNgSeedPage;

  beforeEach(() => {
    page = new SsrNgSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
