import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboad';
import AuthApi from '../utils/AuthApi'
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact>
                </Route>

                <RouteRegistration path='/signin' component={SignIn}>
                </RouteRegistration>

                <RouteRegistration path='/signup' component={SignUp}>
                </RouteRegistration>

                <RouteProtected path='/dashboard' component={Dashboard}>
                </RouteProtected>
            </Switch>
        </BrowserRouter>

    )
}

const RouteRegistration = ({ component: Component, ...rest }) => {
    const authApi = React.useContext(AuthApi);
    return (
        <Route{...rest} render={props => !authApi.auth ? (<Component {...props} />) : <Redirect to='/dashboard' />} />
    )
}


const RouteProtected = ({ component: Component, ...rest }) => {
    const authApi = React.useContext(AuthApi);

    return (
        <Route{...rest} render={props => authApi.auth ? (<Component {...props} />) : <Redirect to='/signin' />} />
    )
}

export default Routes;