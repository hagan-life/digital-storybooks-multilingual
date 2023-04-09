import {Link} from 'react-router-dom'
import home from '../images/home_w.png'

function FourOFour(){
  return(
    <div className="error-404">
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
      <div className="error404">
        <div className="sad">&#9785;</div>
        <div>404</div>
        <p>Page not found</p>
        <p className="messed">Looks like we really messed up here.</p>

      </div>
    </div>
    
  )
}

export default FourOFour