import React from 'react'
import IframeResizer from 'iframe-resizer-react'
import {nanoid} from 'nanoid'

const FamewallEmbed = ({ url }) => {
  if (!url) {
    console.error('A url is required')
    return null
  }
  const embedId = nanoid()

  return (
    <IframeResizer
      title={`Famewall Embed ${url.replace(
        'https://embed.famewall.io',
        ''
      )}`}
      id={embedId}
      src={`https://embed.famewall.io/${url}`}
      frameBorder='0'
      scrolling='yes'
      width='100%'
      style={{
        border: 0
      }}
    />
  )
}

export default FamewallEmbed
