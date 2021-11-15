import React from 'react'
import AuthApi from '../utils/AuthApi'
function Dashboard() {
    const authApi = React.useContext(AuthApi)
    let logOutThisUser = () => { 
        authApi.setAuth(false)
    }
    return <>
        <div>
            Hello This is Dashboard Page
    </div>
        <button onClick={logOutThisUser}>Logout</button>
    </>
}

export default Dashboard;