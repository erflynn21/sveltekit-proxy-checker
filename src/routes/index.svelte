<script lang="ts">
	import { goto } from '$app/navigation';
	import Countries from '../components/countries.svelte';
	import Nav from '../components/nav.svelte';
	import userStore from '../stores/userStore';

	let action: string = 'Check Number of IPs in a Country';
	let country: string = '';
	let product: string = 'Unmetered Residential';
	let port: string = 'Random';
	let portNumber: number = 10000;
	let auth: string = 'Use My Authentication Details';
	let username: string = '';
	let password: string = '';
	let parameters: string = '';
	let toggled: boolean = false;

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
							<option>Check IP Information</option>
							<option>Check Sessions Information</option>
							<option>Get Stats</option>
							<option>Get Current Thread Usage</option>
						</select>
					</div>
					{#if action === 'Check Number of IPs in a Country'}
						<div class="mt-4">
							<label for="country" class="block text-sm font-medium text-gray-700">Country:</label>
							<select
								id="country"
								name="country"
								bind:value={country}
								class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
							>
								<Countries />
							</select>
						</div>
					{/if}
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
								bind:value={password}
							/>
						</div>
					{/if}
					{#if action === 'Check IP Information' || action === 'Check Sessions Information' || action === 'Get Stats'}
						<div class="flex items-center justify-between mt-4">
							<span class="flex-grow flex flex-col">
								<span class="text-sm font-medium text-gray-900" id="availability-label"
									>Include Additional Parameters</span
								>
							</span>
							<button
								type="button"
								class={toggled
									? 'bg-gray-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									: 'bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}
								role="switch"
								aria-checked="false"
								on:click={() => (toggled = !toggled)}
							>
								<span class="sr-only">Use setting</span>
								<span
									class={toggled
										? 'translate-x-5 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
										: 'translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'}
								>
									<span
										class={toggled
											? 'opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
											: 'opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'}
										aria-hidden="true"
									>
										<svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
											<path
												d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</span>
									<span
										class={toggled
											? 'opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
											: 'opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'}
										aria-hidden="true"
									>
										<svg class="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
											<path
												d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
											/>
										</svg>
									</span>
								</span>
							</button>
						</div>
					{/if}
					{#if toggled}
						<label for="parameters" class="block text-sm font-medium text-gray-700 mt-4"
							>Parameters:</label
						>
						<textarea
							class="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none mt-2"
							rows="2"
							bind:value={parameters}
						/>
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
