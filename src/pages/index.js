import React from 'react';
import {Link} from 'gatsby';
import "../components/index.js"


const index = () => {
  return (
    <header className='hero'>
      <div className='heroContainer'>
        <div className='heroInfo'>
        <h1>Kristopher Covington</h1>
        <p>Cybersecurity and Information Design</p>
        <Link to="/about">See how we can help. </Link>
        </div>
      </div>
    </header>
  );
}

export default index;
