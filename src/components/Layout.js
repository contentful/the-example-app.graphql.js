import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Location } from '@reach/router'
import Breadcrumb from './Breadcrumb'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className='main__content'>
        <Location>{({ location }) => (location.pathname !== '/') && <Breadcrumb location={location} />}</Location>
        {children}
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
