/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type HomePage = typeof import('./tests/pages/home.page.js');
type LiveStreamPage = typeof import('./tests/pages/livestream.page.js');
type SearchPage = typeof import('./tests/pages/search.page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, HomePage: HomePage, LiveStreamPage: LiveStreamPage, SearchPage: SearchPage  }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
