import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home, { testIds } from '@/pages/index';

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
});
