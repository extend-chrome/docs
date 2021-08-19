import { TagCloud as ReactTagCloud } from 'react-tagcloud'

const data = [
  { value: 'manifest.json', count: 25, anchor: 'its-all-in-the-manifest' },
  {
    value: 'Parses HTML',
    count: 25,
    anchor: 'does-that-include-the-scripts-in-the-options-page-and-popup-page',
  },
  {
    value: 'Copies Assets',
    count: 18,
    anchor: 'what-happens-with-the-assets-like-images-icons-or-css-files',
  },
  {
    value: 'Manifest Validation',
    count: 30,
    anchor: 'Is the Manifest validated?',
  },
  {
    value: 'Auto Permissions',
    count: 28,
    anchor: 'does-it-detect-permissions-automatically',
  },
  {
    value: 'package.json',
    count: 25,
    anchor: 'do-i-have-to-copy-paste-the-packagejson-fields-to-the-manifest',
  },
  { value: 'MV3', count: 33, anchor: 'what-about-manifest-version-3' },
  {
    value: 'Hot Reloader',
    count: 57,
    anchor: 'reload-your-extension-automatically',
  },
  { value: 'Content Scripts', count: 30, anchor: '' },
  {
    value: 'TypeScript',
    count: 45,
    anchor: 'write-chrome-extensions-in-typescript',
  },
  {
    value: 'Full ESM Support',
    count: 30,
    anchor: 'use-es2015-modules-in-your-scripts',
  },
  {
    value: 'Alternate Manifest Formats',
    count: 17,
    anchor: 'can-i-write-my-manifest-in-typescript',
  },
  { value: 'Promises', count: 17, anchor: 'use-promises-like-its-2021' },
  // { value: 'Firefox', count: 30, anchor: '' },
  { value: 'Supports Edge', count: 30, anchor: '' },
  { value: 'i18n', count: 11, anchor: '' },
]

export default function TagCloud() {
  return (
    <div id="tag-cloud">
      <ReactTagCloud
        tags={data}
        minSize={15}
        maxSize={50}
        disableRandomColor={true}
        onClick={({ anchor }) => {
          const heading = document.getElementById(anchor)
          heading?.scrollIntoView()
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
