import Talkie from './Talkie'

function ImageRight({image, text, say, nextPage, previousPage}) {
  return(
    <div className="image-right">
      <div className="background">
        <img className="left" src={image} alt="Left page" />
      </div>
      <div className="story-text">
        <hr className="flourish top" />
        <div>{text}</div>
        <hr className="flourish bottom" />
        <footer>
          <button className="left-quarter-circle"  onClick={previousPage}><span>&lt;</span></button>
          <Talkie />
          <button className="right-quarter-circle"  onClick={nextPage}><span>&gt;</span></button>
      </footer>
      </div>
      <div id="say">{say}</div>
    </div>
  )
}
export default ImageRight