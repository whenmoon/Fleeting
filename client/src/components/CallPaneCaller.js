// import React, { useRef } from 'react';
// import Countdown from './Countdown';
// import { makeOutGoing } from '../services/WebSocketService'
// import { Button } from 'antd';

// export const RenderContext = React.createContext(null);

// function CallPaneCaller(props) {

//   var localVideo;
//   var localStream;
//   var remoteVideo;
//   var peerConnection;
//   var uuid;
//   var serverConnection;

//   var peerConnectionConfig = {
//     'iceServers': [
//       { 'urls': 'stun:stun.stunprotocol.org:3478' },
//       { 'urls': 'stun:stun.l.google.com:19302' },
//     ]
//   };

//   uuid = createUUID();

//   localVideo = useRef();
//   remoteVideo = useRef();

//   serverConnection = new WebSocket('ws://localhost:8444');
//   serverConnection.onmessage = gotMessageFromServer;

//   var constraints = {
//     video: true,
//     audio: true,
//   };

//   if (navigator.mediaDevices.getUserMedia) {
//     navigator.mediaDevices.getUserMedia(constraints).then(getUserMediaSuccess).catch(errorHandler);
//   } else {
//     alert('Your browser does not support getUserMedia API');
//   }

//   function getUserMediaSuccess(stream) {
//     localStream = stream;
//     localVideo.current.srcObject = stream;
//   }

//   function start(isCaller) {
//     // CALL CONTACT VIA SOCKET IO
//     makeOutGoing(props)
//     peerConnection = new RTCPeerConnection(peerConnectionConfig);
//     peerConnection.onicecandidate = gotIceCandidate;
//     peerConnection.ontrack = gotRemoteStream;
//     peerConnection.addStream(localStream);
//     if (isCaller) {
//       peerConnection.createOffer().then(createdDescription).catch(errorHandler);
//     }
//   }

//   function gotMessageFromServer(message) {
//     if (!peerConnection) start(false);

//     var signal = JSON.parse(message.data);
//     console.log('got message', signal)

//     // Ignore messages from ourself
//     if (signal.uuid === uuid) return;

//     if (signal.sdp) {
//       peerConnection.setRemoteDescription(new RTCSessionDescription(signal.sdp)).then(function () {
//         // Only create answers in response to offers
//         if (signal.sdp.type === 'offer') {
//           peerConnection.createAnswer().then(createdDescription).catch(errorHandler);
//         }
//       }).catch(errorHandler);
//     } else if (signal.ice) {
//       peerConnection.addIceCandidate(new RTCIceCandidate(signal.ice)).catch(errorHandler);
//     }
//   }

//   function gotIceCandidate(event) {
//     if (event.candidate != null) {
//       console.log('sending')
//       serverConnection.send(JSON.stringify({ 'ice': event.candidate, 'uuid': uuid }));
//     }
//   }

//   function createdDescription(description) {
//     console.log('got description');
//     peerConnection.setLocalDescription(description).then(function () {
//       serverConnection.send(JSON.stringify({ 'sdp': peerConnection.localDescription, 'uuid': uuid }));
//       console.log(peerConnection.localDescription)
//     }).catch(errorHandler);
//   }

//   function gotRemoteStream(event) {
//     console.log('got remote stream');
//     remoteVideo.current.srcObject = event.streams[0];
//   }

//   function errorHandler(error) {
//     console.log(error);
//   }
//   // console.log('change')
//   // Taken from http://stackoverflow.com/a/105074/515584
//   // Strictly speaking, it's not a real UUID, but it gets the job done here
//   function createUUID() {
//     function s4() {
//       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//     }

//     return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
//   }

//   return (
//     <>
//       <video autoPlay muted style={{ width: '40%' }} ref={localVideo} />
//       <video autoPlay style={{ width: '40%' }} ref={remoteVideo} />
//       <Button onClick={() => start(true)} size="large">Start Call</Button>
//       <Countdown timeData={props}/>
//     </>
//   );
// }

// export default CallPaneCaller;

import React, { useRef, useState } from 'react';
import Countdown from './Countdown';
import { makeOutGoing } from '../services/WebSocketService'
import { Button } from 'antd';
import { start, setSrcObject, setSrcObjectRemote } from '../services/CallService'

function CallPaneCaller(props) {

  // const [view, setView] = useState(false);

  console.log("SENDER")

  const remoteVideo = useRef(null);

  const handleOnClick = () => {
    start(true, () => setSrcObjectRemote(remoteVideo.current))
    makeOutGoing(props)
    // setView(true)
  }

  //   if (!view) {
  //     return (
  //       <>
  //         <video autoPlay muted style={{ width: '40%' }} ref={localVideo => setSrcObject(localVideo)} />
  //         <Button onClick={handleOnClick} size="large">Start Call</Button>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //       <video autoPlay style={{ width: '40%' }} ref={remoteVideo} />
  //       <Countdown timeData={props} />
  //       </>
  //     )
  //   }
  // }

  return (
    <>
      <video autoPlay muted style={{ width: '100%', height: '200px' }} ref={localVideo => setSrcObject(localVideo)} />
      <Button onClick={handleOnClick} size="large">Start Call</Button>
      <video autoPlay style={{ width: '40%' }} ref={remoteVideo} />
      <Countdown timeData={props} />
    </>
  )
}

export default CallPaneCaller;

