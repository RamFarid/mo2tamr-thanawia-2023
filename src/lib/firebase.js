// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getMessaging } from 'firebase/messaging'
// import { onBackgroundMessage } from 'firebase/messaging/sw'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkO-nH2uTkBbzzamchVQeBOtUpN-Jc_rM',
  authDomain: 'mo2tmr-thanwia.firebaseapp.com',
  projectId: 'mo2tmr-thanwia',
  storageBucket: 'mo2tmr-thanwia.appspot.com',
  messagingSenderId: '399391735783',
  appId: '1:399391735783:web:76184ed224f488091bc742',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
export const fcm = getMessaging(app)
