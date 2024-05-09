<template>

  <RouterView />
</template>

<script>
import { onBeforeMount } from 'vue';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import {getAuth, onAuthStateChanged} from 'firebase/auth';
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
const auth = getAuth(firebase);

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    onBeforeMount(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.replace('/login');
        } else if (route.path == '/login' || route.path == '/register') {
          router.replace('/');
        }
      });
    });
  
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #013516;
  color: white;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

a {
  color: white;
}
</style>
