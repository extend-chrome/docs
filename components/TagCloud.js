import { useState, useEffect } from 'react'
import { TagCloud as ReactTagCloud } from 'react-tagcloud'
import { kebabCase } from 'lodash'

function scrollToTargetAdjusted(element) {
  const offset = 120
  const bodyRect = document.body.getBoundingClientRect().top
  const elementRect = element.getBoundingClientRect().top
  const elementPosition = elementRect - bodyRect
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

export const TagAnchor = ({ value, count }) => {
  const anchor = `tag-anchor__${kebabCase(value)}`
  return (
    <a
      id={anchor}
      className="root tag-cloud-anchor"
      data-value={value}
      data-count={count}
    >
      <style jsx>{`
        .root {
          display: block;
          height: 0;
        }
      `}</style>
    </a>
  )
}

export default function TagCloud() {
  const [tags, setTags] = useState([])

  useEffect(() => {
    const elTags = document.querySelectorAll('.tag-cloud-anchor')

    setTags(
      [...elTags].map((el) => {
        const { value, count } = el.dataset
        return { value, count, el }
      })
    )
  }, [])

  return (
    <div id="tag-cloud">
      <ReactTagCloud
        tags={tags}
        minSize={15}
        maxSize={50}
        disableRandomColor={true}
        onClick={({ el }) => {
          // This scrolls to the center of the window
          // el.scrollIntoView({ behavior: 'smooth', block: 'center' })
          // This scrolls to the top of the window, minus offset
          scrollToTargetAdjusted(el)
        }}
      />
      <style jsx global>{`
        .tag-cloud {
          text-align: center;
          margin-top: 12px;
        }
        .tag-cloud-tag {
          cursor: pointer;
        }
        .tag-cloud-tag:hover {
          text-decoration: underline;
          color: rgba(66, 153, 225, var(--tw-text-opacity)) !important;
        }
      `}</style>
    </div>
  )
}
