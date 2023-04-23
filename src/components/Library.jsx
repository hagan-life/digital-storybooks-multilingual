import {Link} from 'react-router-dom'
import home from '../images/home.png'
import cover_max from '../images/max/cover_max.png'
import cover_test from '../images/testbooktemplate/cover_test.png'
import cover_template from '../images/booktemplate/cover.jpg'

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
            <img className="cover" src={cover_max} alt="Max book cover placeholder" />
            <div className="book">
            </div>
            
          </Link>

          <Link to="/testbooktemplate">
            <img className="cover" src={cover_test} alt="Test book cover placeholder" />
            <div className="book">  
            </div>
          </Link>

          <Link to="/booktemplate">
            <img className="cover" src={cover_template} alt="Book cover placeholder" />
            <div className="book">  
            </div>
          </Link>

          <Link to="/library">
            <img className="cover" src="" alt="Placeholder" />
            <div className="book">
              book3<br />
              placeholder<br />
              non-interactive<br />
             </div>
          </Link>

        </div>

      </div>
    </div>
    
  )
}
export default Library
