<template>
    <main class="login">
        <h1>Login Page</h1>

        <form @submit.prevent="login">
            <input type="email" v-model="email" placeholder="Email" required>
            <input type="password" v-model="password" placeholder="Password" required>
            <button type="submit">Login</button>

            <p>
                <router-link to="/register">Don't have an account? Register here</router-link>
            </p>
        </form>
    </main>
</template>

<script>
import { ref } from 'vue'
import { auth, signInWithEmailAndPassword } from '../utils/FirebaseConfig';
export default {
    setup() {
        const email = ref('');
        const password = ref('');

        const login = async () => {
            try {
                signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('user ', user);
                })
                .catch((error) => {
                    console.log('err ', error)
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log('errorCode ', errorCode, ' errorMessage ', errorMessage);
                });
            } catch (error) {
                console.error('err out of catch' ,error);
            }
        }

        return {
            email,
            password,
            login
        }
    }
}
</script>

<style></style>