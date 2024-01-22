import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ handleSearch, handleShortFilmsFilter, errors }) {
    const [searchValue, setSearchValue] = useState('');

    function handleChange(e) {
        const { value } = e.target;
        setSearchValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchValue);
    }

    return (
        <form className="search-form" onSubmit={handleSubmit} noValidate>
            <div className="search-form__search-bar">
                <input className="search-form__input" type="search" placeholder="Фильм" required onChange={handleChange}></input>
                <button type="submit" className="search-form__find-icon"></button>
            </div>
            <p className={`search__error ${errors ? "search__error_visible" : ""}`}>{errors}</p>
            <div className="search-form__filter">
                <label className="search-form__toggler">
                    <input className="search-form__checkbox" type="checkbox" onClick={handleShortFilmsFilter}></input>
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