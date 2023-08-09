import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBpfEyL9PPESk10-t54_zOiIgzzWVEq7GU",
    authDomain: "habits-b55a7.firebaseapp.com",
    projectId: "habits-b55a7",
    storageBucket: "habits-b55a7.appspot.com",
    messagingSenderId: "87652624551",
    appId: "1:87652624551:web:b12f198ec31810e984d382",
    measurementId: "G-3FEMELFKP5"
};

const db = getFirestore(initializeApp(firebaseConfig))

export { db }

