import React,{useEffect} from 'react'
import IframeResizer from 'iframe-resizer-react'
import {nanoid} from 'nanoid'

const FamewallEmbed = ({ wallUrl, cardTheme }) => {
  if (!wallUrl) {
    console.error('Wall URL is required')
    return null
  }
  const embedId = nanoid()

  useEffect(()=>{},[cardTheme])

  return (
    <IframeResizer
      title={`Famewall Embed ${wallUrl}`}
      id={embedId}
      src={cardTheme?`https://embed.famewall.io/wall/${wallUrl}?theme=${cardTheme}`:`https://embed.famewall.io/wall/${wallUrl}`}
      frameBorder='0'
      scrolling={false}
      width='100%'
      style={{
        border: 0
      }}
    />
  )
}

export default FamewallEmbed
