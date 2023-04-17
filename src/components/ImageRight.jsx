import Speak from './Speak'

function ImageRight({image, text, spoken}) {
  return(
    <div className="image-right">
      <div className="story-text">
        <div className="flourish top"></div>
        <div>{text}</div>
        <div className="flourish bottom"></div>
        <Speak audio={spoken} />
      </div>
      <div className="background">
        <img className="right" src={image} alt="Right page" />
      </div>
    </div>
  )
}
export default ImageRight