import { CMS.AngularPolymerPage } from './app.po';

describe('cms.angular-polymer App', () => {
  let page: CMS.AngularPolymerPage;

  beforeEach(() => {
    page = new CMS.AngularPolymerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
