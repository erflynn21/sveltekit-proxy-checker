addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const corsHeaders = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Origin': '*',
}

const getData = async (request) => {
    const data = {
      number: 12
    }

    const json = JSON.stringify(data, null, 2)
    const requestInfo = await request.json()
    const action = requestInfo.action

    if (action === 'Check Number of IPs in a Country') {
      getCountryIPs(requestInfo)
    }
    if (action === 'Get List of Available Countries') {
      getCountryList(requestInfo)
    }
    if (action === 'Get List of Available Cities') {
      getCityList(requestInfo)
    }
    if (action === 'Get List of Available ISPs') {
      getISPList(requestInfo)
    }
    if (action === 'Check IP Information') {
      checkIPInfo(requestInfo)
    }
    if (action === 'Check Sessions Information') {
      getSessions(requestInfo)
    }
    if (action === 'Get Stats') {
      getStats(requestInfo)
    }
    if (action === 'Get Current Thread Usage') {
      getThreadUsage(requestInfo)
    }
    return new Response(json, {
      headers: {
        "content-type": "application/json",
        ...corsHeaders
      }})
  }

async function handleRequest(request) {
  if (request.method === 'OPTIONS') {
    return new Response('OK', {headers: corsHeaders})
  }

  if (request.method === 'POST') {
    return getData(request)
  }
}

const getCountryIPs = (request) => {
  getProxy(request)
  // .then((proxy) => console.log(proxy))
}

const getCountryList = (request) => {
  console.log('get country list')
}

const getCityList = (request) => {
  console.log('get city list')
}

const getISPList = (request) => {
  console.log('get isp list')
}

const checkIPInfo = (request) => {
  console.log('check IP Info')
}

const getSessions = (request) => {
  console.log('sessions info')
}

const getStats = (request) => {
  console.log('stats')
}

const getThreadUsage = (request) => {
  console.log('threads')
}

const getProxy = async (request) => {
  let proxy;
  const username = request.username;
  const password = request.password;
  const port = request.port
  const parameters = request.parameters

  if (request.product === 'Unmetered Residential' && port === 'Random') {
    proxy = `http://${username}${parameters}:${password}:megaproxy.rotating.proxyrack.net:222`
    // console.log(proxy)
  }
  if (request.product === 'Unmetered Residential' && port === 'Sticky') {
    proxy = `http://${username}${parameters}:${password}:megaproxy.rotating.proxyrack.net:${request.portNumber}`
  }
  if (request.product === 'Premium Residential' && port === 'Random') {
    proxy = `http://${username}${parameters}:${password}:premium.residential.proxyrack.net:9000`
    // console.log(proxy)
  }
  if (request.product === 'Premium Residential' && port === 'Sticky') {
    proxy = `http://${username}${parameters}:${password}:premium.residentialproxyrack.net:${request.portNumber}`
  }
  if (request.product === 'Private Residential') {
    proxy = `http://${username}${parameters}:${password}:private.residentialproxyrack.net:${request.portNumber}`
  }
  if (request.product === 'USA Datacenter' && port === 'Random') {
    proxy = `http://${username}${parameters}:${password}:usa.rotating.proxyrack.net:333`
    // console.log(proxy)
  }
  if (request.product === 'USA Datacenter' && port === 'Sticky') {
    proxy = `http://${username}${parameters}:${password}:usa.rotating.proxyrack.net:${request.portNumber}`
  }
  if (request.product === 'Global Datacenter' && port === 'Random') {
    proxy = `http://${username}${parameters}:${password}:mixed.rotating.proxyrack.net:444`
    // console.log(proxy)
  }
  if (request.product === 'Global Datacenter' && port === 'Sticky') {
    proxy = `http://${username}${parameters}:${password}:mixed.rotating.proxyrack.net:${request.portNumber}`
  }
  if (request.product === 'Canada Datacenter' && port === 'Random') {
    proxy = `http://${username}${parameters}:${password}:canada.rotating.proxyrack.net:9000`
    // console.log(proxy)
  }
  if (request.product === 'Canada Datacenter' && port === 'Sticky') {
    proxy = `http://${username}${parameters}:${password}:canada.rotating.proxyrack.net:${request.portNumber}`
  }
  if (request.product === 'Static USA Datacenter') {
    proxy = `http://${username}${parameters}:${password}:usa.shared.proxyrack.net:${request.portNumber}`
  }
  console.log(proxy)
  // return proxy;
}