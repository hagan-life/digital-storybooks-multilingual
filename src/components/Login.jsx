import {Link} from 'react-router-dom'
import home from '../images/home_w.png'
import envelope from '../images/envelope.png'
import lock from '../images/lock.png'
import qr from '../images/qr.png'

function Login() {
  return(
    <div className="login-page">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img className="home" src={home} alt="Home icon" />
              <h2 className="logo">Digital Storybooks</h2>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="login-wrapper">
        <div className="company-name">
          <h2>Digital</h2>
          <h3>Storybooks</h3>
        </div>
        <div className="login-form">
          <form action="#">

            <h2>Welcome back!</h2>
            <p>Enter details to view your library.</p>

            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="email@address.com" required/>
              <img className="icon envelope" src={envelope} alt="Envelope icon" />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="••••••••" required/>
              <img className="icon lock" src={lock} alt="Lock icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            {/*Prototype, Login button passes to Library without auth */}
            <Link to="/library">
              <button className="login-button">Login</button>
            </Link>
            <Link to="/qr">
              <button className="login-qr">
                Log in with QR
                <img className="icon qr" src={qr} alt="QR icon" />
              </button>
              
            </Link>
            <div className="login-register">
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  )
}
export default Login
