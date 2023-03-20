import {Link} from 'react-router-dom'
import home from '../images/home.png'

function Landing() {
  return(

    <div className="landing">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img className="home" src={home} alt="Home icon" />
              <h2 className="logo">Digital Storybooks</h2>
            </Link>
          </li>
          <Link to="/login">
            <li className="login-button">Login</li>
          </Link>
        </ul>
      </nav>

      <h1>Landing</h1>
      <p>Fun facts about the importance of reading stories...</p>

    </div>
  )
}
export default Landing
