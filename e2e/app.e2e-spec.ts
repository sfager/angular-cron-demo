import { CronDemoPage } from './app.po';

describe('cron-demo App', () => {
  let page: CronDemoPage;

  beforeEach(() => {
    page = new CronDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
