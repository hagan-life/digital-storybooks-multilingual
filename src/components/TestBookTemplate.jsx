import {Link} from 'react-router-dom'
import ImageLeft from './ImageLeft'
import Talkie from './Talkie'
import home from '../images/home.png'

function TestBookTemplate() {
  return(
    <div className="testbooktemplate">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img className="home" src={home} alt="Home icon" />
            </Link>
          </li>
        </ul>
      </nav>

      <ImageLeft 
        image="imagenamehere" 
        text="text goes here"
        say="words to speak go here.  Talkie to be included in ImageLeft."
      />

    </div>
  )
}
export default TestBookTemplate
