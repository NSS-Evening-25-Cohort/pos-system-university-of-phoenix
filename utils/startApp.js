import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { viewOrder } from '../pages/viewOrders';
import getOrderCustomerData from '../api/mergedData';
// import { getOrder } from '../api/orderData';

const startApp = () => {
  getOrderCustomerData().then(viewOrder);
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  logoutButton();
  navigationEvents();
};

export default startApp;
