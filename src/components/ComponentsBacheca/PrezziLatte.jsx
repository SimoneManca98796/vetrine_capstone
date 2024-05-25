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
import { format, parseISO } from "date-fns";
import Select from "react-select";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "../../App.css";
import "../../PrezziLatte.css";

const cityOptions = [
  { value: "Sardegna", label: "Sardegna" },
  { value: "Macomer", label: "Macomer" },
  { value: "Cagliari", label: "Cagliari" },
  { value: "Sassari", label: "Sassari" },
  { value: "Foggia", label: "Foggia" },
  { value: "Grosseto", label: "Grosseto" },
  { value: "Roma", label: "Roma" },
];

const PrezziLatte = () => {
  const dispatch = useDispatch();
  const { filteredList, prezzilist } = useSelector(
    (state) => state.prezziLatte
  );
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ data: "", luogo: "" });
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    dispatch(fetchPrices()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    if (prezzilist.length > 0) {
      const latestDate = prezzilist[0].data;
      if (latestDate) {
        setLastUpdated(format(parseISO(latestDate), "dd/MM/yyyy"));
      }
    }
  }, [prezzilist]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    const formattedDate = filters.data
      ? format(new Date(filters.data), "yyyy-MM-dd")
      : "";
    dispatch(fetchFilteredPrices({ ...filters, data: formattedDate }));
  };

  const chartData = {
    labels: filteredList.map((item) => {
      const date = item.data ? parseISO(item.data) : null;
      return date ? format(date, "dd/MM/yyyy") : "";
    }),
    datasets: [
      {
        label: "Prezzo",
        data: filteredList.map((item) => item.prezzo),
        fill: false,
        backgroundColor: "#495057",
        borderColor: "#343A40",
      },
    ],
  };

  return (
    <div className="prezzi-latte-container">
      {loading && (
        <div className="spinner-overlay">
          <Spinner animation="border" variant="light" />
        </div>
      )}
      <Container className="prezzi-latte">
        <Row className="mb-4 mt-0">
          <Col xs={12}>
            <h2 style={{ fontSize: "1.2rem" }}>PREZZI DEL LATTE</h2>
            <p style={{ fontSize: "0.9rem" }}>
              Scopri i prezzi aggiornati del latte e dei prodotti caseari in
              Italia. Puoi filtrare i dati per data e luogo per vedere
              l&apos;andamento nel tempo.
            </p>
            <p style={{ fontSize: "0.9rem" }}>
              <strong>Ultimo aggiornamento:</strong> {lastUpdated}
            </p>
            <Form className="filter-form">
              <Form.Group className="mb-3">
                <Form.Label>Data</Form.Label>
                <Form.Control
                  type="date"
                  value={filters.data}
                  onChange={(e) => handleFilterChange("data", e.target.value)}
                  style={{ fontSize: "0.8rem", padding: "0.25rem 0.5rem" }}
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
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      fontSize: "0.8rem",
                      padding: "0.25rem 0.5rem",
                    }),
                  }}
                />
              </Form.Group>
              <Button
                onClick={applyFilters}
                style={{ fontSize: "0.9rem", padding: "0.25rem 0.5rem" }}
              >
                Applica Filtri
              </Button>
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
              <>
                <div className="table-responsive">
                  <Table striped bordered hover className="custom-table">
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
                            <td>
                              {item.data
                                ? format(parseISO(item.data), "dd/MM/yyyy")
                                : "N/D"}
                            </td>
                            <td>{item.luogo}</td>
                            <td>{item.prodotto}</td>
                            <td>{item.prezzo ? `${item.prezzo} ` : "N/D"}</td>
                            <td>
                              {item.variazionePerc
                                ? `${item.variazionePerc}`
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
                <div
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    margin: "20px auto",
                  }}
                >
                  <h3 style={{ fontSize: "1rem" }}>Andamento Prezzi</h3>
                  <div style={{ height: "300px" }}>
                    <Line
                      data={chartData}
                      options={{ responsive: true, maintainAspectRatio: false }}
                    />
                  </div>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrezziLatte;
