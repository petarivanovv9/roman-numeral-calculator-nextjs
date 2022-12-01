import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home, { testIds } from '@/pages/index';
import { messages } from '../constants';

const { msgRequiredInteger, msgRequiredPosInteger } = messages;

describe('Home', () => {
  it('should match snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });

  it('should convert `317` to `CCCXVII`', async () => {
    render(<Home />);

    await userEvent.type(screen.getByTestId(testIds.naturalInput), '317');

    await userEvent.click(screen.getByTestId(testIds.submit));

    expect(await screen.findByText(/CCCXVII/)).toBeInTheDocument();
  });

  it('should display `Must enter an integer!` when converting `random`', async () => {
    render(<Home />);

    await userEvent.type(screen.getByTestId(testIds.naturalInput), 'random');

    await userEvent.click(screen.getByTestId(testIds.submit));

    expect(await screen.findByText(msgRequiredInteger)).toBeInTheDocument();
  });

  it('should display `Must enter a positive integer!` when converting `-12`', async () => {
    render(<Home />);

    await userEvent.type(screen.getByTestId(testIds.naturalInput), '-12');

    await userEvent.click(screen.getByTestId(testIds.submit));

    expect(await screen.findByText(msgRequiredPosInteger)).toBeInTheDocument();
  });
});
