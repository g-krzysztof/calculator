import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   expect(div.className).toBe("App");
//   ReactDOM.unmountComponentAtNode(div);
// });

it('renders a App snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});