import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBkvRnVoViqp6O8mbUHUIwMCQD9mQ8t9sE',
  authDomain: 'museum-for-everyone-admin.firebaseapp.com',
  projectId: 'museum-for-everyone-admin',
  storageBucket: 'museum-for-everyone-admin.appspot.com',
  messagingSenderId: '177536945960',
  appId: '1:177536945960:web:855688e332e1ff29de4a1d'
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const loadNews = async () => {
  const collection = await db.collection('news').get();
  return collection.docs.map(doc => doc.data()).sort((a, b) => b.date - a.date);
};

export { loadNews };
