import React, { useRef, useState } from 'react';
import Countdown from './Countdown';
import { makeOutGoing } from '../services/WebSocketService'
import { Button } from 'antd';
import { start, setSrcObjectRemote } from '../services/CallService'

function CallPaneCaller(props) {

  const [view, setView] = useState(false);

  console.log("SENDER")

  const remoteVideo = useRef(null);

  const handleOnClick = () => {
    start(true, () => setSrcObjectRemote(remoteVideo.current))
    makeOutGoing(props)
    setView(true)
  }

  if (!view) {
    return (
      <>
        <div className="ready">
          <div>
            Ready?!
        {/* LOCAL VIDEO */}
            {/* <video autoPlay muted style={{ width: '40%' }} ref={localVideo => setSrcObject(localVideo)} /> */}
            <Button onClick={handleOnClick} size="large">Start Call</Button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="video">
          {/* REMOTE VIDEO */}
          <video autoPlay style={{ width: '100%' }} ref={remoteVideo} />
          <Countdown timeData={props} />
        </div>
      </>
    )
  }
}



export default CallPaneCaller;

