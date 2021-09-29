import * as functions from "firebase-functions";
const http = require('http')

export const getCountryIPs = functions.https.onCall(async (data, context) => {
  const json = JSON.parse(data)
  const options = {
      host: json.proxy.host,
      port: json.proxy.port,
      path: `https://api.proxyrack.net/countries/${json.countryCode}/count`,
      method: 'GET',
      mode: 'no-cors',
      headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
          'Proxy-Authorization': 'Basic ' + Buffer.from(json.username + ':' + json.password).toString('base64'),
      }
  }

  let dataToSend

  await new Promise<void>(resolve => {
    http.get(options, function(res: { on: (arg0: string, arg1: (response: any) => void) => void; }) {
      res.on('data', function (response: string) {
          const number = parseInt(response)
          dataToSend = JSON.stringify({ number, url: options.path })     
      })
      resolve()
    })
    
  })
  return dataToSend
});

export const getCountryList = functions.https.onCall(async (data, context) => {
  const json = JSON.parse(data)
  const options = {
      host: json.proxy.host,
      port: json.proxy.port,
      path: `https://api.proxyrack.net/countries/`,
      method: 'GET',
      mode: 'no-cors',
      headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
          'Proxy-Authorization': 'Basic ' + Buffer.from(json.username + ':' + json.password).toString('base64'),
      }
  }

  let dataToSend

  await new Promise<void>(resolve => {
    http.get(options, function(res: { on: (arg0: string, arg1: (response: any) => void) => void; }) {
      res.on('data', function (response) {
          const list = JSON.parse(response)
          dataToSend = JSON.stringify({ list, url: options.path })     
      })
      resolve()
    })
    
  })
  return dataToSend
})

export const getCityList = functions.https.onCall(async (data, context) => {
  const json = JSON.parse(data)
  const options = {
      host: json.proxy.host,
      port: json.proxy.port,
      path: `https://api.proxyrack.net/countries/${json.countryCode}/cities`,
      method: 'GET',
      mode: 'no-cors',
      headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
          'Proxy-Authorization': 'Basic ' + Buffer.from(json.username + ':' + json.password).toString('base64'),
      }
  }

  let dataToSend

  await new Promise<void>(resolve => {
    http.get(options, function(res: { on: (arg0: string, arg1: (response: any) => void) => void; }) {
      res.on('data', function (response) {
          const list = JSON.parse(response)
          dataToSend = JSON.stringify({ list, url: options.path })     
      })
      resolve()
    })
    
  })
  return dataToSend
})

export const getISPList = functions.https.onCall(async (data, context) => {
  const json = JSON.parse(data)
  const options = {
      host: json.proxy.host,
      port: json.proxy.port,
      path: `https://api.proxyrack.net/countries/${json.countryCode}/isps`,
      method: 'GET',
      mode: 'no-cors',
      headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
          'Proxy-Authorization': 'Basic ' + Buffer.from(json.username + ':' + json.password).toString('base64'),
      }
  }

  let dataToSend

  await new Promise<void>(resolve => {
    http.get(options, function(res: { on: (arg0: string, arg1: (response: any) => void) => void; }) {
      res.on('data', function (response) {
          const list = JSON.parse(response)
          dataToSend = JSON.stringify({ list, url: options.path })     
      })
      resolve()
    })
    
  })
  return dataToSend
})

export const getIPInfo = functions.https.onCall(async (data, context) => {
  const json = JSON.parse(data)
  const options = {
      host: json.proxy.host,
      port: json.proxy.port,
      path: `https://ipinfo.io/json`,
      method: 'GET',
      mode: 'no-cors',
      headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
          'Proxy-Authorization': 'Basic ' + Buffer.from(json.username + ':' + json.password).toString('base64'),
      }
  }

  let dataToSend

  await new Promise<void>(resolve => {
    http.get(options, function(res: { on: (arg0: string, arg1: (response: any) => void) => void; }) {
      res.on('data', function (response) {
          console.log(response)
          const info = response.toString()
          dataToSend = JSON.stringify({ info, url: options.path })     
      })
      resolve()
    })
    
  })
  return dataToSend
})

export const getSessions = functions.https.onCall(async (data, context) => {
  const json = JSON.parse(data)
  const options = {
      host: json.proxy.host,
      port: json.proxy.port,
      path: `https://api.proxyrack.net/sessions`,
      method: 'GET',
      mode: 'no-cors',
      headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
          'Proxy-Authorization': 'Basic ' + Buffer.from(json.username + ':' + json.password).toString('base64'),
      }
  }

  let dataToSend

  await new Promise<void>(resolve => {
    http.get(options, function(res: { on: (arg0: string, arg1: (response: any) => void) => void; }) {
      res.on('data', function (response) {
          const sessions = JSON.parse(response)
          dataToSend = JSON.stringify({ sessions, url: options.path })     
      })
      resolve()
    })
    
  })
  return dataToSend
})

export const getStats = functions.https.onCall(async (data, context) => {
  const json = JSON.parse(data)
  const options = {
      host: json.proxy.host,
      port: json.proxy.port,
      path: `https://api.proxyrack.net/stats`,
      method: 'GET',
      mode: 'no-cors',
      headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
          'Proxy-Authorization': 'Basic ' + Buffer.from(json.username + ':' + json.password).toString('base64'),
      }
  }

  let dataToSend

  await new Promise<void>(resolve => {
    http.get(options, function(res: { on: (arg0: string, arg1: (response: any) => void) => void; }) {
      res.on('data', function (response) {
          const stats = JSON.parse(response)
          dataToSend = JSON.stringify({ stats, url: options.path })     
      })
      resolve()
    })
    
  })
  return dataToSend
})

export const getThreads = functions.https.onCall(async (data, context) => {
  const json = JSON.parse(data)
  const options = {
      host: json.proxy.host,
      port: json.proxy.port,
      path: `https://api.proxyrack.net/concurrent`,
      method: 'GET',
      mode: 'no-cors',
      headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
          'Proxy-Authorization': 'Basic ' + Buffer.from(json.username + ':' + json.password).toString('base64'),
      }
  }

  let dataToSend

  await new Promise<void>(resolve => {
    http.get(options, function(res: { on: (arg0: string, arg1: (response: any) => void) => void; }) {
      res.on('data', function (response: string) {
          const threads = parseInt(response)
          dataToSend = JSON.stringify({ threads, url: options.path })     
      })
      resolve()
    })
    
  })
  return dataToSend
});