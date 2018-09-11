import React from 'react'
import Header from './Header'
import Footer from './Footer'

class Layout extends React.Component {

  render() {
    return (
    <div>
      <Header />
      <div className="main__content">
          {this.props.children}
      </div>
      <Footer />
    </div>
    )
  }
}

export default Layout
