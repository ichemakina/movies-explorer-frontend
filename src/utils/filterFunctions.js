function search(movies, searchValue) {
    return movies.filter(movie =>
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
    );
}

function shortFilmsFilter(movies) {
    return movies.filter(movie => movie.duration < 40);
}

export {
    search,
    shortFilmsFilter
};
