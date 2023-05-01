

function Language({languages, currentPage, passSetPage, passSetChangeLanguage, passSetLanguage}) {
  const currentPageArray = Array.from(String(currentPage).padStart(2, '0'), Number)
  const reverse = currentPageArray.reverse()
  const ones = reverse[0]
  const tens = reverse[1]
  const basePageString = `${tens}${ones}`
  const basePage = parseInt(basePageString, 10)
  
  return(
    <div className="language">
        <div key='english'
          onClick={() => {
            passSetPage(basePage + 0)
            passSetChangeLanguage(false)
            passSetLanguage('en-US')
          }}>English
        </div>
        <div key='spanish'
          onClick={() => {
            passSetPage(basePage + 100)
            passSetChangeLanguage(false)
            passSetLanguage('es-ES')
          }}>Spanish
        </div>
        {/*
        <div key='polly'
          onClick={() => {
            passSetPage(basePage + 200)
            passSetChangeLanguage(false)
            passSetLanguage('es-ES')
          }}>AWS Polly
        </div>
        */}
        
      {/*
      {languages.map(language => {
        return(
          <>
            <p>languages.language= {language.language}</p>
            <p>languages.pageModifier= {language.pageModifier}</p>
            <p>currentPage= {currentPage}</p>
          </>
        )
      })}
      */}
      
    </div>
  )
}
export default Language