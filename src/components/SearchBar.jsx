import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { searchProducts } from "../redux/actions/index";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import "../SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchProducts(searchTerm));
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <Form onSubmit={handleSearch} className="search-bar">
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Cerca prodotti..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"
        />
        <Button type="submit" className="btn btn-primary">
          Cerca
        </Button>
      </InputGroup>
    </Form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
