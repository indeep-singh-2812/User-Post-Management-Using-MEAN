import { UserPostManagementPage } from './app.po';

describe('user-post-management App', function() {
  let page: UserPostManagementPage;

  beforeEach(() => {
    page = new UserPostManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
