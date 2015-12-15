import React, { PropTypes } from 'react'
import { t } from '../i18n'
import { Link } from 'react-router'

class Sidebar extends React.Component {
  render () {
    const { loggedIn
          , url
          } = this.props
    return !loggedIn ? null :
      <ul className="cwc-sidebar-nav">
        <li>
          <Link activeClassName="current" to={`${url}/dashboard`}>
            {t(`navigation.dashboard`)}
          </Link>
        </li>
        <li>
          <Link activeClassName="current" to={`${url}/broken`}>
            {t(`navigation.broken`)}
          </Link>
        </li>
      </ul>
  }
}

Sidebar.PropTypes =
  { loggedIn: PropTypes.boolean
  , url: PropTypes.string.isRequired
  }

export default Sidebar
