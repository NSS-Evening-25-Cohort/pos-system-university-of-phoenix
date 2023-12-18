import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
<<<<<<< HEAD
import navigationEvents from '../events/navigationEvents';
// import { getOrder } from '../api/orderData';
=======
// import navigationEvents from '../events/navigationEvents';
import showOrders from '../pages/Orders';
import { getAllOrders } from '../api/orderData';
>>>>>>> 4fd2e1cf5adf61011834b9285ecdb9fbab6b4b00

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
