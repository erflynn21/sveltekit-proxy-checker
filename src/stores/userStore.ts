import { writable } from "svelte/store";
import type firebase from "firebase/app";

const userStore = writable<{
    isLoggedIn: boolean;
    user?: firebase.UserInfo;
    firebaseControlled: boolean;
}>({
    isLoggedIn: false,
    firebaseControlled: false,
});

export default {
    subscribe: userStore.subscribe,
    set: userStore.set,
}