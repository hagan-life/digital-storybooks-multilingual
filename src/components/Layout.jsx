import {Link, Outlet} from 'react-router-dom'
import home from '../images/home.png'

function Layout() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img className="home" src={home} alt="Home icon" />
              <h2 className="logo">Digital Storybooks</h2>
            </Link>
          </li>
          <li className="login-button">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
export default Layout