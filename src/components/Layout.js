import React from 'react'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component {
  render() {
    return (
    <React.Fragment>
      <Header />
      <div className="main__content">
        {this.props.children}
      </div>
      <Footer />
    </React.Fragment>
    )
  }
}

export default Layout
