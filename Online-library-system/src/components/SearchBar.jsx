const SearchBar = ({ searchQuery, setSearchQuery}) => {
    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Search by title or author...."
                className="w-full px-4 py-2 rounded border border-amber-600 focus:outline focus:ring-2 focus:ring-amber-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
        </div>
    )
}

export default SearchBar;