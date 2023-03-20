import {Link} from 'react-router-dom'
import home from '../images/home.png'
import max from '../images/max.png'

function Library() {
  return(
    <div className="library">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img className="home" src={home} alt="Home icon" />
              <h2 className="logo">Digital Storybooks</h2>
            </Link>
          </li>
          <li className="login-button">
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>
      
      <div className="wrapper">
        <div className="listing">
          <h3>Library</h3>
          <ul>
            <li>All</li>
            <li>Favorites</li>
          </ul>

          <h3>Stacks</h3>
          <ul>
            <li>Read To Me</li>
          </ul>
        </div>

        <div className="shelves">
          <Link to="/max">
            <div className="book">
              <img className="cover-max" src={max} alt="Max book cover placeholder" />
            </div>
          </Link>
          <div className="book">
            book2<br />
            placeholder<br />
            non-interactive
          </div>
        </div>

      </div>
    </div>
    
  )
}
export default Library
