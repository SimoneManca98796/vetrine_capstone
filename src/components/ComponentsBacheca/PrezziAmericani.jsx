import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAmericanPrices,
  fetchFilteredAmericanPrices,
} from "../../redux/actions";
import {
  Container,
  Row,
  Col,
  Table,
  Spinner,
  Form,
  Button,
} from "react-bootstrap";
import { format } from "date-fns";
import Select from "react-select";
import "../../App.css";
import "../../PrezziAmericani.css";

const PrezziAmericani = () => {
  useEffect(() => {
    document.body.classList.add("prezziAmericani");
    return () => {
      document.body.classList.remove("prezziAmericani");
    };
  }, []);

  const dispatch = useDispatch();
  const { filteredList, prezzilist } = useSelector(
    (state) => state.prezziAmericani
  );
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ data: "", luogo: "" });

  useEffect(() => {
    dispatch(fetchAmericanPrices());
    setTimeout(() => setLoading(false), 2000);
  }, [dispatch]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    const formattedDate = filters.data
      ? format(new Date(filters.data), "yyyy-MM-dd")
      : "";
    dispatch(fetchFilteredAmericanPrices({ ...filters, data: formattedDate }));
  };

  return (
    <div className="prezzi-americani-container">
      <Container className="prezzi-americani">
        <Row className="mb-4 mt-0">
          <Col xs={12}>
            <h2>PREZZI AMERICANI</h2>
            <Form className="filter-form">
              <Form.Group className="mb-3">
                <Form.Label>Data</Form.Label>
                <Form.Control
                  type="date"
                  value={filters.data}
                  onChange={(e) => handleFilterChange("data", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Luogo</Form.Label>
                <Select
                  options={[{ value: "USA", label: "USA" }]}
                  onChange={(selectedOption) =>
                    handleFilterChange(
                      "luogo",
                      selectedOption ? selectedOption.value : ""
                    )
                  }
                  placeholder="Scegli luogo"
                  isClearable
                  isSearchable
                />
              </Form.Group>
              <Button onClick={applyFilters}>Applica Filtri</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            {loading ? (
              <div className="spinner-container">
                <Spinner animation="border" />
              </div>
            ) : (
              <div className="table-responsive">
                <Table
                  striped
                  bordered
                  hover
                  className="table-responsive custom-table"
                >
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Luogo</th>
                      <th>Prodotto</th>
                      <th>Prezzo</th>
                      <th>Variazione</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredList && filteredList.length > 0 ? (
                      filteredList.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.publishedDate}</td>
                          <td>{item.marketCountry || "USA"}</td>
                          <td>{item.description}</td>
                          <td>
                            {item.foodNutrients.find(
                              (nutrient) => nutrient.nutrientName === "Energy"
                            )?.value || "N/D"}{" "}
                            $
                          </td>
                          <td>
                            {item.percentDailyValue
                              ? `${item.percentDailyValue}%`
                              : "N/A"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">Nessun dato disponibile</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrezziAmericani;
