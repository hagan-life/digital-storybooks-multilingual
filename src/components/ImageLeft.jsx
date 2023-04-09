import {Link} from 'react-router-dom'
import Talkie from './Talkie'
import home from '../images/home.png'

function ImageLeft() {
  return(
    <div className="image-left">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img className="home" src={home} alt="Home icon" />
            </Link>
          </li>
        </ul>
      </nav>

      <div className="background">
        <div>Left Image here</div>
      </div>
      <div className="story-text">
        <div>Story text goes here</div>
      </div>
      <div id="say">Story text goes here</div>
      

    </div>
  )
}
export default ImageLeft
