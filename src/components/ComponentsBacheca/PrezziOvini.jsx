import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOviniPrices,
  fetchFilteredOviniPrices,
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
import Select from "react-select";
import { format } from "date-fns";
import "../../prezzidatistyle.css";

const cityOptions = [
  { value: "Sardegna", label: "Sardegna" },
  { value: "Macomer", label: "Macomer" },
  { value: "Cagliari", label: "Cagliari" },
  { value: "Sassari", label: "Sassari" },
  { value: "Foggia", label: "Foggia" },
  { value: "Grosseto", label: "Grosseto" },
  { value: "Roma", label: "Roma" },
];

const PrezziOvini = () => {
  const dispatch = useDispatch();
  const { filteredList, prezzilist } = useSelector(
    (state) => state.prezziOvini
  );
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ data: "", luogo: "" });

  useEffect(() => {
    dispatch(fetchOviniPrices());
    setTimeout(() => setLoading(false), 2000);
  }, [dispatch]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    const formattedDate = filters.data
      ? format(new Date(filters.data), "yyyy-MM-dd")
      : "";
    dispatch(fetchFilteredOviniPrices({ ...filters, data: formattedDate }));
  };

  return (
    <Container className="prezzi-ovini">
      <Row className="mb-4 mt-0">
        <Col xs={12}>
          <h2>PREZZI DEGLI OVINI</h2>
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
              <Select
                options={cityOptions}
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
            <Spinner
              animation="border"
              className="d-flex justify-content-center"
            />
          ) : (
            <Table
              striped
              bordered
              hover
              className="table-responsive custom-tables"
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
                      <td>{item.data}</td>
                      <td>{item.luogo}</td>
                      <td>{item.prodotto}</td>
                      <td>{item.prezzo ? `${item.prezzo} €` : "N/D"}</td>
                      <td>{item.varPerc ? `${item.varPerc}%` : "N/A"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">Nessun dato disponibile</td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PrezziOvini;
