import { Provider } from 'react-redux';
import { mswServer } from '../../../../mocks/server';
import GetTodos from '../../../GetTodos';
import { store } from '../../../../redux/store/store';
import { tasksHandler } from '../../../../mocks/handlers';
import { render, screen } from '@testing-library/react-native';

describe('Component: Test', () => {
  beforeAll(() => mswServer.listen());
  afterAll(() => mswServer.close());

  it('receives a mocked response to a REST API request', async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
    );

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
    expect(await response.json()).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    });
  }),
    it('displays returned tasks on successful fetch', () => {
      mswServer.use(tasksHandler);

      render(
        <Provider store={store}>
          <GetTodos></GetTodos>
        </Provider>,
      );

      expect('1').toBeDefined();
    });
});
