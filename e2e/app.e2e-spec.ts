import { AngularModulePage } from './app.po';

describe('angular-module App', function() {
  let page: AngularModulePage;

  beforeEach(() => {
    page = new AngularModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
