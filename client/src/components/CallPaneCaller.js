import React, { useRef, useState } from 'react';
import Countdown from './Countdown';
import { makeOutGoing } from '../services/WebSocketService'
import { Button } from 'antd';
import { start, setSrcObject, setSrcObjectRemote } from '../services/CallService'

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
          {/* <video autoPlay muted style={{ width: '40%' }} ref={localVideo => setSrcObject(localVideo)} /> */}
          
          <Button onClick={handleOnClick} size="large">Start Call</Button>
        </>
      );
    } else {
      return (
        <>
        <video autoPlay style={{ width: '100%' }} ref={remoteVideo} />
        <Countdown timeData={props} />
        </>
      )
    }
  }

//   return (
//     <>
//       <div>
//       Ready?!
//       </div>
//       {/* <video autoPlay muted style={{ width: '100%', height: '200px' }} ref={localVideo => setSrcObject(localVideo)} /> */}
//       <div className="button">
//       <Button onClick={handleOnClick} size="large">Start Call</Button>
//       </div>
//       <video autoPlay style={{ width: '100%' }} ref={remoteVideo} />
//       <Countdown timeData={props} />
//     </>
//   )
// }

export default CallPaneCaller;

