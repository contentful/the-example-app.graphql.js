import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Breadcrumb from './Breadcrumb'

class Layout extends React.Component {

  render() {
    return (
    <React.Fragment>
      <Header />
      <div className="main__content">
        <Breadcrumb />
        {this.props.children}
      </div>
      <Footer />
    </React.Fragment>
    )
  }
}

export default Layout
