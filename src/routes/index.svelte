<script lang="ts">
	import { goto } from '$app/navigation';
	import Nav from '../components/nav.svelte';
	import userStore from '../stores/userStore';

	let action: string = 'Check Number of IPs in a Country';
	let product: string = 'Unmetered Residential';
	let port: string = 'Random';
	let portNumber: number = 10000;
	let auth: string = 'Use My Authentication Details';
	let username: string = '';
	let password: string = '';

	userStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
		if (!isLoggedIn && firebaseControlled) {
			await goto('/login');
		}
	});
</script>

<div>
	<Nav />

	<main class="-mt-32">
		<div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 grid grid-cols-3 mt-8 gap-4">
			<div class="bg-white rounded-lg shadow-md px-5 py-6 sm:px-6 ">
				<div class="rounded-lg h-auto">
					<div>
						<label for="action" class="block text-sm font-medium text-gray-700">Action:</label>
						<select
							id="action"
							name="action"
							bind:value={action}
							class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
						>
							<option selected>Check Number of IPs in a Country</option>
							<option>Get List of Available Countries</option>
							<option>Get List of Available Cities</option>
							<option>Get List of Available ISPs</option>
							<option>Check IP Info</option>
							<option>Check Sessions Information</option>
							<option>Get Stats</option>
							<option>Get Current Thread Usage</option>
						</select>
					</div>
					<div class="mt-4">
						<label for="product" class="block text-sm font-medium text-gray-700">Product:</label>
						<select
							id="product"
							name="product"
							bind:value={product}
							class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
						>
							<option selected>Unmetered Residential</option>
							<option>Premium Residential</option>
							<option>Private Residential</option>
							<option>USA Datacenter</option>
							<option>Global Datacenter</option>
							<option>Canada Datacenter</option>
							<option>Static USA Datacenter</option>
						</select>
					</div>
					<div class="mt-4">
						<label for="port" class="block text-sm font-medium text-gray-700">Port:</label>
						<select
							id="port"
							name="port"
							bind:value={port}
							class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
						>
							<option selected>Random</option>
							<option>Sticky</option>
						</select>
					</div>
					{#if port === 'Sticky'}
						<div
							class="relative border mt-4 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
						>
							<label
								for="portNumber"
								class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
								>Port Number:</label
							>
							<input
								type="number"
								name="portNumber"
								id="portNumber"
								class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
								bind:value={portNumber}
							/>
						</div>
					{/if}
					<div class="mt-4">
						<label for="auth" class="block text-sm font-medium text-gray-700">Authentication:</label
						>
						<select
							id="auth"
							name="auth"
							bind:value={auth}
							class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
						>
							<option selected>Use My Authentication Details</option>
							<option>Use a User's Authentication Details</option>
						</select>
					</div>
					{#if auth === `Use a User's Authentication Details`}
						<div
							class="relative border mt-4 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
						>
							<label
								for="name"
								class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
								>User's Username</label
							>
							<input
								type="text"
								name="name"
								id="name"
								class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
								placeholder="Username"
								bind:value={username}
							/>
						</div>
						<div
							class="relative border mt-4 border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
						>
							<label
								for="name"
								class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
								>User's Password (API Key)</label
							>
							<input
								type="text"
								name="name"
								id="name"
								class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
								placeholder="Username"
								bind:value={password}
							/>
						</div>
					{/if}
				</div>
				<button
					type="button"
					class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
				>
					Run It!
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
						/>
					</svg>
				</button>
			</div>
			<div class="bg-white rounded-lg shadow-md px-5 py-6 sm:px-6 col-span-2">
				<div class="rounded-lg h-auto">
					<label for="result" class="block text-sm font-medium text-gray-700">Result:</label>
					<textarea
						class="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none mt-2"
						rows="6"
					/>
					<label for="curl" class="block text-sm font-medium text-gray-700 mt-2">Curl:</label>
					<textarea
						class="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none mt-2"
						rows="4"
					/>
				</div>
			</div>
		</div>
	</main>
</div>
