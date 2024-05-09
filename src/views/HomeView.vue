

<template>
  <main>
    <h1>Home Page</h1>

    <p>Welcome {{ loginUser }}</p>

    <button @click="logout">Logout</button>
  </main>
</template>

<script>
  import { onBeforeMount, ref } from 'vue';
  import { getAuth, signOut } from 'firebase/auth';
  import { initializeApp } from "firebase/app";
  import { onAuthStateChanged } from 'firebase/auth';
  import { auth } from '../utils/FirebaseConfig';

  export default {
    
    setup() {
      const loginUser = ref('');

      onBeforeMount(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            loginUser.value = user.email;
          }
        });
      });

      const logout = () => {
        signOut(auth)
        .then(() => {
          console.log('logout');
        })
        .catch((error) => {
          console.log('err ', error)
        });
      }

      return {
        logout,
        loginUser
      }
    }
  }
</script>
