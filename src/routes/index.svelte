<script lang="ts">
	import { goto } from '$app/navigation';
	import userStore from '../stores/userStore';
	import authStore from '../stores/authStore';
	import Logout from '../components/logout.svelte';

	let dropdown: boolean = false;
	let settings: boolean = false;
	let logout: boolean = true;

	userStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
		if (!isLoggedIn && firebaseControlled) {
			await goto('/login');
		}
	});
</script>

<div>
	<div class="bg-gray-800 pb-32">
		<nav class="bg-gray-800">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="border-b border-gray-700">
					<div class="flex items-center justify-between h-16 px-4 sm:px-0">
						<div class="flex items-center">
							<div class="flex-shrink-0">
								<img
									class="h-8 w-8"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
									alt="Workflow"
								/>
							</div>
						</div>
						<div class="hidden md:block">
							<div class="ml-4 flex items-center md:ml-6">
								<!-- Profile dropdown -->
								<div class="ml-3 relative">
									<div>
										<button
											type="button"
											class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
											id="user-menu-button"
											aria-expanded="false"
											aria-haspopup="true"
											on:click={() => (dropdown = !dropdown)}
										>
											<span class="sr-only">Open user menu</span>
											<img
												class="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
										</button>
									</div>

									<!--
										Dropdown menu, show/hide based on menu state.

										Entering: "transition ease-out duration-100"
										From: "transform opacity-0 scale-95"
										To: "transform opacity-100 scale-100"
										Leaving: "transition ease-in duration-75"
										From: "transform opacity-100 scale-100"
										To: "transform opacity-0 scale-95"
									-->
									{#if dropdown}
										<div
											class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="user-menu-button"
											tabindex="-1"
										>
											<!-- Active: "bg-gray-100", Not Active: "" -->
											<div class="px-4 py-3" role="none">
												<p class="text-sm" role="none">Signed in as</p>
												<p class="text-sm font-medium text-gray-900 truncate" role="none">
													{#if $userStore.isLoggedIn}
														{$userStore.user.email}
													{/if}
												</p>
											</div>

											<div
												on:click={() => (settings = !settings)}
												class="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
												role="menuitem"
												tabindex="-1"
												id="user-menu-item-1"
											>
												Settings
											</div>

											<div
												on:click={() => (logout = !logout)}
												class="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
												role="menuitem"
												tabindex="-1"
												id="user-menu-item-2"
											>
												Sign out
											</div>
										</div>
									{/if}
								</div>
							</div>
						</div>

						<div class="-mr-2 flex md:hidden">
							<!-- Mobile menu button -->
							<button
								type="button"
								class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
								on:click={() => (dropdown = !dropdown)}
							>
								<span class="sr-only">Open main menu</span>
								<!--
                  Heroicon name: outline/menu

                  Menu open: "hidden", Menu closed: "block"
                -->
								<svg
									class="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								<!--
                  Heroicon name: outline/x

                  Menu open: "block", Menu closed: "hidden"
                -->
								<svg
									class="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>

			{#if dropdown}
				<!-- Mobile menu, show/hide based on menu state. -->
				<div class="border-b border-gray-700 md:hidden" id="mobile-menu">
					<div class="pt-4 pb-3 border-t border-gray-700">
						<div class="flex items-center px-5">
							<div class="flex-shrink-0">
								<img
									class="h-10 w-10 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</div>
							<div class="ml-3">
								<div class="text-base font-medium leading-none text-white">Signed in as</div>
								<div class="text-sm font-medium leading-none text-gray-400">
									{#if $userStore.isLoggedIn}
										{$userStore.user.email}
									{/if}
								</div>
							</div>
						</div>
						<div class="mt-3 px-2 space-y-1">
							<div
								on:click={() => (settings = !settings)}
								class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"
							>
								Settings
							</div>

							<div
								on:click={() => (logout = !logout)}
								class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"
							>
								Sign out
							</div>
						</div>
					</div>
				</div>
			{/if}
		</nav>

		{#if settings}
			<!-- This example requires Tailwind CSS v2.0+ -->
			<div
				class="fixed z-10 inset-0 overflow-y-auto"
				aria-labelledby="modal-title"
				role="dialog"
				aria-modal="true"
			>
				<div
					class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
				>
					<!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
					<div
						on:click={() => (settings = !settings)}
						class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
						aria-hidden="true"
					/>

					<!-- This element is to trick the browser into centering the modal contents. -->
					<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
						>&#8203;</span
					>

					<!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
					<div
						class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
					>
						<div
							class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
						>
							<label
								for="name"
								class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
								>Proxyrack Username</label
							>
							<input
								type="text"
								name="name"
								id="name"
								class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
								placeholder={$authStore.username}
							/>
						</div>
						<div
							class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 mt-4"
						>
							<label
								for="name"
								class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
								>Proxyrack Password (API Key)</label
							>
							<input
								type="text"
								name="name"
								id="name"
								class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
								placeholder={$authStore.password}
							/>
						</div>
						<div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
							<button
								type="button"
								class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
							>
								Update Auth Credentials
							</button>
							<button
								on:click={() => (settings = !settings)}
								type="button"
								class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		{/if}

		{#if logout}
			<Logout on:close={() => (logout = !logout)} />
		{/if}
	</div>

	<main class="-mt-32">
		<div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 grid grid-cols-3 mt-8 gap-4">
			<!-- Replace with your content -->
			<div class="bg-white rounded-lg shadow-md px-5 py-6 sm:px-6 ">
				<div class="rounded-lg h-auto">
					<div>
						<label for="action" class="block text-sm font-medium text-gray-700">Action:</label>
						<select
							id="action"
							name="action"
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
						<label for="auth" class="block text-sm font-medium text-gray-700">Authentication:</label
						>
						<select
							id="auth"
							name="auth"
							class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
						>
							<option selected>Use My Authentication Details</option>
							<option>Use a User's Authentication Details</option>
						</select>
					</div>
				</div>
				<button
					type="button"
					class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
				>
					Run It!
					<!-- Heroicon name: solid/mail -->
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
			<!-- /End replace -->
		</div>
	</main>
</div>
