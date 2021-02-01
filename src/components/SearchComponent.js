const Search = (props) => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={props.searchKey}
        placeholder="Search item name"
        onChange={props.handleSearchInput}
      />
      <span className="input-group-btn">
        <button
          className="btn btn-info"
          type="button"
          onClick={() => props.clearButton()}
        >
          Clear
        </button>
      </span>
    </div>
  );
};

export default Search;
