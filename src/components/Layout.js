import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Location } from '@reach/router'
import Breadcrumb from './Breadcrumb'

class Layout extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <div className='main__content'>
          <Location>{({location}) => (location.pathname !== '/') && <Breadcrumb location={location} />}</Location>
          {this.props.children}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Layout
