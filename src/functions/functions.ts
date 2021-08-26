import type { Data } from '../interfaces'
import { getCountryCode, getProxyURL } from './shared';
import firebase from '@firebase/app';
import '@firebase/functions';

// const functions = firebase.functions();
// functions.useEmulator('localhost', 5001);

const processRequest = async (data: Data) => {
    const proxy = getProxyURL(data)
    if (data.action === 'Check Number of IPs in a Country') {
        getCountryIPs(data, proxy)
        firebase.functions().useEmulator('localhost', 5001)
        const sayHello = firebase.functions().httpsCallable('helloWorld');
        sayHello().then(res => {
            console.log(res.data)
        })
    }
    if (data.action === 'Get List of Available Countries') {
        getCountryList(data, proxy)
    }
    if (data.action === 'Get List of Available Cities') {
        getCityList(data, proxy)
    }
    if (data.action === 'Get List of Available ISPs') {
        getISPList(data, proxy)
    }
    if (data.action === 'Check IP Information') {
        checkIPInfo(data, proxy)
    }
    if (data.action === 'Check Sessions Information') {
        getSessions(data, proxy)
    }
    if (data.action === 'Get Stats') {
        getStats(data, proxy)
    }
    if (data.action === 'Get Current Thread Usage') {
        getThreadUsage(data, proxy)
    }
}

const getCountryIPs = (data: Data, proxy) => {
    console.log(proxy)
    const countryCode = getCountryCode(data.country);
    console.log(countryCode)
}

const getCountryList = (data: Data, proxy) => {
    console.log('get country list')
}

const getCityList = (data: Data, proxy) => {
    console.log('get city list')
}

const getISPList = (data: Data, proxy) => {
    console.log('get isp list')
}

const checkIPInfo = (data: Data, proxy) => {
    console.log('check IP Info')
}

const getSessions = (data: Data, proxy) => {
    console.log('sessions info')
}

const getStats = (data: Data, proxy) => {
    console.log('stats')
}

const getThreadUsage = (data: Data, proxy) => {
    console.log('threads')
}

export {processRequest}