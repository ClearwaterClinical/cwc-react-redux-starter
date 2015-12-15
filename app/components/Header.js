import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { t } from '../i18n'

export default class Header extends Component {
  render () {
    const { loggedIn, logout, url, username } = this.props
    const content = !loggedIn ? null :
     (
       <div>
       <div className="pull-right cwc-header-user">
       {`<${username.toLowerCase()}>`}
       &nbsp;&nbsp;&nbsp;
       <Link onClick={logout} to={`${url}/login`}>
         {t(`navigation.logout`)}
       </Link>
       </div>
       </div>
     )
    return (
      <header className="cwc-header">
        { content }
      </header>
    )
  }
}
Header.PropTypes = { loggedIn: PropTypes.boolean
                   , logout: PropTypes.func
                   , url: PropTypes.string
                   , username: PropTypes.string
                   }
