import 'nextra-theme-docs/style.css'
import Prism from 'prism-react-renderer/prism'
import posthog from 'posthog-js'
;(typeof global !== 'undefined' ? global : window).Prism = Prism

posthog.init('phc_dNxpLX1NPBg8qJPd4HycpkGW9cXBNo8JL1buSTtw1ld', {
  api_host: 'https://app.posthog.com',
})

require('prismjs/components/prism-kotlin')
require('prismjs/components/prism-csharp')

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}
