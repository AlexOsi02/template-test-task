import './menu.scss';

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__logo">
                <img src={"https://cdn.logo.com/hotlink-ok/logo-social.png"} alt="logo"/>
                <div className={"menu__companyName"}>NAME COMPANY</div>
            </div>
            <nav className="menu__navbar">
                <ul>
                    <li className="menu__item">
                        <a className={"menu__item-label"} href="#">Главная</a>
                    </li>
                    <li className="menu__item">
                        <a className={"menu__item-label"} href="#">Клиенты</a>
                    </li>
                    <li className="menu__item">
                        <a className={"menu__item-label"} href="#">Сотрудники</a>
                    </li>
                    <li className="menu__item">
                        <a className={"menu__item-label"} href="#">Аналитика</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu