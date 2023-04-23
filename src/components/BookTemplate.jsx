import {useState} from 'react'
import {Link, Navigate} from 'react-router-dom'

import ImageLeft from './ImageLeft'
import ImageRight from './ImageRight'
import ImageFull from './ImageFull'
import Language from './Language'
/*import Speak from './Speak'*/

import home from '../images/home_color_128.png'
import languageIcon from '../images/language_color_128.png'
import image1 from '../images/testbooktemplate/placeholder_image_left.png'
import image2 from '../images/testbooktemplate/placeholder_image_right.png'
import image3 from '../images/testbooktemplate/placeholder_full_test.png'
import pointLeft from '../images/chevron_left_solid_128.png'
import pointRight from '../images/chevron_right_solid_128.png'
/*import talkie from '../images/smilecreature.png';*/

import english_11_adam_1 from '../audio/english_11_adam_1.mp3'
import english_11_adam_2 from '../audio/english_11_adam_2.mp3'
import english_11_adam_3 from '../audio/english_11_adam_3.mp3'
import english_11_adam_4 from '../audio/english_11_adam_4.mp3'
import english_11_adam_5 from '../audio/english_11_adam_5.mp3'
import english_11_adam_6 from '../audio/english_11_adam_6.mp3'
import english_11_adam_7 from '../audio/english_11_adam_7.mp3'
import english_11_adam_8 from '../audio/english_11_adam_8.mp3'
import english_11_adam_9 from '../audio/english_11_adam_9.mp3'
import english_11_adam_10 from '../audio/english_11_adam_10.mp3'
import english_11_adam_11 from '../audio/english_11_adam_11.mp3'
import english_11_adam_12 from '../audio/english_11_adam_12.mp3'
import english_11_adam_13 from '../audio/english_11_adam_13.mp3'

import spanish_polly_lupe_101 from '../audio/spanish_polly_lupe_101.mp3'
import spanish_polly_lupe_102 from '../audio/spanish_polly_lupe_102.mp3'
import spanish_polly_lupe_103 from '../audio/spanish_polly_lupe_103.mp3'
import spanish_polly_lupe_104 from '../audio/spanish_polly_lupe_104.mp3'
import spanish_polly_lupe_105 from '../audio/spanish_polly_lupe_105.mp3'
import spanish_polly_lupe_106 from '../audio/spanish_polly_lupe_106.mp3'
import spanish_polly_lupe_107 from '../audio/spanish_polly_lupe_107.mp3'
import spanish_polly_lupe_108 from '../audio/spanish_polly_lupe_108.mp3'
import spanish_polly_lupe_109 from '../audio/spanish_polly_lupe_109.mp3'
import spanish_polly_lupe_110 from '../audio/spanish_polly_lupe_110.mp3'
import spanish_polly_lupe_111 from '../audio/spanish_polly_lupe_111.mp3'
import spanish_polly_lupe_112 from '../audio/spanish_polly_lupe_112.mp3'
import spanish_polly_lupe_113 from '../audio/spanish_polly_lupe_113.mp3'

import english_polly_1 from '../audio/english_polly_1.mp3'
import english_polly_2 from '../audio/english_polly_2.mp3'
import english_polly_3 from '../audio/english_polly_3.mp3'
import english_polly_4 from '../audio/english_polly_4.mp3'
import english_polly_5 from '../audio/english_polly_5.mp3'
import english_polly_6 from '../audio/english_polly_6.mp3'



function BookTemplate() {
  const [language, setLanguage] = useState('en-US')
  const [changeLanguage, setChangeLanguage] = useState(false)
  const [page, setPage] = useState(1)
  const nextPage = () => { setPage(page + 1) }
  const previousPage = () => { setPage(page - 1) }
  let pageElements = null
  /* say only needed below if moving page navigation to full page */
  /* let say = null */

  // Show language page or page elements
  if(changeLanguage){
    const translated = [{language: 'english', pageModifier: 0}, {language: 'spanish', pageModifier: 100}]
    pageElements = 
      <Language 
        languages={translated} 
        currentPage={page} 
        passSetPage={setPage} 
        passSetChangeLanguage={setChangeLanguage}
        passSetLanguage={setLanguage}
      />
  }

  const pages = 
  {
    "1":
      {
        "template":"ImageLeft",
        "image":"image3",
        "text":"Once upon a time, there was a little bird named Max.",
        "spoken":"english_11_adam_1"
      },
    "2":
      {
        "template":"ImageFull",
        "image":"image3",
        "text":"Max loved to fly high in the sky and explore the world around him.",
        "spoken":"english_11_adam_2"
      }
  }

  pageElements = "Dave"


    /*
    switch(page){
      case 0:
        pageElements = <Navigate to="/library" />
        break
      case 100: 
        pageElements = <Navigate to="/library" />
        break
      case 200: 
        pageElements = <Navigate to="/library" />
        break
      case 1:
        pageElements = 
        <ImageLeft image={image3} 
                  text='Once upon a time, there was a little bird named Max.' 
                  say='Once upon a time, there was a little bird named Max.'
                  spoken={english_11_adam_1}
        />
        break
      case 101:
        pageElements = 
        <ImageLeft image={image3} 
                  text='Había una vez un pajarito llamado Max.' 
                  say='Había una vez un pajarito llamado Max.'
                  spoken={spanish_polly_lupe_101}
        />
        break
      case 201:
        pageElements = 
        <ImageLeft  image={image3} 
                    text='Once upon a time, there was a little bird named Max.' 
                    say='Once upon a time, there was a little bird named Max.'
                    spoken={english_polly_1}
        />
        break
      case 2:
        pageElements = 
        <ImageFull image={image3} 
                    text='Max loved to fly high in the sky and explore the world around him.' 
                    say='Max loved to fly high in the sky and explore the world around him.'
                    spoken={english_11_adam_2}
        />
        break
      case 102:
        pageElements = 
        <ImageFull image={image3} 
                    text='A Max le encantaba volar alto en el cielo y explorar el mundo que lo rodeaba.' 
                    say='A Max le encantaba volar alto en el cielo y explorar el mundo que lo rodeaba.'
                    spoken={spanish_polly_lupe_102}
        />
        break
      case 202:
        pageElements = 
        <ImageFull  image={image3} 
                    text='Max loved to fly high in the sky and explore the world around him.' 
                    say='Max loved to fly high in the sky and explore the world around him.'
                    spoken={english_polly_2}
        />
        break
      case 3:
        pageElements = 
        <ImageLeft image={image3} 
                    text='One day, Max decided to fly to a nearby tree to rest his tired wings.' 
                    say='One day, Max decided to fly to a nearby tree to rest his tired wings.'
                    spoken={english_11_adam_3}
        />
        break
      case 103:
        pageElements = 
        <ImageLeft image={image3} 
                    text='Un día, Max decidió volar hacia un árbol cercano para descansar sus cansadas alas.' 
                    say='Un día, Max decidió volar hacia un árbol cercano para descansar sus cansadas alas.'
                    spoken={spanish_polly_lupe_103}
        />
        break
      case 203:
        pageElements = 
        <ImageLeft  image={image3} 
                    text='One day, Max decided to fly to a nearby tree to rest his tired wings.' 
                    say='One day, Max decided to fly to a nearby tree to rest his tired wings.'
                    spoken={english_polly_3}
        />
        break
      case 4:
        pageElements = 
        <ImageLeft image={image3} 
                    text='As he landed on a branch, he saw a little squirrel named Sammy.' 
                    say='As he landed on a branch, he saw a little squirrel named Sammy.'
                    spoken={english_11_adam_4}
        />
        break
      case 104:
        pageElements = 
        <ImageLeft image={image3} 
                    text='Cuando aterrizó en una rama, vio a una ardilla pequeña llamada Sammy.' 
                    say='Cuando aterrizó en una rama, vio a una ardilla pequeña llamada Sammy.'
                    spoken={spanish_polly_lupe_104}
        />
        break
      case 204:
        pageElements = 
        <ImageLeft  image={image3} 
                    text='As he landed on a branch, he saw a little squirrel named Sammy.' 
                    say='As he landed on a branch, he saw a little squirrel named Sammy.'
                    spoken={english_polly_4}
        />
        break
      case 5:
        pageElements = 
        <ImageRight image={image3} 
                    text='Sammy was looking for his acorns that he had hidden around the tree.' 
                    say='Sammy was looking for his acorns that he had hidden around the tree.'
                    spoken={english_11_adam_5}
        />
        break
      case 105:
        pageElements = 
        <ImageRight image={image3} 
                    text='Sammy estaba buscando sus bellotas que había escondido alrededor del árbol.' 
                    say='Sammy estaba buscando sus bellotas que había escondido alrededor del árbol.'
                    spoken={spanish_polly_lupe_105}
        />
        break
      case 205:
        pageElements = 
        <ImageRight  image={image3} 
                    text='Sammy was looking for his acorns that he had hidden around the tree.' 
                    say='Sammy was looking for his acorns that he had hidden around the tree.'
                    spoken={english_polly_5}
        />
        break
      case 6:
        pageElements = 
        <ImageLeft image={image3} 
                    text='"Hi Sammy," Max chirped. "Do you need help finding your acorns?"' 
                    say='"Hi Sammy," Max chirped. "Do you need help finding your acorns?"'
                    spoken={english_11_adam_6}
        />
        break
      case 106:
        pageElements = 
        <ImageLeft image={image3} 
                    text='"Hola Sammy," trinó Max. "¿Necesitas ayuda para encontrar tus bellotas?"' 
                    say='"Hola Sammy," trinó Max. "¿Necesitas ayuda para encontrar tus bellotas?"'
                    spoken={spanish_polly_lupe_106}
        />
        break
      case 206:
          pageElements = 
          <ImageLeft  image={image3} 
                      text='"Hi Sammy," Max chirped. "Do you need help finding your acorns?"' 
                      say='"Hi Sammy," Max chirped. "Do you need help finding your acorns?"'
                      spoken={english_polly_6}
          />
          break
      */
      

  /* pull out into component when testing done */
  const pageNavigation = () => {
    if(!changeLanguage){
      return(
        <>
        <div onClick={nextPage} className="fixed-next">
          <img className="point-right" src={pointRight} alt="Pointing Right icon" />
        </div>
        <div onClick={previousPage} className="fixed-previous">
          <img className="point-left" src={pointLeft} alt="Pointing Left icon" />
        </div>
        </>
      )
    }
  }

  return(
    <div className="testbooktemplate">

      {pageElements}
      
      <Link to="/">
        <div className='fixed-home'>
          <img className="home" src={home} alt="Home icon" />
        </div>
      </Link>
      <div className='fixed-language'>
        {changeLanguage ?
          (<button 
            className="cancel-language" 
            onClick={() => setChangeLanguage(false)}>
            Cancel
          </button>) :
          (<img 
            className="language-icon" 
            src={languageIcon} 
            alt="Language icon" 
            onClick={() => setChangeLanguage(true)}
          />)
        }
      </div>
      
      {/*<Speak audio={english1} />*/}
      
      {pageNavigation()}

    </div>
  )
}
export default BookTemplate
