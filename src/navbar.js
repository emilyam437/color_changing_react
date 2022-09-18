import React from 'react';
import './App.css';

class NavBar extends React.Component {
  render() {
    const pages = ['home', 'contact', 'countries', 'cities', 'colors'];
    const navLinks = pages.map(page => {
      return (
        <li><a href={'/' + page}>
          {page}
        </a></li>
      )
    });

    return <ul>{navLinks}</ul>;
  }
}

export default NavBar;
