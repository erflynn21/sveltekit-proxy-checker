import { writable } from "svelte/store";

const authStore = writable<{
    username: string;
    password: string;
}>({
    username: null,
    password: null
})

export default {
    subscribe: authStore.subscribe,
    set: authStore.set
}