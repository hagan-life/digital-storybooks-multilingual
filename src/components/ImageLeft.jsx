import Speak from './Speak'

function ImageLeft({image, text, spoken}) {
  return(
    <div className="image-left">

      <div className="background">
        <img className="left" src={image} alt="Left page" />
      </div>
      <div className="story-text">
        <hr className="flourish top" />
        <div>{text}</div>
        <hr className="flourish bottom" />
        <Speak audio={spoken} />
      </div>
    </div>
  )
}
export default ImageLeft
