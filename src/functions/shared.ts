import type { Data } from "src/interfaces";

const getProxyURL = (data: Data) => {
    let proxy: string;
    const username = data.username;
    const password = data.password;
    const port = data.port
    const parameters = data.parameters

    if (data.product === 'Unmetered Residential' && port === 'Random') {
        proxy = `http://${username}${parameters}:${password}:megaproxy.rotating.proxyrack.net:222`
    }
    if (data.product === 'Unmetered Residential' && port === 'Sticky') {
        proxy = `http://${username}${parameters}:${password}:megaproxy.rotating.proxyrack.net:${data.portNumber}`
    }
    if (data.product === 'Premium Residential' && port === 'Random') {
        proxy = `http://${username}${parameters}:${password}:premium.residential.proxyrack.net:9000`
    }
    if (data.product === 'Premium Residential' && port === 'Sticky') {
        proxy = `http://${username}${parameters}:${password}:premium.residentialproxyrack.net:${data.portNumber}`
    }
    if (data.product === 'Private Residential') {
        proxy = `http://${username}${parameters}:${password}:private.residentialproxyrack.net:${data.portNumber}`
    }
    if (data.product === 'USA Datacenter' && port === 'Random') {
        proxy = `http://${username}${parameters}:${password}:usa.rotating.proxyrack.net:333`
    }
    if (data.product === 'USA Datacenter' && port === 'Sticky') {
        proxy = `http://${username}${parameters}:${password}:usa.rotating.proxyrack.net:${data.portNumber}`
    }
    if (data.product === 'Global Datacenter' && port === 'Random') {
        proxy = `http://${username}${parameters}:${password}:mixed.rotating.proxyrack.net:444`
    }
    if (data.product === 'Global Datacenter' && port === 'Sticky') {
        proxy = `http://${username}${parameters}:${password}:mixed.rotating.proxyrack.net:${data.portNumber}`
    }
    if (data.product === 'Canada Datacenter' && port === 'Random') {
        proxy = `http://${username}${parameters}:${password}:canada.rotating.proxyrack.net:9000`
    }
    if (data.product === 'Canada Datacenter' && port === 'Sticky') {
        proxy = `http://${username}${parameters}:${password}:canada.rotating.proxyrack.net:${data.portNumber}`
    }
    if (data.product === 'Static USA Datacenter') {
        proxy = `http://${username}${parameters}:${password}:usa.shared.proxyrack.net:${data.portNumber}`
    }
    return proxy;
}

export {getProxyURL}