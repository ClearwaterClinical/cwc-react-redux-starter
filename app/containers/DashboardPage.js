import React from 'react'
import { connect } from 'react-redux'
import { t } from '../i18n'
import { Panel } from 'react-bootstrap'

class DashboardPage extends React.Component {

  componentDidMount () {
    document.title = `${t('navigation.dashboard')} | ${t('_brand-styled')}`
  }

  render () {
    const { user } = this.props
    return (
      <Panel header={<h3>{t('title.welcome')} {user.username}</h3>}>
        {t('welcome-message')}
      </Panel>
    )
  }
}

function mapStateToProps (state) {
  return { user: state.user
         }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
