import React from 'react'
import { Input, Button } from 'react-bootstrap'
import { t } from '../i18n'

export default class NewPasswordForm extends React.Component {
  constructor () {
    super()
    this.state = { user: ''
                 , pass: ''
                 }
  }
  render () {
    let isLoading = this.props.isLoading
    return (
      <form className="cwc-login-form"
          onSubmit={!isLoading ? this.formSubmit : null}>
        <Input placeholder={t('username')}
               type="text"
               defaultValue={this.state.user}
               onChange={this.updateUser}/>
             <Input placeholder={t('password')}
               type="password"
               defaultValue={this.state.pass}
               onChange={this.updatePass}/>
        <Button
          bsStyle="success"
          className="cwc-login-button"
          disabled={isLoading}
          label={t('login')}
          type="submit">
            {!isLoading ? t('login') : t('logging-in')}
        </Button>
      </form>
    )
  }
  updateUser = e => {
    let user = e.target.value
    this.setState({ user })
  }
  updatePass = e => {
    let pass = e.target.value
    this.setState({ pass })
  }

  formSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.user, this.state.pass)
  }

  PropTypes = { onSubmit: React.PropTypes.func.isRequired
              , isLoading: React.PropTypes.bool.isRequired
              }
}
