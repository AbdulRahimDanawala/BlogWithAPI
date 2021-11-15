import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './containers/Routes'
import AuthApi from './utils/AuthApi'
function App() {
  let [auth, setAuth] = useState(false)
  return <>
    <AuthApi.Provider value={{auth, setAuth}}>
      <Router>
        <Routes />
      </Router>
    </AuthApi.Provider>
  </>
}

export default App;
