import { AngularModulePage } from './app.po';

describe('secdo-ng App', function() {
  let page: AngularModulePage;

  beforeEach(() => {
    page = new AngularModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
