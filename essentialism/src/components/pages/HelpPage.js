import React from 'react';
import ReactPlayer from 'react-player'

// import { Spring } from 'react-spring/renderprops';

const HelpPage = () => {
      return (
          <div style={{display: "flex", justifyItems: "center", alignItems: "center", width: "28vw", marginTop: "1%", marginLeft: "10%", marginRight: "4%"}}>
        <div className='player-wrapper' style={{height: "66vh"}}>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=tsP5u6pG0RY'
            width='375%'
            height='123%'
          />
        </div>
        </div>
      )
}

export default HelpPage;