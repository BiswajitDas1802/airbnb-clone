import {initializeApp} from 'firebase/app';
import {getAuth,signInWithPopup,GoogleAuthProvider,signOut,RecaptchaVerifier} from'firebase/auth';

  
 const firebaseConfig = {
    apiKey: "AIzaSyAE-XWesatl1lEJoZYYnaQXPCGP42KWbMo",
  authDomain: "air-bnb-ea4ed.firebaseapp.com",
  projectId: "air-bnb-ea4ed",
  storageBucket: "air-bnb-ea4ed.appspot.com",
  messagingSenderId: "260267537217",
  appId: "1:260267537217:web:f1a4dea0566ce45f57e7c0",
  measurementId: "G-V05XPMSYT6"
};
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const au = getAuth()
export const signInWithPop = signInWithPopup
export const signout = signOut
// export const captchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, au)

export const googleAuthProvider = new GoogleAuthProvider();
