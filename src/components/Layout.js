import React from 'react'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component {

  render() {
    return (
    <div>
      <Header />
      <div className="main__content">
        <div className="layout-centered"></div>
        <div className="modules-container">
          {this.props.children}
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default Layout
