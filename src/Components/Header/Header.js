import SubHeader from "../SubHeader/SubHeader";
import FilterBlock from "../FilterBlock/FilterBlock";

import "./header.scss";

const Header = () => {
    return (
        <div className={"header"}>
            <SubHeader/>
            <FilterBlock/>
        </div>
    )

}

export default Header;