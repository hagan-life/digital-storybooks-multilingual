import talkie from '../images/smilecreature.png';

function Talkie() {

  document.addEventListener("touchstart", function() {},false);

  /* hardcoded speech synthesis example */
  const readMainContent = () =>{
    
    
    const u = new SpeechSynthesisUtterance();
    const say = document.getElementById('say').innerHTML;

    //let voices = window.speechSynthesis.getVoices();
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
    u.lang = 'en-US';
    u.rate = 0.90;
    //u.text = 'Hello, William.';
    u.text = say;
    speechSynthesis.speak(u);
    console.log('speaking...');
  }


  return(
    <div className="talkie" onClick={readMainContent}>
      <img draggable="false" src={talkie} alt="smiling monster"/>
    </div>
  );
}
export default Talkie;