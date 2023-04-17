import Speak from './Speak'

function ImageFull({image, text, spoken}) {
  return(
    <div className="image-full">
      <div className="background-full">
        <img className="full" src={image} alt="Full page" />
      </div>
      <div className="story-text-full">
        <div className="text-full">{text}</div>
        <Speak audio={spoken} />
      </div>
    </div>
  )
}
export default ImageFull