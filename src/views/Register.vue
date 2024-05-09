<template>
    <main class="register">
        <h1>Register Page</h1>

        <form @submit.prevent="register">
            <input type="email" v-model="email" placeholder="Email" required>
            <input type="password" v-model="password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>

        <p>
            <router-link to="/login">Register here</router-link>
        </p>
    </main>
</template>

<script>
import { ref } from 'vue';
import { initializeApp } from 'firebase/app';
import { auth, createUserWithEmailAndPassword } from '../utils/FirebaseConfig';

export default {
    setup () {
        const email = ref('');
        const password = ref('');

        const register = async () => {
            try {
                createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
            } catch (error) {
                console.error('err out of catch' ,error);
            }
        }

        return {
            email,
            password,
            register
        }
    }
}
</script>

<style></style>