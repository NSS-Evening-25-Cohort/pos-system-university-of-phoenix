import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import showOrders from '../pages/Orders';
import { getAllOrders } from '../api/orderData';

const startApp = () => {
  domBuilder();
  domEvents();
  getAllOrders().then(showOrders);
  formEvents();
  navBar();
  logoutButton();
  navigationEvents();
};

export default startApp;
