import firebase from 'firebase/app';
import 'firebase/auth';
import startApp from './startApp';
import client from './client';
import loginButton from '../components/buttons/loginButton';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp();
    } else {
      loginButton();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
