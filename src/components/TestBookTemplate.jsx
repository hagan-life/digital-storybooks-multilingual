import {useState} from 'react'
import {Link, Navigate} from 'react-router-dom'

import ImageLeft from './ImageLeft'
import ImageRight from './ImageRight'
import ImageFull from './ImageFull'
import Language from './Language'
/*import Speak from './Speak'*/

import home from '../images/home_color_128.png'
import languageIcon from '../images/language_color_128.png'
//import image1 from '../images/testbooktemplate/placeholder_image_left.png'
//import image2 from '../images/testbooktemplate/placeholder_image_right.png'
//import image3 from '../images/testbooktemplate/placeholder_full_test.png'
import image_page_1x512 from '../images/testbooktemplate/0001x512.jpg'
import image_page_1x1024 from '../images/testbooktemplate/0001x1024.jpg'
import image_page_2x2048 from '../images/testbooktemplate/0002x2048.jpg'
import image_page_3x512 from '../images/testbooktemplate/0003x512.jpg'
import image_page_3x1024 from '../images/testbooktemplate/0003x1024.jpg'
import image_page_4x512 from '../images/testbooktemplate/0004x512.jpg'
import image_page_4x1024 from '../images/testbooktemplate/0004x1024.jpg'
import image_page_5x512 from '../images/testbooktemplate/0005x512.jpg'
import image_page_5x1024 from '../images/testbooktemplate/0005x1024.jpg'
import image_page_6x512 from '../images/testbooktemplate/0006x512.jpg'
import image_page_6x1024 from '../images/testbooktemplate/0006x1024.jpg'
import image_page_7x512 from '../images/testbooktemplate/0007x512.jpg'
import image_page_7x1024 from '../images/testbooktemplate/0007x1024.jpg'
import image_page_8x2048 from '../images/testbooktemplate/0008x2048.jpg'
import image_page_9x512 from '../images/testbooktemplate/0009x512.jpg'
import image_page_9x1024 from '../images/testbooktemplate/0009x1024.jpg'
import image_page_10x512 from '../images/testbooktemplate/0010x512.jpg'
import image_page_10x1024 from '../images/testbooktemplate/0010x1024.jpg'
import image_page_11x512 from '../images/testbooktemplate/0011x512.jpg'
import image_page_11x1024 from '../images/testbooktemplate/0011x1024.jpg'
import image_page_12x2048 from '../images/testbooktemplate/0012x2048.jpg'
import image_page_13x512 from '../images/testbooktemplate/0013x512.jpg'
import image_page_13x1024 from '../images/testbooktemplate/0013x1024.jpg'
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



function TestBookTemplate() {
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

  }else{

    console.log('page:', page)
    switch(page){
      case 0:
        /* back to Library */
        pageElements = <Navigate to="/library" />
        break
      case 100: 
        /* back to Library */
        pageElements = <Navigate to="/library" />
        break
      case 200: 
        /* back to Library */
        pageElements = <Navigate to="/library" />
        break
      case 1:
        pageElements = 
        <ImageLeft image={image_page_1x1024} 
                  text='Once upon a time, there was a little bird named Max.' 
                  say='Once upon a time, there was a little bird named Max.'
                  spoken={english_11_adam_1}
        />
        /*say = 'Once upon a time, there was a little bird named Max.'*/
        break
      case 101: /* Spanish case 101*/
        pageElements = 
        <ImageLeft image={image_page_1x1024} 
                  text='Había una vez un pajarito llamado Max.' 
                  say='Había una vez un pajarito llamado Max.'
                  spoken={spanish_polly_lupe_101}
        />
        break
      case 201:
        pageElements = 
        <ImageLeft  image={image_page_1x1024} 
                    text='Once upon a time, there was a little bird named Max.' 
                    say='Once upon a time, there was a little bird named Max.'
                    spoken={english_polly_1}
        />
        break
      case 2:
        pageElements = 
        <ImageFull image={image_page_2x2048} 
                    text='Max loved to fly high in the sky and explore the world around him.' 
                    say='Max loved to fly high in the sky and explore the world around him.'
                    spoken={english_11_adam_2}
        />
        break
      case 102: /* Spanish case 102*/
        pageElements = 
        <ImageFull image={image_page_2x2048} 
                    text='A Max le encantaba volar alto en el cielo y explorar el mundo que lo rodeaba.' 
                    say='A Max le encantaba volar alto en el cielo y explorar el mundo que lo rodeaba.'
                    spoken={spanish_polly_lupe_102}
        />
        break
      case 202:
        pageElements = 
        <ImageFull  image={image_page_2x2048} 
                    text='Max loved to fly high in the sky and explore the world around him.' 
                    say='Max loved to fly high in the sky and explore the world around him.'
                    spoken={english_polly_2}
        />
        break
      case 3:
        pageElements = 
        <ImageLeft image={image_page_3x1024} 
                    text='One day, Max decided to fly to a nearby tree to rest his tired wings.' 
                    say='One day, Max decided to fly to a nearby tree to rest his tired wings.'
                    spoken={english_11_adam_3}
        />
        break
      case 103: /* Spanish case 103*/
        pageElements = 
        <ImageLeft image={image_page_3x1024} 
                    text='Un día, Max decidió volar hacia un árbol cercano para descansar sus cansadas alas.' 
                    say='Un día, Max decidió volar hacia un árbol cercano para descansar sus cansadas alas.'
                    spoken={spanish_polly_lupe_103}
        />
        break
      case 203:
        pageElements = 
        <ImageLeft  image={image_page_3x1024} 
                    text='One day, Max decided to fly to a nearby tree to rest his tired wings.' 
                    say='One day, Max decided to fly to a nearby tree to rest his tired wings.'
                    spoken={english_polly_3}
        />
        break
      case 4:
        pageElements = 
        <ImageLeft image={image_page_4x1024} 
                    text='As he landed on a branch, he saw a little squirrel named Sammy.' 
                    say='As he landed on a branch, he saw a little squirrel named Sammy.'
                    spoken={english_11_adam_4}
        />
        break
      case 104: /* Spanish case 104*/
        pageElements = 
        <ImageLeft image={image_page_4x1024} 
                    text='Cuando aterrizó en una rama, vio a una ardilla pequeña llamada Sammy.' 
                    say='Cuando aterrizó en una rama, vio a una ardilla pequeña llamada Sammy.'
                    spoken={spanish_polly_lupe_104}
        />
        break
      case 204:
        pageElements = 
        <ImageLeft  image={image_page_4x1024} 
                    text='As he landed on a branch, he saw a little squirrel named Sammy.' 
                    say='As he landed on a branch, he saw a little squirrel named Sammy.'
                    spoken={english_polly_4}
        />
        break
      case 5:
        pageElements = 
        <ImageRight image={image_page_5x1024} 
                    text='Sammy was looking for his acorns that he had hidden around the tree.' 
                    say='Sammy was looking for his acorns that he had hidden around the tree.'
                    spoken={english_11_adam_5}
        />
        break
      case 105: /* Spanish case 105*/
        pageElements = 
        <ImageRight image={image_page_5x1024} 
                    text='Sammy estaba buscando sus bellotas que había escondido alrededor del árbol.' 
                    say='Sammy estaba buscando sus bellotas que había escondido alrededor del árbol.'
                    spoken={spanish_polly_lupe_105}
        />
        break
      case 205:
        pageElements = 
        <ImageRight  image={image_page_5x1024} 
                    text='Sammy was looking for his acorns that he had hidden around the tree.' 
                    say='Sammy was looking for his acorns that he had hidden around the tree.'
                    spoken={english_polly_5}
        />
        break
      case 6:
        pageElements = 
        <ImageLeft image={image_page_6x1024} 
                    text='"Hi Sammy," Max chirped. "Do you need help finding your acorns?"' 
                    say='"Hi Sammy," Max chirped. "Do you need help finding your acorns?"'
                    spoken={english_11_adam_6}
        />
        break
      case 106: /* Spanish case 106*/
        pageElements = 
        <ImageLeft image={image_page_6x1024} 
                    text='"Hola Sammy," trinó Max. "¿Necesitas ayuda para encontrar tus bellotas?"' 
                    say='"Hola Sammy," trinó Max. "¿Necesitas ayuda para encontrar tus bellotas?"'
                    spoken={spanish_polly_lupe_106}
        />
        break
      case 206:
          pageElements = 
          <ImageLeft  image={image_page_6x1024} 
                      text='"Hi Sammy," Max chirped. "Do you need help finding your acorns?"' 
                      say='"Hi Sammy," Max chirped. "Do you need help finding your acorns?"'
                      spoken={english_polly_6}
          />
          break
      case 7:
        pageElements = 
        <ImageLeft image={image_page_7x1024} 
                    text='"Yes please," Sammy replied. "I&apos;ve looked everywhere and I can&apos;t find them.”' 
                    say='"Yes please," Sammy replied. "I&apos;ve looked everywhere and I can&apos;t find them.”'
                    spoken={english_11_adam_7}
        />
        break
      case 107: /* Spanish case 107*/
        pageElements = 
        <ImageLeft image={image_page_7x1024} 
                    text='"Sí, por favor," respondió Sammy. "He buscado por todas partes y no puedo encontrarlas."' 
                    say='"Sí, por favor," respondió Sammy. "He buscado por todas partes y no puedo encontrarlas."'
                    spoken={spanish_polly_lupe_107}
        />
        break
      case 8:
        pageElements = 
        <ImageFull image={image_page_8x2048} 
                    text='Max flew around the tree, searching high and low, until he found all of Sammy&apos;s acorns.' 
                    say='Max flew around the tree, searching high and low, until he found all of Sammy&apos;s acorns.'
                    spoken={english_11_adam_8}
        />
        break
      case 108: /* Spanish case 108*/
        pageElements = 
        <ImageFull image={image_page_8x2048} 
                    text='Max voló alrededor del árbol, buscando arriba y abajo, hasta que encontró todas las bellotas de Sammy.' 
                    say='Max voló alrededor del árbol, buscando arriba y abajo, hasta que encontró todas las bellotas de Sammy.'
                    spoken={spanish_polly_lupe_108}
        />
        break
      case 9:
        pageElements = 
        <ImageLeft image={image_page_9x1024} 
                    text='"Here they are!" Max said proudly.' 
                    say='"Here they are!" Max said proudly.'
                    spoken={english_11_adam_9}
        />
        break
      case 109: /* Spanish case 109*/
        pageElements = 
        <ImageLeft image={image_page_9x1024} 
                    text='"¡Aquí están!" dijo Max con orgullo.' 
                    say='"¡Aquí están!" dijo Max con orgullo.'
                    spoken={spanish_polly_lupe_109}
        />
        break
      case 10:
        pageElements = 
        <ImageRight image={image_page_10x1024} 
                    text='Sammy was so happy that he gave Max a big hug.' 
                    say='Sammy was so happy that he gave Max a big hug.'
                    spoken={english_11_adam_10}
        />
        break
      case 110: /* Spanish case 110*/
        pageElements = 
        <ImageRight image={image_page_10x1024} 
                    text='Sammy estaba tan feliz que le dio un gran abrazo a Max.' 
                    say='Sammy estaba tan feliz que le dio un gran abrazo a Max.'
                    spoken={spanish_polly_lupe_110}
        />
        break
      case 11:
        pageElements = 
        <ImageLeft image={image_page_11x1024} 
                    text='Thank you, Max! You&apos;re the best friend a squirrel could ever have.' 
                    say='Thank you, Max! You&apos;re the best friend a squirrel could ever have.'
                    spoken={english_11_adam_11}
        />
        break
      case 111: /* Spanish case 111*/
        pageElements = 
        <ImageLeft image={image_page_11x1024} 
                    text='"¡Gracias, Max! Eres el mejor amigo que una ardilla podría tener", dijo Sammy.' 
                    say='"¡Gracias, Max! Eres el mejor amigo que una ardilla podría tener", dijo Sammy.'
                    spoken={spanish_polly_lupe_111}
        />
        break
      case 12:
        pageElements = 
        <ImageFull image={image_page_12x2048} 
                    text='From that day on, Max and Sammy became the best of friends.' 
                    say='From that day on, Max and Sammy became the best of friends.'
                    spoken={english_11_adam_12}
        />
        break
      case 112: /* Spanish case 112*/
        pageElements = 
        <ImageFull image={image_page_12x2048} 
                    text='A partir de ese día, Max y Sammy se convirtieron en los mejores amigos.' 
                    say='A partir de ese día, Max y Sammy se convirtieron en los mejores amigos.'
                    spoken={spanish_polly_lupe_112}
        />
        break
      case 13:
        pageElements = 
        <ImageLeft image={image_page_13x1024} 
                    text='The End' 
                    say='The End'
                    spoken={english_11_adam_13}
        />
        break
      case 113: /* Spanish case 113*/
        pageElements = 
        <ImageLeft image={image_page_13x1024} 
                    text='El Fin' 
                    say='El Fin'
                    spoken={spanish_polly_lupe_113}
        />
        break


      default:
        pageElements = <Navigate to="/library" />
    }
  }

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
export default TestBookTemplate
