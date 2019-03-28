import firebase from 'firebase';
import config from '@/config';

firebase.initializeApp(config.firebase);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

export default firebase;
