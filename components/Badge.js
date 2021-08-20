const isDefined = (x) => typeof x !== 'undefined'

const Badge = ({ alt, href, src }) =>
  isDefined(href) ? (
    <a className="inline-block mr-1" href={href}>
      <img alt={alt} src={src} />
    </a>
  ) : (
    <span className="inline-block mr-1">
      <img alt={alt} src={src} />
    </span>
  )

export default Badge
