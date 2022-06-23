import React from 'react'
import IframeResizer from 'iframe-resizer-react'
import {nanoid} from 'nanoid'

const FamewallEmbed = ({ wallUrl, cardTheme, carouselMode=false }) => {
  if (!wallUrl) {
    console.error('Wall URL is required')
    return null
  }
  const embedId = nanoid()

  return (
    <IframeResizer
      title={`Famewall Embed ${wallUrl}`}
      id={embedId}
      src={cardTheme?`https://wallembed.famewall.io/${!carouselMode?'wall':'carousel'}/${wallUrl}?theme=${cardTheme}`:`https://wallembed.famewall.io/${!carouselMode?'wall':'carousel'}/${wallUrl}`}
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
