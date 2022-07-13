import React from 'react'
import { nanoid } from 'nanoid'

class FamewallEmbed extends React.Component {

  constructor(props) {
    super(props);
    this.state = { embedId: '' };
  }

  componentDidMount() {
    if (!this.props.wallUrl) {
      console.error('Wall URL is required')
      return null
    }

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.defer = true
    s.src = "https://embed.famewall.io/frame.js";
    this.instance.appendChild(s);
    
    const embedId = nanoid();
    this.setState({ embedId: embedId });
  }

  render() {

    const { wallUrl, cardTheme, carouselMode } = this.props;

    if(cardTheme==="dark"){
      return (
        <div ref={el => (this.instance = el)} style={{width:'100%', height:'100%'}}>
          <div className="famewall-embed" data-src={wallUrl} data-format={!carouselMode?"grid":"carousel"} data-theme={'dark'} style={{ width: "100%" }}></div>
        </div>
  
      )
    }
    else
    return (
      <div ref={el => (this.instance = el)} style={{width:'100%', height:'100%'}}>
        <div className="famewall-embed" data-src={wallUrl} data-format={!carouselMode?"grid":"carousel"} data-theme={'light'} style={{ width: "100%" }}></div>
      </div>

    )
  }
}


export default FamewallEmbed
