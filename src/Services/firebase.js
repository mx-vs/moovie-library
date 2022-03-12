import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAlHWXpKSnldjykIkBKOBTQoXBXQrNOru8',
  authDomain: 'movie-library-fc310.firebaseapp.com',
  projectId: 'movie-library-fc310',
  storageBucket: 'movie-library-fc310.appspot.com',
  messagingSenderId: '1064440670398',
  appId: '1:1064440670398:web:2240c0485ea23264ea16ef'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
