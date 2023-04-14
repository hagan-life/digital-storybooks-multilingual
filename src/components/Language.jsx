

function Language({languages, currentPage, passSetPage, passSetChangeLanguage}) {
  let basePage = currentPage % 10

  return(
    <div className="language">
        <div onClick={() => {
          passSetPage(basePage + 0)
          passSetChangeLanguage(false)
        }}>English</div>
        <div onClick={() => {
          passSetPage(basePage + 100)
          passSetChangeLanguage(false)
        }}>Spanish</div>
        
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