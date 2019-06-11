import React from 'react';
import { useEffect, useRef } from 'react';
import CountdownReceiver from './CountdownReceiver';
import { start, setSrcObjectRemote } from '../services/CallService'

function CallPaneReceiver(props) {

  const remoteVideo = useRef(null);

  useEffect(() => {
    start(false, () => setSrcObjectRemote(remoteVideo.current))
    console.log("RECEIVER")
  }, [])

  if (props.value.incomingTimeData.callLength) {
    return (
      <>
        {/* LOCAL VIDEO */}
        {/* <video autoPlay muted style={{ width: '100%', height: '200px' }} ref={localVideo => setSrcObject(localVideo)} /> */}
        <video autoPlay style={{ width: '100%' }} ref={remoteVideo} />
        {/* REMOTE VIDEO */}
        <CountdownReceiver timeData={{ callLength: props.value.incomingTimeData.callLength }} callExpired={props.value.callHasExpired} />
      </>
    );

  } else {
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default CallPaneReceiver;
