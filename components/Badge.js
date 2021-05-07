const isDefined = (x) => typeof x !== 'undefined'

const Badge = ({ alt, href, src }) =>
  isDefined(href) ? (
    <a className="inline-block mr-1" href={href}>
      <img alt={alt} src={src} />
    </a>
  ) : (
    <div className="inline-block mr-1">
      <img alt={alt} src={src} />
    </div>
  )

export default Badge
