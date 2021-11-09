import 'nextra-theme-docs/style.css'
import Prism from 'prism-react-renderer/prism'
import posthog from 'posthog-js'
import { useRouter } from 'next/router'
;(typeof global !== 'undefined' ? global : window).Prism = Prism
import { useEffect } from 'react'

if (process.browser && !window.location.href.includes('localhost'))
  posthog.init('phc_dNxpLX1NPBg8qJPd4HycpkGW9cXBNo8JL1buSTtw1ld', {
    api_host: 'https://app.posthog.com',
  })

require('prismjs/components/prism-kotlin')
require('prismjs/components/prism-csharp')

function handleRouteChange() {
  posthog.capture('$pageview')
}

export default function Nextra({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
