

function Language({languages, currentPage, passSetPage, passSetChangeLanguage, passSetLanguage}) {
  let basePage = currentPage % 10

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
        <div key='polly'
          onClick={() => {
            passSetPage(basePage + 200)
            passSetChangeLanguage(false)
            passSetLanguage('es-ES')
          }}>AWS Polly
        </div>
        
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