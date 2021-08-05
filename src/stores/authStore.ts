import { get, writable } from "svelte/store";
import firebase from 'firebase/app';
import 'firebase/firestore';
import userStore from "./userStore";

const authStore = writable<{
    username: string;
    password: string;
}>({
    username: null,
    password: null
})

// const setAuthCreds = () => {
//     firebase.firestore().collection('authDetails').doc(get(userStore).user.uid).get().then((doc) => {
//         authStore.set({
//             username: doc.data().username,
//             password: doc.data().password
//         })
//     })
//     console.log(get(authStore))
// }

export default {
    subscribe: authStore.subscribe,
    set: authStore.set
}