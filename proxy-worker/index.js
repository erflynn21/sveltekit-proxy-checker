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
    console.log(action)

    if (action === 'Check Number of IPs in a Country') {
      getCountryIPs()
    }
    if (action === 'Get List of Available Countries') {
      getCountryList()
    }
    if (action === 'Get List of Available Cities') {
      getCityList()
    }
    if (action === 'Get List of Available ISPs') {
      getISPList()
    }
    if (action === 'Check IP Information') {
      checkIPInfo()
    }
    if (action === 'Check Sessions Information') {
      getSessions()
    }
    if (action === 'Get Stats') {
      getStats()
    }
    if (action === 'Get Current Thread Usage') {
      getThreadUsage()
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

const getCountryIPs = () => {
  console.log('get country IPs')
}

const getCountryList = () => {
  console.log('get country list')
}

const getCityList = () => {
  console.log('get city list')
}

const getISPList = () => {
  console.log('get isp list')
}

const checkIPInfo = () => {
  console.log('check IP Info')
}

const getSessions = () => {
  console.log('sessions info')
}

const getStats = () => {
  console.log('stats')
}

const getThreadUsage = () => {
  console.log('threads')
}