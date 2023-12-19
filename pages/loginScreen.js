import loginButton from '../components/buttons/loginButton';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const hello = () => {
  clearDom();
  renderToDOM(loginButton);
};

export default hello;
