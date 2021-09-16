import type { Data } from "src/interfaces";

const getProxyURL = (data: Data) => {
    let proxy: object;
    const username = data.username;
    const password = data.password;
    const port = data.port
    const parameters = data.parameters

    if (data.product === 'Unmetered Residential' && port === 'Random') {
        proxy = {
            host: 'megaproxy.rotating.proxyrack.net',
            port: 222
        }
    }
    if (data.product === 'Unmetered Residential' && port === 'Sticky') {
        proxy = {
            host: 'megaproxy.rotating.proxyrack.net',
            port: data.portNumber
        }
    }
    if (data.product === 'Premium Residential' && port === 'Random') {
        proxy = {
            host: 'premium.residential.proxyrack.net',
            port: 9000
        }
    }
    if (data.product === 'Premium Residential' && port === 'Sticky') {
        proxy = {
            host: 'premium.residential.proxyrack.net',
            port: data.portNumber
        }
    }
    if (data.product === 'Private Residential') {
        proxy = {
            host: 'private.residential.proxyrack.net',
            port: data.portNumber
        }
    }
    if (data.product === 'USA Datacenter' && port === 'Random') {
        proxy = {
            host: 'usa.rotating.proxyrack.net',
            port: 333
        }
    }
    if (data.product === 'USA Datacenter' && port === 'Sticky') {
        proxy = {
            host: 'usa.rotating.proxyrack.net',
            port: data.portNumber
        }
    }
    if (data.product === 'Global Datacenter' && port === 'Random') {
        proxy = {
            host: 'mixed.rotating.proxyrack.net',
            port: 444
        }
    }
    if (data.product === 'Global Datacenter' && port === 'Sticky') {
        proxy = {
            host: 'mixed.rotating.proxyrack.net',
            port: data.portNumber
        }
    }
    if (data.product === 'Canada Datacenter' && port === 'Random') {
        proxy = {
            host: 'canada.rotating.proxyrack.net',
            port: 9000
        }
    }
    if (data.product === 'Canada Datacenter' && port === 'Sticky') {
        proxy = {
            host: 'canada.rotating.proxyrack.net',
            port: data.portNumber
        } 
    }
    if (data.product === 'Static USA Datacenter') {
        proxy = {
            host: 'usa.shared.proxyrack.net',
            port: data.portNumber
        }
    }
    return proxy;
}

export {getProxyURL}