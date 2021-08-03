import type firebase from "firebase/app";
import { writable } from "svelte/store";

const authStore = writable<{
    isLoggedIn: boolean;
    user?: firebase.UserInfo;
    firebaseControlled: boolean;
}>({
    isLoggedIn: false,
    firebaseControlled: false,
});

export default {
    subscribe: authStore.subscribe,
    set: authStore.set,
}