import "./subheader.scss"

const SubHeader = () => {
  return(
      <div className="subheader">
        <input type="text" className="input" placeholder={"Поиск..."}/>
        <div className="subheader__info">
          <div className="subheader__name">Петров В.А.</div>
          <div className="subheader__logo">В.А.</div>
        </div>
      </div>
  )
}

export default SubHeader;