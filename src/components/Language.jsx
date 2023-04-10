

function Language({languages}) {
  return(
    <div className="language">
      Language
      {languages.map(language => {
        return(
          <>
            <h1>{language.language}</h1>
            <h3>{language.page}</h3>
          </>
        )
      })}
      <h1>Cancel</h1>
    </div>
  )
}
export default Language