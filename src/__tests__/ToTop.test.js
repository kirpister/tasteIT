// testing ToTop function

describe('ScrollToTop function', () => {
  test('it should scroll window to top when navigating to a new page', () => {

    jest.spyOn(window, 'scroll').mockImplementation(() => { });

});
});
