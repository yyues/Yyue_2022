import React, { Suspense, lazy, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import router from './index'
import Loading from '../pages/Loading'
const Err = lazy(() => import('../pages/Error'))

export default function RootRouter() {
  return (
    <Fragment>
      <Suspense fallback={Loading}>
        <Router>
          <Switch>
            {router.map(r => (
              <Route exact={r.exact} path={r.path} key={r.key}>
                {r.component}
              </Route>
            ))}
            <Route component={Err} />
          </Switch>
        </Router>
      </Suspense>
    </Fragment>
  )
}
