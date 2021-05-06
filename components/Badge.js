const Badge = ({ alt, href = '#', src }) => (
  <a className="inline-block mr-1" href={href}>
    <img alt={alt} src={src} />
  </a>
)

export default Badge