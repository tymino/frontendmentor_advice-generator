import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Test Button component', () => {
  test('render', () => {
    render(<Button />);

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('title', 'My button');
    expect(btn).toHaveAttribute('type', 'button');
  });
});
