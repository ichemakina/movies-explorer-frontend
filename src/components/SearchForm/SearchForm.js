import "./SearchForm.css";
import { useState, useEffect } from "react";

function SearchForm({ handleSearch, handleShortFilmsFilter, errors, isShortFilmsFilter, searchInputValue }) {
    const [searchValue, setSearchValue] = useState('');
    const [isCheckedFilter, setIsCheckedFilter] = useState(false);

    useEffect(() => {
        setIsCheckedFilter(isShortFilmsFilter);
    }, [isShortFilmsFilter]);

    function handleChange(e) {
        const { value } = e.target;
        setSearchValue(value);
    }

    function handleFilterChange(e) {
        const isChecked = e.target.checked;
        handleShortFilmsFilter(isChecked);
        setIsCheckedFilter(!isCheckedFilter);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchValue);
    }

    return (
        <form className="search-form" onSubmit={handleSubmit} noValidate>
            <div className="search-form__search-bar">
                <input className="search-form__input" type="search" placeholder="Фильм" required onChange={handleChange} defaultValue={searchInputValue}></input>
                <button type="submit" className="search-form__find-icon"></button>
            </div>
            <p className={`search__error ${errors ? "search__error_visible" : ""}`}>{errors}</p>
            <div className="search-form__filter">
                <label className="search-form__toggler">
                    <input className="search-form__checkbox" type="checkbox" checked={isCheckedFilter} onChange={handleFilterChange} ></input>
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