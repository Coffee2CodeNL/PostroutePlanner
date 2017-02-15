import { PostroutePlannerPage } from './app.po';

describe('postroute-planner App', function() {
  let page: PostroutePlannerPage;

  beforeEach(() => {
    page = new PostroutePlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
