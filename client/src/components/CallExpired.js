import React from 'react';
import { Button } from 'antd';
import { useState } from 'react';
import Home from '../containers/Home'

function CallExpired() {

  const [home, setHome] = useState(false)

  if (home) {
    return (
      <div>
        <Home />
      </div>
    )
  } else {
    return (
      <div>
        Call Expired!
      <Button onClick={() => setHome(true)} size="large">Home</Button>
      <Button size="large">Share</Button>
      </div>
    )
  }
}


export default CallExpired;