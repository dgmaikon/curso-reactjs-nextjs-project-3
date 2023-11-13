import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';


test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {name: "Hello"}).parentElement;

  //using theme to do tests
  // expect(headingContainer).toHaveStyle({
  //   background: theme.colors.secondaryBg,
  // });

  // jest-test
  expect(headingContainer).toHaveStyleRule('background', 'blue');
});
