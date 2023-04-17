import talkie from '../images/smilecreature.png';

function Talkie({spoken}) {

  document.addEventListener("touchstart", function() {},false);

  /* hardcoded speech synthesis example */
  const readMainContent = () =>{
    
    
    const u = new SpeechSynthesisUtterance();
    const say = document.getElementById('say').innerHTML;
    let voices = window.speechSynthesis.getVoices();
    console.log(voices);
    /* Safari 
    speechSynthesis.getVoices().forEach(voice => {
      console.log(voice.name, voice.lang)
    })
    /* */
    /* Chrome & Brave 
    const voiceschanged = () => {
      console.log(`Voices #: ${speechSynthesis.getVoices().length}`)
      speechSynthesis.getVoices().forEach(voice => {
        console.log(voice.name, voice.lang, voice.localService)
      })
    }
    speechSynthesis.onvoiceschanged = voiceschanged
    /* */
    /*u.lang = 'en-US';*/
    /*u.lang = {spoken}*/
    /*console.log(voices)*/
    /*u.lang = 'es-ES';*/
    u.voice = voices[82];       /* hardcoded Monica: es-ES on Brave */
    /*u.voice = voices[0];      /* hardcoded Samantha: en-US on Brave */
    /*u.voice = voices[56];     /* hardcoded Shelly: es-ES on Safari Desktop */
    u.rate = 0.80;
    //u.text = 'Hello, William.';
    u.text = say;
    speechSynthesis.speak(u);
    console.log('speaking...');
    /*console.log(u.voice.lang);*/
  }
  /*
  0: SpeechSynthesisVoice {voiceURI: 'Samantha', name: 'Samantha', lang: 'en-US', localService: true, default: true}
  82: SpeechSynthesisVoice {voiceURI: 'Mónica', name: 'Mónica', lang: 'es-ES', localService: true, default: false}
  */


  return(
    <div className="talkie" onClick={readMainContent}>
      <img draggable="false" src={talkie} alt="smiling monster"/>
    </div>
  );
}
export default Talkie;