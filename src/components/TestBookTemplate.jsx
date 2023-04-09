import {useState} from 'react'
import {Link} from 'react-router-dom'
import ImageLeft from './ImageLeft'
import ImageRight from './ImageRight'
/*import Talkie from './Talkie'*/
import home from '../images/home.png'
import languages from '../images/lang_light.png'
import image1 from '../images/testbooktemplate/placeholder_image_left.png'
import image2 from '../images/testbooktemplate/placeholder_image_right.png'


function TestBookTemplate() {
  const [page, setPage] = useState(1)
  const nextPage = () => { setPage(page + 1) }
  const previousPage = () => { setPage(page - 1) }
  let pageElements = null
  /* say only needed below if moving page navigation to full page */
  /* let say = null */

  switch(page){
    case 0:
      /* back to Library */
      pageElements = "Return to Library"
      break
    case 1:
      pageElements = 
      <ImageLeft image={image1} 
                 text='Once upon a time, there was a little bird named Max.' 
                 say='Once upon a time, there was a little bird named Max.'
                 nextPage={nextPage}
                 previousPage={previousPage}
      />
      /*say = 'Once upon a time, there was a little bird named Max.'*/
      break
    case 2:
      pageElements = 
      <ImageRight image={image2} 
                  text='Max loved to fly high in the sky and explore the world around him.' 
                  say='Max loved to fly high in the sky and explore the world around him.'
                  nextPage={nextPage}
                  previousPage={previousPage}
      />
      break
    case 3:
      pageElements = 
      <ImageLeft image={image1} 
                  text='One day, Max decided to fly to a nearby tree to rest his tired wings.' 
                  say='One day, Max decided to fly to a nearby tree to rest his tired wings.'
                  nextPage={nextPage}
                  previousPage={previousPage}
      />
      break
    case 100: 
      /* back to Library */
      pageElements = "Return to Library"
      break
      case 101: /* Spanish */
      pageElements = 
      <ImageLeft image={image1} 
                 text='Once upon a time, there was a little bird named Max.' 
                 say='Once upon a time, there was a little bird named Max.'
                 nextPage={nextPage}
                 previousPage={previousPage}
      />
      break
    case 102:
      pageElements = 
      <ImageRight image={image2} 
                  text='Max loved to fly high in the sky and explore the world around him.' 
                  say='Max loved to fly high in the sky and explore the world around him.'
                  nextPage={nextPage}
                  previousPage={previousPage}
      />
      break
    default:
      pageElements = "Return to Library"
  }

  return(
    <div className="testbooktemplate">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img className="home" src={home} alt="Home icon" />
            </Link>
          </li>
          <li>
            <img className="languages" src={languages} alt="Language icon" />
          </li>
        </ul>
      </nav>

      {pageElements}
      {/* adding footer below makes page navigation full width */}
      {/*
      <footer>
          <button className="left-quarter-circle" onClick={previousPage}>LLL</button>
          <Talkie />
          <button className="right-quarter-circle" onClick={nextPage}>RRR</button>
        </footer>
        <div id="say">{say}</div>
      */}

    </div>
  )
}
export default TestBookTemplate
