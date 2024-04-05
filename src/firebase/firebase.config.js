import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3KtGgirPnVSfRu5JwYG9R3o10zH6t7_g",
  authDomain: "dribbble-8362d.firebaseapp.com",
  projectId: "dribbble-8362d",
  storageBucket: "dribbble-8362d.appspot.com",
  messagingSenderId: "86341959533",
  appId: "1:86341959533:web:a7fcbbd7fc14d980fea464"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
