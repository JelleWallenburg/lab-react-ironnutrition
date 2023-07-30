function SearchBar (props) {
    const {filterFoods} = props;
    return(
        <div className="SearchBar">
            <h1>Search</h1>
            <input type='text' onChange={(e) => filterFoods(e.target.value)}/>
        </div>
    )
}

export default SearchBar;