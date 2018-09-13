import React from 'react'
import { Link } from '@reach/router'

const NavLink = props => (
  <Link
    {...props}
    getProps={({href, isCurrent, isPartiallyCurrent}) => {
      const current = (href === '/courses' || href === '/' ? isCurrent : isPartiallyCurrent)
      const className = (props.className) ? props.className : ''
      return {
        className: className + (current ? ' active' : '')
      };
    }}
  />
);

export default NavLink
