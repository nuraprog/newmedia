import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCq9QBQRY8_8d2r-BC_2igm_cZ0wQ0H2Ug",
  authDomain: "community-c2831.firebaseapp.com",
  projectId: "community-c2831",
  storageBucket: "community-c2831.appspot.com",
  messagingSenderId: "905968442965",
  appId: "1:905968442965:web:64620519c0bc08e241bedc"
}

initializeApp(firebaseConfig)

export const auth = getAuth()
