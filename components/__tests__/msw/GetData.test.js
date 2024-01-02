import { render, screen, waitFor } from '@testing-library/react-native';
import { tasksHandler, tasksHandlerException } from '../msw-service/handlers';
import GetData from '../../GetData';
import { mswServer } from '../msw-service/msw-server';

describe('Component: TaskList', () => {
  it('displays returned tasks on successful fetch', async () => {
    mswServer.use(tasksHandler);

    render(<GetData />);

    await waitFor(() => {
      expect(screen.getByText('delectus aut autem')).toBeDefined();
      expect(screen.getByText('Id: 1')).toBeDefined(); 
      expect(screen.getByText('UserId: 1')).toBeDefined(); 
    });
  });

});