import React from 'react';
import './NavBar.less';
import { Input } from 'antd';

function NavBar() {

  const Search = Input.Search;

  return (
    <div className="Nav">
      <div className="title">
      </div>
      <div className="search">
        <Search placeholder="search contacts" enterButton />
      </div>
    </div>
  );
}

export default NavBar;
