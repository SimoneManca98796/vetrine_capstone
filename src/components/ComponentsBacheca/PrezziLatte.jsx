import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrices, fetchFilteredPrices } from "../../redux/actions";
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

const PrezziLatte = () => {
  const dispatch = useDispatch();
  const { filteredList, prezzilist } = useSelector(
    (state) => state.prezziLatte
  );
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ data: "", luogo: "" });

  useEffect(() => {
    dispatch(fetchPrices());
    setTimeout(() => setLoading(false), 2000);
  }, [dispatch]);

  useEffect(() => {
    console.log("Current filteredList state:", filteredList);
  }, [filteredList]);

  const handleFilterChange = (key, value) => {
    if (key === "data") {
      value = format(new Date(value), "yyyy-MM-dd"); // Formatta la data subito
    }
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    console.log("Applying filters with:", filters);
    const formattedDate = format(new Date(filters.data), "yyyy-MM-dd");
    console.log("Formatted date sent to server:", formattedDate); // Verifica che la data sia corretta
    dispatch(fetchFilteredPrices({ ...filters, data: formattedDate }));
  };

  return (
    <Container>
      <Row className="mb-4 mt-0">
        <Col xs={12} sm={6}>
          <h2>PREZZI DEL LATTE</h2>
          <Form>
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
              <Form.Control
                as="select"
                value={filters.luogo}
                onChange={(e) => handleFilterChange("luogo", e.target.value)}
              >
                {[...new Set(prezzilist.map((item) => item.luogo))].map(
                  (luogo, idx) => (
                    <option key={idx} value={luogo}>
                      {luogo}
                    </option>
                  )
                )}
              </Form.Control>
            </Form.Group>
            <Button onClick={applyFilters}>Applica Filtri</Button>
          </Form>
        </Col>
        <Col
          xs={12}
          sm={6}
          className="d-flex align-items-center justify-content-end"
        >
          {/* Altri controlli se necessario */}
        </Col>
      </Row>
      <Row>
        <Col>
          {loading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <div className="table-responsive">
              <Table striped bordered hover>
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
                        <td>{item.data}</td>
                        <td>{item.luogo}</td>
                        <td>{item.prodotto}</td>
                        <td>{item.prezzo}</td>
                        <td>{item.varPerc || "N/A"}</td>
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
  );
};

export default PrezziLatte;
