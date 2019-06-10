import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import { CallerContext } from '../containers/Home';

function Countdown(props) {
// console.log(props)

// const { callHasExpired } = useContext(CallerContext) 

const timeSubString = props.timeData.callLength.substring(3)
const startingTime = Date.parse('1970-01-01T00:' + timeSubString + 'Z')
const interval = 1000;

const [time, setTime] = useState(startingTime)

useEffect(() => {
  console.log('hi')

    setInterval(() => {
      setTime(time => time - interval);
    }, interval);
  }, [])

  // if (!props.callee) {
  //   if (time === 0) callHasExpired(true)
  // }
  // console.log(time)

  if (time > 0) {
  return (
    <div>
      {new Date(time).toISOString().slice(11, -5)}
    </div>
  )
  } else {
    return (
      <div>
        Call Expired!!
      </div>
    )
  }
}

export default Countdown;