import { VirtualizadorASPage } from './app.po';

describe('virtualizador-as App', () => {
  let page: VirtualizadorASPage;

  beforeEach(() => {
    page = new VirtualizadorASPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
