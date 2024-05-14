import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsByCategory } from "../../redux/actions/index";
import { Card, Button } from "react-bootstrap";
import ProductForm from "../ProductForm";

const Piantine = () => {
  const dispatch = useDispatch();
  const piantine = useSelector((state) => state.products.piantine);

  useEffect(() => {
    dispatch(fetchProductsByCategory("piantine"));
  }, [dispatch]);

  useEffect(() => {
    console.log("Piantine:", piantine);
  }, [piantine]);

  return (
    <div className="container mt-5">
      <h1 className="mb-3">Piantine e Ortaggi</h1>
      <ProductForm />
      <div className="row">
        {Array.isArray(piantine) && piantine.length > 0 ? (
          piantine.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.description}
                    <br />
                    Prezzo: €{product.price}
                  </Card.Text>
                  <Button variant="primary">Acquista</Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>Nessun prodotto trovato.</p>
        )}
      </div>
    </div>
  );
};

export default Piantine;
