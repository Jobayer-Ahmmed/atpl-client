
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCv_3sRuX4InhNyrTbcEE6N5lNBwwmYS68",
  authDomain: "jasshop-3caf1.firebaseapp.com",
  projectId: "jasshop-3caf1",
  storageBucket: "jasshop-3caf1.appspot.com",
  messagingSenderId: "287452385541",
  appId: "1:287452385541:web:6259c451c2cae42bb7276c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);