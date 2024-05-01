import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrices, filterPrices } from "../../redux/actions/index";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Table,
  Spinner,
  Form,
} from "react-bootstrap";
import { format } from "date-fns";
import itLocale from "date-fns/locale/it";

const PrezziLatte = () => {
  const dispatch = useDispatch();
  const { filteredList, prezzilist } = useSelector(
    (state) => state.prezziLatte
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchPrices());
    setTimeout(() => setLoading(false), 2000);
  }, [dispatch]);

  const handleFilterChange = (criteria) => {
    dispatch(filterPrices(criteria));
  };

  return (
    <Container>
      <Row className="mb-4 mt-0">
        <Col xs={12} sm={6}>
          <h2>PREZZI DEL LATTE</h2>
        </Col>
        <Col
          xs={12}
          sm={6}
          className="d-flex justify-content-end align-items-center"
        >
          <Dropdown onSelect={(value) => handleFilterChange({ luogo: value })}>
            <Dropdown.Toggle variant="primary">
              Filtro per Luogo
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {prezzilist.map((item, idx) => (
                <Dropdown.Item key={idx} eventKey={item.luogo}>
                  {item.luogo}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
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
                  {filteredList.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.data}</td>
                      <td>{item.luogo}</td>
                      <td>{item.prodotto}</td>
                      <td>{item.prezzo}</td>
                      <td>{item.varPerc}</td>
                    </tr>
                  ))}
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
