<<<<<<< HEAD
const startApp = () => {};
=======
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  logoutButton();
  navigationEvents();
};
>>>>>>> 044fd4cc62196471b7c107ff3035245cbb1060d1

export default startApp;
