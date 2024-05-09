
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAC4KQYtD9kW0IaYNckNWv7S6pdZh_6HAg",
  authDomain: "vue-auth-firebase-a613d.firebaseapp.com",
  projectId: "vue-auth-firebase-a613d",
  storageBucket: "vue-auth-firebase-a613d.appspot.com",
  messagingSenderId: "616457637346",
  appId: "1:616457637346:web:ff6e67d489a7abb75a3dbb"
};

const firebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
