import React from 'react'
import IframeResizer from 'iframe-resizer-react'

const FamewallEmbed = ({ wallUrl,avatarCollectionId, cardTheme, carouselMode=false, dualSliderMode=false,autoplay=false }) => {
  if (!wallUrl && !avatarCollectionId) {
    console.error('Wall URL/ Collection Id is required')
    return null
  }

  if(avatarCollectionId){
    return(
      <IframeResizer
      title={`Famewall Embed ${avatarCollectionId}`}
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
      src={cardTheme?`https://wallembed.famewall.io/${!carouselMode? (!dualSliderMode?'wall':'slider') :'carousel'}/${wallUrl}?theme=${cardTheme}${autoplay?'&autoplay=1':''}`:`https://wallembed.famewall.io/${!carouselMode? (!dualSliderMode?'wall':'slider') :'carousel'}/${wallUrl}${autoplay?'?autoplay=1':''}`}
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
