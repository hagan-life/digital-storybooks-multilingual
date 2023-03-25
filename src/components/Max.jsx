import {Link} from 'react-router-dom'
import Talkie from './Talkie'
import home from '../images/home.png'

function Max() {
  return(
    <div className="max">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img className="home" src={home} alt="Home icon" />
            </Link>
          </li>
        </ul>
      </nav>

      <div>Hello!</div>
      <div>Welcome to Digital Storybooks.</div>
      <div id="say">Hello William! Welcome to Digital Storybooks.</div>
      <Talkie />

    </div>
  )
}
export default Max
