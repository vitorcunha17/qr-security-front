import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './app/components/PrivateRoute';


/* auth routes */
import Login from './app/views/login';
import ExternalVerify from './app/views/externalverify';

/* routes admin access */
import Home from './app/views/home';
import Verify from './app/views/verify';
import Editor from './app/views/editor';
import Documents from './app/views/documents';
import Reports from './app/views/reports';

export default function Routes() {
     /*const permission = localStorage.getItem('@permission');
      
      function VerifyFinanceOrSuper() {
          if (permission === 'super' || permission === 'finance') {
            return true;
          }
          return false;
        }

      function VerifySuperOrSupportOrDeveloper() {
        if (permission === 'super' || permission === 'support' || permission === 'developer') {
          return true;
        }
        return false;
      }*/

     return (
          <Switch>
               <Route exact path="/" component={Login} />
               <Route exact path="/login-adm" admin component={Login} />
               <Route exact path="/externalverify" component={ExternalVerify} />
               <PrivateRoute exact path="/home" component={Home} />
               <PrivateRoute exact path="/verify" component={Verify} />
               <PrivateRoute exact path="/editor" component={Editor} />
               <PrivateRoute exact path="/documents" component={Documents} />
               <PrivateRoute exact path="/reports" component={Reports} />
          </Switch>
     )
}
