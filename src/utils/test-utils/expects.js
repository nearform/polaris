// Workaround from https://github.com/facebook/jest/issues/5785
// Stops successful expects(fn).toThrow() spamming console with expected error output
export const expectToThrow = func => {
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => {})
  expect(func).toThrow()
  console.error.mockRestore()
}
