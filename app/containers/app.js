import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { urlPrefix } from '../constants'
import { Grid, Row, Col } from 'react-bootstrap'
import { pushState } from 'redux-router'
import { connect } from 'react-redux'
import { logout } from '../action/creators'

class App extends React.Component {
  componentWillMount = () => {
    this.redirectLoggedOut(this.props)
  }
  componentWillReceiveProps (props) {
    this.redirectLoggedOut(props)
  }
  redirectLoggedOut ({ changeRoute, user }) {
    const loginPage = `${urlPrefix}/login`.toLowerCase()
    const onLoginPage = this.context.location.pathname.toLowerCase()
                          .startsWith(loginPage)
    if (!user.isSuccess && !onLoginPage) {
      changeRoute(loginPage)
    }
  }
  render () {
    const { logout, user } = this.props
    const { username = null
          , isSuccess = null
          } = user
    const sidebar = !isSuccess ? null :
      (<Col className="sidebarCol" xs={12} md={2}>
        <Sidebar loggedIn={isSuccess}
                 url={urlPrefix}/>
      </Col>)
    return (
      <section className="root">
        <section className="main">
          <Grid fluid>
            <Row className="cwc-header-row">
              <Col className="headerCol" xs={12} md={12}>
                <Header url={urlPrefix} loggedIn={isSuccess}
                        logout={logout} username={username}/>
              </Col>
            </Row>

            <Row fluid className="mainRow">
              { sidebar }
              <div className="cwc-centered">
                <Col className="mainCol"
                    xs={12} md={sidebar ? 9 : 8}
                    mdOffset={sidebar ? 0 : 2}>
                  <div className="cwc-centered" style={{maxWidth: 760}}>
                    { this.props.children }
                  </div>
                </Col>
              </div>
            </Row>
          </Grid>
        </section>
        <Footer />
      </section>
    )
  }
}

App.contextTypes = { location: React.PropTypes.object.isRequired }
let mapStateToProps = state => (
  { user: state.user
  }
)
// Which action creators does it want to receive by props?
let mapDispatchToProps = dispatch => {
  return { changeRoute: route =>
            dispatch(pushState(null, route))
         , logout: () => dispatch(logout())
         }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
