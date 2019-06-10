import React from 'react';
// import './dbService.css';
import { useContext } from 'react'
import { RenderContext } from '../containers/Home';
import FadeIn from 'react-fade-in';

function DB() {

  const { selectContactToCall } = useContext(RenderContext)

  const handleOnClick = event => {
    event.preventDefault();
    selectContactToCall('contact')
  }

  return (
    <FadeIn>
      <div className="DB">
        <span onClick={handleOnClick}>Bob</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Bob</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Bob</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Bob</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Bob</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Bob</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Bob</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Bob</span>
        <br />
        <br />
        {/* <span onClick={handleOnClick}>Lisa</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Mike</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Dave</span>
        <br />
        <br /> */}
        {/* <span onClick={handleOnClick}>Yolanda</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Emma</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Mom</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Ben</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Steven</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Bob</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Lisa</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Mike</span>
        <br />
        <br /> */}
        {/* <span onClick={handleOnClick}>Dave</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Yolanda</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Emma</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Mom</span>
        <br />
        <br />
        <span onClick={handleOnClick}>Ben</span>
        <br />
        <br /> */}
        <span onClick={handleOnClick}>Steven</span>
      </div>
    </FadeIn>
  );
}

export default DB;
