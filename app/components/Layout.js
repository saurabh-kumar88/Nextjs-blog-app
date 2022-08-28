import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Info from './Info';
import Footer from './Footer';
import Head from 'next/head';
import PaginationBasic from './pagination';

const Layout = props => {
  
  return(
      <div>
      <Head>
          <title>WHATABYTE</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="utf-8"/>
      </Head>
      <div className="row">
        <Header />
        <NavBar />
          {props.children}
        {/* <Info /> */}
        <PaginationBasic />
        <Footer />
      </div>  
    </div>
    )  
  }
  
  export default Layout;