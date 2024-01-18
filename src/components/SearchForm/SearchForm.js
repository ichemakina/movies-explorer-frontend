import "./SearchForm.css";

function SearchForm() {
    return (
        <form className="search-form">
            <div className="search-form__search-bar">
                <input className="search-form__input" type="search" placeholder="Фильм" required></input>
                <button type="submit" className="search-form__find-icon"></button>
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
        </form>
    )
}

export default SearchForm;