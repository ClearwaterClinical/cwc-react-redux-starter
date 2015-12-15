import React from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'
import { Panel } from 'react-bootstrap'
import { authenticate } from '../action/creators'
import { urlPrefix } from '../constants'
import LoginForm from '../components/LoginForm'
import ErrorMessage from '../components/ErrorMessage'
import { t } from '../i18n'

class LoginPage extends React.Component {
  componentWillMount () {
    document.title = `${t('navigation.login')} | ${t('_brand-styled')}`
    this.alreadyLoggedIn(this.props)
  }
  componentWillReceiveProps (props) {
    this.alreadyLoggedIn(props)
  }
  alreadyLoggedIn (props) {
    if (props.loggedIn) {
      props.changeRoute(`${urlPrefix}/dashboard`)
    }
  }
  render () {
    return (
      <Panel style={{ textAlign: 'center' }}>
        <h1>{t('login-page-welcome')}</h1>
        <ErrorMessage style={{width: 400}} msg={ this.props.error }/>
        <LoginForm
          onSubmit={this.props.authenticate}
          isLoading={this.props.loggingIn}/>
      </Panel>
    )
  }
}

function mapStateToProps (state) {
  return { loggingIn: state.user.isLoading
         , error: state.user.error
         , loggedIn: state.user.isSuccess
         }
}

function mapDispatchToProps (dispatch) {
  return { authenticate: (username, password) =>
            dispatch(authenticate(username, password))
         , changeRoute: route =>
            dispatch(pushState(null, route))
         }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
