import {useState} from "react";
import FilterMenu from "../filterMenu/FilterMenu";

import "./filterBlock.scss";

import gear from "../../assets/gear.png"

const FilterBlock = () => {
    const [activeFilterMenu, setActiveFilterMenu] = useState(false);

    const headerHeight = activeFilterMenu ? "160px" : "30px";

    return (
        <div className="filterBlock" style={{height: headerHeight}}>
            <div className="filterBlock__wrapper">
                <h2 className="filterBlock__title">filter block</h2>
                <button className="filterBlock__button" onClick={() => setActiveFilterMenu(() => !activeFilterMenu)}><img src={gear} alt="gear"/></button>
            </div>
            <FilterMenu/>
        </div>
    )

}

export default FilterBlock;