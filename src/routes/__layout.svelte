<script lang="ts">
	import '../app.postcss';
	import firebase from 'firebase/app';
	import 'firebase/auth';
	import { onMount } from 'svelte';
	import authStore from '../stores/authStore';

	onMount(() => {
		const firebaseConfig = {
			apiKey: 'AIzaSyDPfzdTZf4QOdPOIeD4XbRW3xXkomml5AA',
			authDomain: 'proxyrack-proxy-checker.firebaseapp.com',
			projectId: 'proxyrack-proxy-checker',
			storageBucket: 'proxyrack-proxy-checker.appspot.com',
			messagingSenderId: '153719007137',
			appId: '1:153719007137:web:8834d222e5fc80d280cde0',
			measurementId: 'G-GCF7CHJ6X7'
		};

		firebase.initializeApp(firebaseConfig);

		firebase.auth().onAuthStateChanged((user) => {
			authStore.set({
				isLoggedIn: user !== null,
				user,
				firebaseControlled: true
			});
		});
	});
</script>

<slot />
