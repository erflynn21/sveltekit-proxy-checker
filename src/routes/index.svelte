<script lang="ts">
	import { goto } from '$app/navigation';
	import authStore from '../stores/authStore';
	import firebase from 'firebase/app';
	import 'firebase/auth';

	authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
		if (!isLoggedIn && firebaseControlled) {
			await goto('/login');
		}
	});

	const logout = () => {
		firebase
			.auth()
			.signOut()
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
			});
	};
</script>

{#if $authStore.isLoggedIn}
	{$authStore.user.email}
{/if}

<button on:click={logout}>Logout</button>
