import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC2T__vWCfprLpE2xrF-Mc2DXeoX2sTX2Q',
  authDomain: 'miniblog-3b6e3.firebaseapp.com',
  projectId: 'miniblog-3b6e3',
  storageBucket: 'miniblog-3b6e3.firebasestorage.app',
  messagingSenderId: '698314047050',
  appId: '1:698314047050:web:2d36ca06ff522c6967b0b3'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }