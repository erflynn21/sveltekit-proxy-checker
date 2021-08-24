import type { Data } from '../interfaces'
import { getCountryCode, getProxyURL } from './shared';

const processRequest = async (data: Data) => {
    const proxy = getProxyURL(data)
    if (data.action === 'Check Number of IPs in a Country') {
        getCountryIPs(data, proxy)
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