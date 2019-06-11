import React from 'react';
import './NavBar.less';
import { Icon } from 'antd';

function NavBar() {
  return (
    <div className="Nav">
      <div className="title">
      Fleeting
      </div>
      <Icon type="search" />
    </div>
  );
}

export default NavBar;
