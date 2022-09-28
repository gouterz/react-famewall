import React from 'react'
import IframeResizer from 'iframe-resizer-react'

const FamewallEmbed = ({ wallUrl,avatarCollectionId, cardTheme, carouselMode=false, dualSliderMode=false }) => {
  if (!wallUrl) {
    console.error('Wall URL is required')
    return null
  }

  if(avatarCollectionId){
    return(
      <IframeResizer
      title={`Famewall Embed ${wallUrl}`}
      src={`https://wallembed.famewall.io/avatars/${avatarCollectionId}`}
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
