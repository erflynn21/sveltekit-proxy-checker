<script lang="ts">
	import userStore from '../stores/userStore';
	import Logout from '../components/logout.svelte';
	import Settings from '../components/settings.svelte';

	let dropdown: boolean = false;
	let settings: boolean = false;
	let logout: boolean = false;

	const openSettings = () => {
		settings = true;
		dropdown = false;
	};

	const openLogout = () => {
		logout = true;
		dropdown = false;
	};
</script>

<div class="bg-gray-800 pb-32">
	<nav class="bg-gray-800">
		<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
			<div class="border-b border-gray-700">
				<div class="flex items-center justify-between h-16 px-4 sm:px-0">
					<div class="flex items-center">
						<div class="flex-shrink-0">
							<img class="h-8 w-8" src="logo.png" alt="Workflow" />
						</div>
						<h1 class="text-white ml-4 text-xl">Proxyrack Proxy Checker</h1>
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
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-8 w-8"
											fill="none"
											viewBox="0 0 24 24"
											stroke="white"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
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
											<p class="text-sm " role="none">Signed in as</p>
											<p class="text-sm font-medium text-gray-900 truncate" role="none">
												{#if $userStore.isLoggedIn}
													{$userStore.user.email}
												{/if}
											</p>
										</div>

										<div
											on:click={openSettings}
											class="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
											role="menuitem"
											tabindex="-1"
											id="user-menu-item-1"
										>
											Settings
										</div>

										<div
											on:click={openLogout}
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

							{#if !dropdown}
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
							{:else}
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
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							{/if}
						</button>
					</div>
				</div>
			</div>
		</div>

		{#if dropdown}
			<!-- Mobile menu, show/hide based on menu state. -->
			<div class="border-b border-gray-700 md:hidden w-full" id="mobile-menu">
				<div class="pt-4 pb-3 border-t border-gray-700">
					<div class="flex items-center px-5">
						<div class="w-full">
							<div class="text-base font-medium leading-none text-white text-center mb-2">
								Signed in as:
							</div>
							<div class="text-sm font-medium leading-none text-gray-400 text-center">
								{#if $userStore.isLoggedIn}
									{$userStore.user.email}
								{/if}
							</div>
						</div>
					</div>
					<div class="mt-3 px-2 space-y-1">
						<div
							on:click={() => (settings = !settings)}
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer text-center"
						>
							Settings
						</div>

						<div
							on:click={() => (logout = !logout)}
							class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer text-center"
						>
							Sign out
						</div>
					</div>
				</div>
			</div>
		{/if}
	</nav>

	{#if settings}
		<Settings on:close={() => (settings = !settings)} />
	{/if}

	{#if logout}
		<Logout on:close={() => (logout = !logout)} />
	{/if}
</div>
