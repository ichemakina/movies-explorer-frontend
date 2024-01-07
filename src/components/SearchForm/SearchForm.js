import "./SearchForm.css";
import findIcon from "../../images/find.svg";

function SearchForm() {
    return (
        <div className="search-form">
            <div className="search-form__search-bar">
                <input className="search-form__input" type="search" placeholder="Фильм"></input>
                <img className="search-form__find-icon" src={findIcon} alt=""></img>
            </div>
            <div className="search-form__filter">
                <label className="search-form__toggler">
                    <input className="search-form__checkbox" type="checkbox"></input>
                    <div className="search-form__slider">
                        <div className="search-form__btn"></div>
                    </div>
                </label>
                <legend className="search-form__toggler-legend">Короткометражки</legend>
            </div>
        </div>
    )
}

export default SearchForm;