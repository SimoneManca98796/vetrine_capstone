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
import Select from "react-select";
import { Line } from "react-chartjs-2"; // Importa il componente grafico
import "chart.js/auto"; // Importa la libreria del grafico
import "../../App.css";
import "../../PrezziSuini.css";
// eedede

const cityOptions = [
  { value: "Sardegna", label: "Sardegna" },
  { value: "Macomer", label: "Macomer" },
  { value: "Cagliari", label: "Cagliari" },
  { value: "Sassari", label: "Sassari" },
  { value: "Foggia", label: "Foggia" },
  { value: "Grosseto", label: "Grosseto" },
  { value: "Roma", label: "Roma" },
];

const PrezziSuini = () => {
  useEffect(() => {
    document.body.classList.add("prezziSuini");
    return () => {
      document.body.classList.remove("prezziSuini");
    };
  }, []);

  const dispatch = useDispatch();
  const { filteredList = [], prezzilist } = useSelector(
    (state) => state.prezziSuini || { filteredList: [], prezzilist: [] }
  );
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ data: "", luogo: "" });
  const [lastUpdated, setLastUpdated] = useState(""); // Stato per l'ultima data di aggiornamento

  useEffect(() => {
    dispatch(fetchPrices()).then(() => {
      setTimeout(() => setLoading(false), 1000); // Imposta un timeout di 1 secondo
    });
  }, [dispatch]);

  useEffect(() => {
    if (prezzilist.length > 0) {
      const latestDate = prezzilist[0].data; // Assumendo che la lista sia ordinata per data
      setLastUpdated(format(new Date(latestDate), "dd/MM/yyyy"));
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
    labels: Array.isArray(filteredList)
      ? filteredList.map((item) => item.data)
      : [],
    datasets: [
      {
        label: "Prezzo",
        data: Array.isArray(filteredList)
          ? filteredList.map((item) => item.prezzo)
          : [],
        fill: false,
        backgroundColor: "#FF8FAB", // Baker-Miller pink
        borderColor: "#FB6F92", // Rose Pompadour
      },
    ],
  };

  return (
    <div className="prezzi-suini-container">
      {loading && (
        <div className="spinner-overlay">
          <Spinner animation="border" variant="light" />
        </div>
      )}
      <Container className="prezzi-suini">
        <Row className="mb-4 mt-0">
          <Col xs={12}>
            <h2 style={{ fontSize: "1.2rem" }}>PREZZI DEI SUINI</h2>
            <p style={{ fontSize: "0.9rem" }}>
              Scopri i prezzi aggiornati dei suini e maialetti in Italia. Puoi
              filtrare i dati per data e luogo per vedere l&apos;andamento nel
              tempo.
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

export default PrezziSuini;
