import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../redux/actions/index";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import "../SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchProducts(searchTerm));
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

export default SearchBar;
