import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import PropTypes from 'prop-types';
import Products from './routes/Products';
import Detail from './routes/Detail';
import App from './routes/App';
// import sideBar from './routes/sideBar';
import Index from './routes/Index';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  );
}

export default RouterConfig;
// const registerModel = (app, model) => {
//   if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
//     app.model(model)
//   }
// }
// const Routers = function ({ history }) {
//   const routes = [
//     {
//       path: '/',
//       component: Index,
//       getIndexRoute(nextState, cb) {
//         require.ensure([], require => {
//           cb(null, { component: require('./routes/Products') })
//         }, 'Products')
//       },
//       childRoutes: [
//         {
//           path: 'Products',
//           getComponent(nextState, cb) {
//             require.ensure([], require => {
//               cb(null, require('./routes/Products'))
//             }, 'Products')
//           },
//         },
//         {
//           path: 'Detail',
//           getComponent(nextState, cb) {
//             require.ensure([], require => {
//               cb(null, require('./routes/Detail'))
//             }, 'Detail')
//           },
//         }
//       ]
//     }
//   ]
//   return <Router history={history} routes={routes} />
// }
// Routers.PropTypes = {
//   history: PropTypes.object
// }

// export default Routers;