import { mswServer } from './mocks/server';

beforeAll(() => {
  // Enable API mocking before all the tests.
  mswServer.listen();
});

afterEach(() => {
  // Reset the request handlers between each test.
  // This way the handlers we add on a per-test basis
  // do not leak to other, irrelevant tests.
  mswServer.resetHandlers();
});

afterAll(() => {
  // Finally, disable API mocking after the tests are done.
  mswServer.close();
});
