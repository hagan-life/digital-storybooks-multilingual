import {Link} from 'react-router-dom'
import home from '../images/home_w.png'
import envelope from '../images/envelope.png'
import lock from '../images/lock.png'

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
        <div className="login-form">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <img className="icon envelope" src={envelope} alt="Envelope icon" />
              <input id="email" type="email" required/>
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-box">
              <img className="icon lock" src={lock} alt="Lock icon" />
              <input id="password" type="password" required/>
              <label htmlFor="password">Password</label>
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
              <button>Login</button>
            </Link>
            <div className="login-register">
              <p>
                Don't have an account? 
                <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
