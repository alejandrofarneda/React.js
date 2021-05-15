import { render, screen } from '@testing-library/react';
// import App from './App';
import app2 from './app';



// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });




test('renders learn react link', () => {
    render(<app2 />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
