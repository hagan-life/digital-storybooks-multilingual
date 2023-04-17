import smiley from '../images/smilecreature.png';

function Speak({audio}) {
  return(
    <div className="player" onClick={() => (document.getElementById('testplay').play())}>
      <audio id="testplay" src={audio}></audio>
      <img draggable="false" src={smiley} alt="smiling monster"/>
    </div>
  )
}
export default Speak