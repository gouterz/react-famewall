import React from 'react'
import IframeResizer from 'iframe-resizer-react'

const FamewallEmbed = ({ wallUrl, cardTheme, carouselMode=false, dualSliderMode=false }) => {
  if (!wallUrl) {
    console.error('Wall URL is required')
    return null
  }

  return (
    <IframeResizer
      title={`Famewall Embed ${wallUrl}`}
      src={cardTheme?`https://wallembed.famewall.io/${!carouselMode? (!dualSliderMode?'wall':'slider') :'carousel'}/${wallUrl}?theme=${cardTheme}`:`https://wallembed.famewall.io/${!carouselMode? (!dualSliderMode?'wall':'slider') :'carousel'}/${wallUrl}`}
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
