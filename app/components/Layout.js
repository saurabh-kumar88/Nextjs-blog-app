import React from 'react';
import WebsiteName from './WebsiteName';
import NavBar from './NavBar';
import Info from './Info';
import Footer from './Footer';
import Head from 'next/head';
import PaginationBasic from './pagination';

const Layout = props => {
  
  return(
      <div>
        <WebsiteName />
        <div className='row'>
            <div className='leftcolumn'></div>
          </div>  
    </div>
    )  
  }
  
  export default Layout;