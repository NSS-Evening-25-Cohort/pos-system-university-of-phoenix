import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import homeScreen from '../pages/homeScreen';

const startApp = () => {
  domBuilder();
  domEvents();
  homeScreen();
  formEvents();
  navBar();
  logoutButton();
  navigationEvents();
};

export default startApp;
