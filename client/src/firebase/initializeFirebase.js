import { initializeApp } from "firebase/app";

export const firebaseConcreteCake = initializeApp(
  {
    apiKey: process.env.CONCRETECAKE__API_KEY,
    authDomain: process.env.CONCRETECAKE__AUTH_DOMAIN,
    databaseURL: process.env.CONCRETECAKE__DATABASE_URL,
    projectId: process.env.CONCRETECAKE__PROJECT_ID,
    storageBucket: process.env.CONCRETECAKE__STORAGE_BUCKET,
    messagingSenderId: process.env.CONCRETECAKE__MESSAGING_SENDER_ID,
    appId: process.env.CONCRETECAKE__APP_ID,
  },
  "conceteCake"
);
