import React from 'react';
import './NavBar.less';
import { Icon } from 'antd';

function NavBar() {
  return (
    <div className="Nav">
      <div className="title">
      Fleeting
      <Icon type="search" />
      </div>
    </div>
  );
}

export default NavBar;
