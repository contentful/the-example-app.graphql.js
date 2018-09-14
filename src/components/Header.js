import React from 'react'
import { Link } from '@reach/router'
import NavLink from './NavLink'

const Header = () => {
  return (
    <div className='main__header'>
      <header className='header'>
        <div className='header__upper-wrapper'>
          <div className='header__upper layout-centered'>
            <div className='header__upper-title'>
              <Link className='header__upper-link' id='about-this-modal-trigger' to='/'>
                <svg className='header__upper-icon'>
                  <use xlinkHref='icons/icons.svg#info' />
                </svg>
                <span>Help</span>
              </Link>
            </div>
            <div className='header__upper-copy'>
              <a className='header__upper-link' href='https://github.com/contentful/the-example-app.nodejs' target='_blank' rel='noopener noreferrer'>
                <svg className='header__upper-icon'>
                  <use xlinkHref='icons/icons.svg#github' />
                </svg>View on GitHub
              </a>
            </div>
            <div className='header__controls'>
              <div className='header__controls_group'>
                <form action='' method='get'>
                  <div className='header__controls_label'>API: GraphQL Content Delivery API</div>
                  <div className='header__controls_dropdown'>
                    <div className='header__controls_help_text'>View the published or draft content by simply switching between the Deliver and Preview APIs.</div>
                    <button className='header__controls_button header__controls_button--active' type='submit' name='api' value='cda'>Content Delivery API:<br />
                      <span className='header__controls_button_help'>This API fetches published content from the Content Delivery API</span>
                    </button>
                  </div>
                  <input type='hidden' name='locale' value='en-US' />
                </form>
              </div>
              <div className='header__controls_group'>
                <form action='' method='get'>
                  <input type='hidden' name='api' value='cda' />
                  <div className='header__controls_label'>Locale: U.S. English</div>
                  <div className='header__controls_dropdown'>
                    <div className='header__controls_help_text'>Working with multiple languages? You can query the Content Delivery API for a specific locale.</div>
                    <button className='header__controls_button header__controls_button--active' type='submit' name='locale' value='en-US'>English (United States) (en-US)</button>
                    <button className='header__controls_button' type='submit' name='locale' value='de-DE'>German (Germany) (de-DE)</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='header__lower-wrapper'>
          <div className='header__lower layout-centered'>
            <div className='header__logo'>
              <a className='header__logo-link' href='/'>
                <img src='/images/the-example-app-logo-nodejs.svg' alt='Contentful Example App' />
              </a>
            </div>
            <nav className='header__navigation main-navigation'>
              <ul>
                <li>
                  <NavLink to='/' >Home</NavLink>
                </li>
                <li>
                  <NavLink to='/courses'>Courses</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
