import { Gw2TpAngular2Page } from './app.po';

describe('gw2-tp-angular2 App', function() {
  let page: Gw2TpAngular2Page;

  beforeEach(() => {
    page = new Gw2TpAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
