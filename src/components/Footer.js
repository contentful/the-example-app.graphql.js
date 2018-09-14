import React from 'react'
import { Link } from '@reach/router'

const Footer = () => {
  return (

    <div className='main__footer'>
      <div className='layout-centered'>
        <footer className='footer'>
          <div className='footer__upper'>
            <nav className='footer__navigation main-navigation'>
              <ul>
                <li>
                  <Link to='/' className='active'>Home</Link>
                </li>
                <li>
                  <Link to='/courses'>Courses</Link>
                </li>
              </ul>
            </nav>
            <div className='footer__apps' />
          </div>
          <div className='footer__lower'>
            <div className='footer__logo'>
              <a href='https://www.contentful.com/' target='_blank' rel='noopener noreferrer'>
                <img className='footer__disclaimer-logo' alt='Contentful' src='/images/contentful-logo.svg' />
              </a>
            </div>
            <div className='footer__disclaimer'>
              <p className='footer__disclaimer-text'>
                Powered by Contentful. This website and the materials found on it are for demo purposes. You can use this to preview the content created on your Contentful account.&nbsp;
                <a href='https://github.com/contentful/the-example-app.nodejs' target='_blank' rel='noopener noreferrer'>View on GitHub</a>.&nbsp;
                <a href='/imprint'>Imprint</a>.&nbsp;
                <a href='https://www.contentful.com/contact/' target='_blank' rel='noopener noreferrer'>Contact us</a>.
              </p>
            </div>
            <div className='footer__social'>
              <p>
                <a href='https://www.facebook.com/contentful/' target='_blank' rel='noopener noreferrer'>
                  <svg>
                    <use xlinkHref='/icons/icons.svg#facebook' />
                  </svg>
                </a>
                <a href='https://twitter.com/contentful' target='_blank' rel='noopener noreferrer'>
                  <svg>
                    <use xlinkHref='/icons/icons.svg#twitter' />
                  </svg>
                </a>
                <a href='https://github.com/contentful' target='_blank' rel='noopener noreferrer'>
                  <svg>
                    <use xlinkHref='/icons/icons.svg#github' />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
