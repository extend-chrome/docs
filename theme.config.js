export default {
  github: 'https://github.com/extend-chrome',
  docsRepositoryBase: 'https://github.com/jacksteamdev/extend-chrome-docs/blob/master',
  titleSuffix: ' – Extend Chrome',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        Extend Chrome
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Smart Chrome Extension Development
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Extend Chrome: Smart Chrome extension development"
      />
      <meta
        name="og:description"
        content="Extend Chrome: Smart Chrome extension development"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://extend-chrome.dev/og.png" />
      <meta name="twitter:site:domain" content="extend-chrome.dev" />
      <meta name="twitter:url" content="https://extend-chrome.dev" />
      <meta name="og:title" content="Extend Chrome: Smart Chrome extension development" />
      <meta name="og:image" content="https://extend-chrome.dev/og.png" />
      <meta name="apple-mobile-web-app-title" content="Extend Chrome" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="https://extend-chrome.dev/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>MIT {new Date().getFullYear()} © Extend Chrome.</>,
}
