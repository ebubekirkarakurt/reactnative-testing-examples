import { render, screen } from '@testing-library/react-native';
import { tasksHandler } from '../../../mocks/handlers';
import GetData from '../../GetData';
import { mswServer } from '../../../mocks/server';

describe('Component: GetData', () => {
  it('displays returned tasks on successful fetch', () => {
    mswServer.use(tasksHandler);

    render(<GetData />);

    expect(screen.getByText('Ebubekir')).toBeDefined();
    expect('et porro tempora').toBeDefined();
  });
});
