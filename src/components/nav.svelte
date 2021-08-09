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
		<Settings on:close={() => (settings = !settings)} />
	{/if}

	{#if logout}
		<Logout on:close={() => (logout = !logout)} />
	{/if}
</div>
