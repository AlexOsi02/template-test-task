import "./filterMenu.scss"

const FilterMenu = () => {
  return(
      <div className="filterMenu">
        <input type="text" className="input" placeholder={"Дата от"}/>
        <input type="text" className="input" placeholder={"Дата до"}/>
        <input type="text" className="input" placeholder={"Дата от"}/>
        <input type="text" className="input" placeholder={"Дата до"}/>
        <input type="text" className="input" placeholder={"Имя клиента"}/>
        <input type="text" className="input" placeholder={"Телефон"}/>
        <input type="text" className="input" placeholder={"Имя клиента"}/>
        <input type="text" className="input" placeholder={"Телефон"}/>
    </div>
  )
}

export default FilterMenu;