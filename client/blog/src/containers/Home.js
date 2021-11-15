import { BrowserRouter, Link } from 'react-router-dom'
function Home() {
    return <>
    <div>Welcome to Home Page</div>
    <BrowserRouter>
    <Link to='/signin'>SignIN</Link>
      <br /><br /><br />
      <Link to='signup'>SignUp</Link>
    
    </BrowserRouter>

    </>
}
export default Home;