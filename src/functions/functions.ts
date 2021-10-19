import type { Data } from '../interfaces'
import { getProxyURL } from './shared';
import firebase from '@firebase/app';
import '@firebase/functions';
import lookup from 'country-code-lookup';

const processRequest = async (data: Data) => {
    let proxy;
    if (data.product === 'All Residential Proxies') {
        let unmeteredData = data
        unmeteredData.product = 'Unmetered Residential'
        let premiumData = data
        premiumData.product = 'Premium Residential'
        let privateData = data
        privateData.product = 'Private Unmetered Residential'
        proxy = {
            1: getProxyURL(unmeteredData),
            2: getProxyURL(premiumData),
            3: getProxyURL(privateData)
        }
    } else {
        proxy = getProxyURL(data)
    }
    if (data.action === 'Check Number of IPs in a Country') {
        const countryCode = data.country;
        const params = { ...data, proxy, countryCode}
        console.log(params)
        // firebase.functions().useEmulator('localhost', 5001)
        const getCountryIPs = firebase.functions().httpsCallable('getCountryIPs');
        const res = await getCountryIPs(JSON.stringify(params))
        const result = JSON.parse(res.data)
        const number = result.number
        const country = lookup.byIso(countryCode).country

        let response: { resultReadout: string; curl: string; };
        
        if (countryCode === 'US' || countryCode === 'UK' || countryCode === 'CF' || countryCode === 'AX' || countryCode === 'BS' || countryCode === 'CC' || countryCode === 'CD' || countryCode === 'CK' || countryCode === 'CZ' || countryCode === 'DO' || countryCode === 'FK' || countryCode === 'HM' || countryCode === 'VA' || countryCode === 'IM' || countryCode === 'MH' || countryCode === 'SB' || countryCode === 'TC' || countryCode === 'UM' || countryCode === 'VG' || countryCode === 'VI') {
            response = {
                resultReadout: `We currently have ${number} ${data.product} IPs available in the ${country}.`,
                curl: `curl -x ${proxy['host']}:${proxy['port']} -U ${data.username}:${data.password} ${result.url}`
            }
        } else {
            response = {
                resultReadout: `We currently have ${number} ${data.product} IPs available in ${country}.`,
                curl: `curl -x ${proxy['host']}:${proxy['port']} -U ${data.username}:${data.password} ${result.url}`
            }
        }
     
        return response
    }
    if (data.action === 'Get List of Available Countries') {
        const params = { ...data, proxy}
        // firebase.functions().useEmulator('localhost', 5001)
        const getCountryList = firebase.functions().httpsCallable('getCountryList');
        const res = await getCountryList(JSON.stringify(params))
        const result = JSON.parse(res.data)
        const list = result.list.toString().replace(/,/g, ', ').replace(/,(?=[^,]*$)/, ' and')

        let response: { resultReadout: string; curl: string; };
        
        response = {
            resultReadout: `We currently have ${data.product} IPs available in the following countries: ${list}.`,
            curl: `curl -x ${proxy['host']}:${proxy['port']} -U ${data.username}:${data.password} ${result.url}`
        }

        return response
    }
    if (data.action === 'Get List of Available Cities') {
        const countryCode = data.country;
        const params = { ...data, proxy, countryCode}
        // firebase.functions().useEmulator('localhost', 5001)
        const getCityList = firebase.functions().httpsCallable('getCityList');
        const res = await getCityList(JSON.stringify(params))
        const result = JSON.parse(res.data)
        const list = result.list.toString().replace(/,/g, ', ').replace(/,(?=[^,]*$)/, ' and')
        const country = lookup.byIso(countryCode).country

        let response: { resultReadout: string; curl: string; };

        if (countryCode === 'US' || countryCode === 'UK' || countryCode === 'CF' || countryCode === 'AX' || countryCode === 'BS' || countryCode === 'CC' || countryCode === 'CD' || countryCode === 'CK' || countryCode === 'CZ' || countryCode === 'DO' || countryCode === 'FK' || countryCode === 'HM' || countryCode === 'VA' || countryCode === 'IM' || countryCode === 'MH' || countryCode === 'SB' || countryCode === 'TC' || countryCode === 'UM' || countryCode === 'VG' || countryCode === 'VI') {
            response = {
                resultReadout: `We currently have ${data.product} IPs available in the following cities in the ${country}: ${list}.`,
                curl: `curl -x ${proxy['host']}:${proxy['port']} -U ${data.username}:${data.password} ${result.url}`
            }
        } else {
            response = {
                resultReadout: `We currently have ${data.product} IPs available in the following cities in ${country}: ${list}.`,
                curl: `curl -x ${proxy['host']}:${proxy['port']} -U ${data.username}:${data.password} ${result.url}`
            }
        }

        return response
    }
    if (data.action === 'Get List of Available ISPs') {
        const countryCode = data.country;
        const params = { ...data, proxy, countryCode}
        // firebase.functions().useEmulator('localhost', 5001)
        const getISPList = firebase.functions().httpsCallable('getISPList');
        const res = await getISPList(JSON.stringify(params))
        const result = JSON.parse(res.data)
        const list = result.list.toString().replace(/,/g, ', ').replace(/,(?=[^,]*$)/, ' and')
        const country = lookup.byIso(countryCode).country

        let response: { resultReadout: string; curl: string; };

        if (countryCode === 'US' || countryCode === 'UK' || countryCode === 'CF' || countryCode === 'AX' || countryCode === 'BS' || countryCode === 'CC' || countryCode === 'CD' || countryCode === 'CK' || countryCode === 'CZ' || countryCode === 'DO' || countryCode === 'FK' || countryCode === 'HM' || countryCode === 'VA' || countryCode === 'IM' || countryCode === 'MH' || countryCode === 'SB' || countryCode === 'TC' || countryCode === 'UM' || countryCode === 'VG' || countryCode === 'VI') {
            response = {
                resultReadout: `We currently have ${data.product} IPs with the following ISPs in the ${country}: ${list}.`,
                curl: `curl -x ${proxy['host']}:${proxy['port']} -U ${data.username}:${data.password} ${result.url}`
            }
        } else {
            response = {
                resultReadout: `We currently have ${data.product} IPs with the following ISPs in ${country}: ${list}.`,
                curl: `curl -x ${proxy['host']}:${proxy['port']} -U ${data.username}:${data.password} ${result.url}`
            }
        }

        return response
    }
    if (data.action === 'Check IP Information') {
        const params = { ...data, proxy}
        firebase.functions().useEmulator('localhost', 5001)
        const getIPInfo = firebase.functions().httpsCallable('getIPInfo');
        const res = await getIPInfo(JSON.stringify(params))
        const result = JSON.parse(res.data)
        const info = result.info

        let response: { resultReadout: string; curl: string; };

        response = {
            resultReadout: info,
            curl: `curl -x ${proxy['host']}:${proxy['port']} -U ${data.username}:${data.password} ${result.url}`
        }
        
        return response
    }
    if (data.action === 'Check Sessions Information') {
        const params = { ...data, proxy}
        firebase.functions().useEmulator('localhost', 5001)
        const getSessions = firebase.functions().httpsCallable('getSessions');
        const res = await getSessions(JSON.stringify(params))
        const result = JSON.parse(res.data)
        const sessions = result.sessions
        const allSessions = Object.assign({}, ...sessions)

        let response: { resultReadout: string; curl: string; };
        
        response = {
            resultReadout: JSON.stringify(allSessions, undefined, 4),
            curl: `curl -x ${proxy['host']}:${proxy['port']} -U ${data.username}:${data.password} ${result.url}`
        }

        return response
    }
    if (data.action === 'Get Stats') {
        const params = { ...data, proxy}
        firebase.functions().useEmulator('localhost', 5001)
        const getStats = firebase.functions().httpsCallable('getStats');
        const res = await getStats(JSON.stringify(params))
        const result = JSON.parse(res.data)
        const stats = result.stats

        let response: { resultReadout: string; curl: string; };
        
        response = {
            resultReadout: JSON.stringify(stats, undefined, 4),
            curl: `curl -x ${proxy['host']}:${proxy['port']} -U ${data.username}:${data.password} ${result.url}`
        }

        return response
    }
    if (data.action === 'Get Current Thread Usage') {
        const params = { ...data, proxy}
        firebase.functions().useEmulator('localhost', 5001)
        const getThreads = firebase.functions().httpsCallable('getThreads');
        const res = await getThreads(JSON.stringify(params))
        const result = JSON.parse(res.data)
        const threads = result.threads

        let response: { resultReadout: string; curl: string; };

        if (threads === 1) {
            response = {
                resultReadout: `There is currently ${threads} ${data.product} thread being used on this account.`,
                curl: `curl -x ${proxy['host']}:${proxy['port']} -U ${data.username}:${data.password} ${result.url}`
            }
        } else {
            response = {
                resultReadout: `There are currently ${threads} ${data.product} threads being used on this account.`,
                curl: `curl -x ${proxy['host']}:${proxy['port']} -U ${data.username}:${data.password} ${result.url}`
            }
        }
        
        

        return response
    }
}

export {processRequest}