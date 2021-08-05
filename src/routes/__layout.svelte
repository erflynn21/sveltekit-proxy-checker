<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import firebase from 'firebase/app';
	import 'firebase/auth';
	import userStore from '../stores/userStore';
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

		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}

		firebase.auth().onAuthStateChanged((user) => {
			userStore.set({
				isLoggedIn: user !== null,
				user,
				firebaseControlled: true
			});
			setAuthCreds();
		});

		const setAuthCreds = () => {
			firebase
				.firestore()
				.collection('authDetails')
				.doc($userStore.user.uid)
				.get()
				.then((doc) => {
					authStore.set({
						username: doc.data().username,
						password: doc.data().password
					});
				});
		};
	});
</script>

<slot />
