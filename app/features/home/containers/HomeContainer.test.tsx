import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import HomeContainer from '~/features/home/containers/HomeContainer';

describe('HomeContainer', () => {
  const HomeContainerStub = createRemixStub([
    {
      path: '/',
      Component: HomeContainer
    }
  ]);

  const renderHomeContainer = () => render(<HomeContainerStub />);

  test('renders the buttons with correct links', () => {
    renderHomeContainer();
    const tailwindButton = screen.getByText(/Tailwind Intersect/i);
    const notFoundButton = screen.getByText(/NotFound/i);

    expect(tailwindButton.closest('a')).toHaveAttribute(
      'href',
      '/tailwind-intersect'
    );
    expect(notFoundButton.closest('a')).toHaveAttribute('href', '/not-found');
  });
});
