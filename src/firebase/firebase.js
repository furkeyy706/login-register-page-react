import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA38wYTm4Tvz9uhiWT_7KzBqZeWyPdsPXY',
  authDomain: 'login-page-db-332e2.firebaseapp.com',
  projectId: 'login-page-db-332e2',
  storageBucket: 'login-page-db-332e2.appspot.com',
  messagingSenderId: '868740996938',
  appId: '1:868740996938:web:de20bdc00dd7bec89a6bb3',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
