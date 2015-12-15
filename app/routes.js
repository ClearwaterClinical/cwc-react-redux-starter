import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import NotFoundPage from './containers/NotFoundPage'
import LoginPage from './containers/LoginPage'
import DashboardPage from './containers/DashboardPage'
import { urlPrefix } from './constants'

export default (
  <Route path={urlPrefix} component={ App }>
      <IndexRoute component={ LoginPage } />
      <Route path="login" component={ LoginPage }/>
      <Route path="dashboard" component={ DashboardPage }/>
      <Route path="*" component={ NotFoundPage }/>
  </Route>
)
