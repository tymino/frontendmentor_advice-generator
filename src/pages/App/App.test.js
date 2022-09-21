import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Test App component', () => {
  let adviceId = null;

  test('Render and save advice', async () => {
    render(<App />);

    const cardTitle = screen.getByTestId('card-title');
    const cardBody = screen.getByTestId('card-body');

    expect(cardTitle).toBeInTheDocument();
    expect(cardBody).toBeInTheDocument();

    expect(cardTitle).toHaveTextContent('advice #undefined');
    expect(cardBody).toBeEmptyDOMElement();

    await waitFor(() => {
      expect(cardTitle).toHaveTextContent(/advice #[0-9]/);
      adviceId = cardTitle.innerHTML;
    });
    await waitFor(() => expect(cardBody).not.toBeEmptyDOMElement());
  });

  test('Click button and check new advice', async () => {
    render(<App />);

    const clickButton = userEvent.setup();
    const cardButton = screen.getByTestId('card-button');
    const cardTitle = screen.getByTestId('card-title');

    await clickButton.click(cardButton);

    await waitFor(() => expect(cardTitle).toHaveTextContent(/advice #[0-9]/));
    await waitFor(() => expect(cardTitle).not.toHaveTextContent(adviceId));
    console.log('2', cardTitle.innerHTML, adviceId);
  });
});
