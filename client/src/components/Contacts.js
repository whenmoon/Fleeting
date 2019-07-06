import React from 'react';
import './Contacts.css';
import { useContext } from 'react'
import { RenderContext } from '../containers/Home';
import FadeIn from 'react-fade-in';
import { Icon } from 'antd';
import maleAvatar from '../assets/img_avatar.png'
import femaleAvatar from '../assets/img_avatar2.png'

function Contacts() {

  const { selectContactToCall } = useContext(RenderContext)

  const handleOnClick = event => {
    event.preventDefault();
    selectContactToCall('contact')
  }

  const userData = [
    {
      contact: 'Kieran',
      avatar: maleAvatar,
      lastCallLength: 'Last call - 00:20'
    },
    {
      contact: 'Yvonne',
      avatar: femaleAvatar,
      lastCallLength: 'Last call - 05:00'
    },
    {
      contact: 'Rob',
      avatar: maleAvatar,
      lastCallLength: 'Last call - 20:00'
    },
    {
      contact: 'Emma',
      avatar: femaleAvatar,
      lastCallLength: 'Last call - 00:12'
    },
    {
      contact: 'Ben',
      avatar: maleAvatar,
      lastCallLength: 'Last call - 00:30'
    },
    {
      contact: 'Mom',
      avatar: femaleAvatar,
      lastCallLength: 'Last call - 10:00'
    },
    {
      contact: 'Sarah',
      avatar: femaleAvatar,
      lastCallLength: 'Last call - 02:30'
    },
  ]

  return (
    <FadeIn>
      <div>
        {userData.map(contact =>
          <div>
            <div className="DB">
              <div className="line">
                <img src={contact.avatar} alt="Avatar" style={{ width: 50, height: 50, borderRadius: 50 }} />
              </div>
              <span className="name">{contact.contact}</span >
              <span className="calldata">{contact.lastCallLength}</span>
              <Icon onClick={handleOnClick} type="phone" className="phone" style={{ fontSize: '22px', color: 'rgba(87, 141, 241)' }} />
              <Icon type="star" className="star" style={{ fontSize: '22px', color: 'rgba(87, 141, 241)' }} />
            </div>
            <div>
            </div>
            <svg height="5" width="420" className="line2">
              <g fill="none">
                <path stroke="#c3ccdb" d="M1 2 l350 0" />
              </g>
            </svg>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export default Contacts;
