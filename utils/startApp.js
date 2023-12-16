import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import domEvents from '../events/domEvents';
// import formEvents from '../events/formEvents';
// import navigationEvents from '../events/navigationEvents';
import { getAllOrders } from '../api/orderData';
import showOrders from '../pages/Orders';
// import { getOrder } from '../api/orderData';

const startApp = () => {
  getAllOrders().then(showOrders);
  domBuilder();
  domEvents();
  // formEvents();
  navBar();
  logoutButton();
  // navigationEvents();
};

export default startApp;
