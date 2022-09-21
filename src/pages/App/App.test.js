import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tesst App component', () => {
  let clickBtn;

  beforeEach(() => {
    render(<App />);
  });

  test('Render', () => {
    const cardTitle = screen.getByTestId('card-title');
    const cardBody = screen.getByTestId('card-body');
    // const cardBtn = screen.getByRole('button');

    expect(cardTitle).toBeInTheDocument();
    expect(cardBody).toBeInTheDocument();

    expect(cardTitle).toHaveTextContent('advice #undefined');
    expect(cardBody).toHaveTextContent('');


    // expect(screen.getByTestId('card-body')).toHaveTextContent(cardBody.innerHTML);
  });
});
