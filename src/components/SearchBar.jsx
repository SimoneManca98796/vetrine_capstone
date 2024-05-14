import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../redux/actions/index";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchProducts(searchTerm));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Cerca prodotti..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control"
      />
      <button type="submit" className="btn btn-primary mt-2">
        Cerca
      </button>
    </form>
  );
};

export default SearchBar;
