import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBV9oIJQzLer7okOf987axspyWoNPfNcgg",
  authDomain: "ytclone3-6114c.firebaseapp.com",
  projectId: "ytclone3-6114c",
  storageBucket: "ytclone3-6114c.appspot.com",
  messagingSenderId: "976701967679",
  appId: "1:976701967679:web:2114f054b1005a8176978a"
};
firebase.initializeApp(firebaseConfig)

export default firebase.auth()
