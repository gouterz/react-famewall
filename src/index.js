import React from 'react'
import IframeResizer from 'iframe-resizer-react'
import {nanoid} from 'nanoid'

const FamewallEmbed = ({ wallUrl, cardTheme }) => {
  if (!wallUrl) {
    console.error('Wall URL is required')
    return null
  }
  const embedId = nanoid()

  return (
    <IframeResizer
      title={`Famewall Embed ${wallUrl}`}
      id={embedId}
      src={cardTheme?`https://wallembed.famewall.io/wall/${wallUrl}?theme=${cardTheme}`:`https://wallembed.famewall.io/wall/${wallUrl}`}
      frameBorder='0'
      checkOrigin={false}
      autoResize={true}
      scrolling="no"
      width='100%'
      style={{
        border: 0,
        width: '1px',
        minWidth: '100%'
      }}
    />
  )
}

export default FamewallEmbed
