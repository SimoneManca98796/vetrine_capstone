import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const HomePage = () => {
  return (
    <div>
      <h4 className="text-center mb-4" style={{ color: "#0085B5" }}>
        TIENITI AGGIORNATO SUI PREZZI DEL MERCATO :
      </h4>
      <div className="carousel-container">
        <Carousel className="responsive-carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/latte.png"
              alt="Prezzi del Latte"
              style={{
                opacity: 0.8,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                border: "2px solid #fff",
                maxWidth: "876.3px" /* Dimensione fissa per desktop */,
                height: "auto" /* Mantiene le proporzioni */,
              }}
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}>Prezzi del Latte</h3>
              <p style={{ color: "black" }}>
                Informazioni aggiornate sui prezzi del latte
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/ovini.png"
              alt="Ovini"
              style={{
                opacity: 0.8,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                border: "2px solid #fff",
                maxWidth: "876.3px",
                height: "auto",
              }}
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}>Ovini</h3>
              <p style={{ color: "black" }}>
                Novità e tendenze riguardanti allevamento degli ovini
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/suini.png"
              alt="Suini"
              style={{
                opacity: 0.8,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                border: "2px solid #fff",
                maxWidth: "876.3px",
                height: "auto",
              }}
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}>Suini</h3>
              <p style={{ color: "black" }}>Ultime notizie dal mercato suino</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/bovini.png"
              alt="Bovini"
              style={{
                opacity: 0.8,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                border: "2px solid #fff",
                maxWidth: "876.3px",
                height: "auto",
              }}
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}>Bovini</h3>
              <p style={{ color: "black" }}>
                Aggiornamenti e prezzi del settore bovino
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Spazio per separare i caroselli */}
      <div style={{ marginBottom: "150px" }}></div>

      {/* Secondo carosello */}
      <h4 className="text-center mb-4" style={{ color: "#0085B5" }}>
        METTI IN VENDITA E/O COMPRA I PRODOTTI DELLA TUA TERRA:
      </h4>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/caserecci.png"
              alt="Vendita di prodotti caserecci"
              style={{
                maxWidth: "876.3px",
                height: "auto",
              }}
            />
            <Carousel.Caption>
              <h3 style={{ color: "#0085B5" }}>
                Vendita di prodotti caserecci
              </h3>
              <p style={{ color: "#0085B5" }}>
                Trova e vendi prodotti fatti in casa direttamente dalla tua
                terra
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/piantine.png"
              alt="Vendita di piantine"
              style={{
                maxWidth: "876.3px",
                height: "auto",
              }}
            />
            <Carousel.Caption>
              <h3 style={{ color: "#0085B5" }}>Vendita di piantine</h3>
              <p style={{ color: "#0085B5" }}>
                Scopri una vasta selezione di piantine per il tuo giardino o
                orto
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/venditeAnimali.png"
              alt="Vendita di animali"
              style={{
                maxWidth: "876.3px",
                height: "auto",
              }}
            />
            <Carousel.Caption>
              <h3 style={{ color: "#0085B5" }}>Vendita di animali</h3>
              <p style={{ color: "#0085B5" }}>
                Trova il tuo nuovo compagno nella nostra selezione di animali
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/**/}
      <div style={{ marginBottom: "150px" }}></div>
      <h4 className="text-center mb-4" style={{ color: "#0085B5" }}>
        METTI IN VENDITA E/O COMPRA I PRODOTTI DELLA TUA TERRA:
      </h4>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/caserecci.png"
              alt="Vendita di prodotti caserecci"
              style={{
                maxWidth: "876.3px",
                height: "auto",
              }}
            />
            <Carousel.Caption>
              <h3 style={{ color: "#0085B5" }}>
                Vendita di prodotti caserecci
              </h3>
              <p style={{ color: "#0085B5" }}>
                Trova e vendi prodotti fatti in casa direttamente dalla tua
                terra
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/piantine.png"
              alt="Vendita di piantine"
              style={{
                maxWidth: "876.3px",
                height: "auto",
              }}
            />
            <Carousel.Caption>
              <h3 style={{ color: "#0085B5" }}>Vendita di piantine</h3>
              <p style={{ color: "#0085B5" }}>
                Scopri una vasta selezione di piantine per il tuo giardino o
                orto
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/venditeAnimali.png"
              alt="Vendita di animali"
              style={{
                maxWidth: "876.3px",
                height: "auto",
              }}
            />
            <Carousel.Caption>
              <h3 style={{ color: "#0085B5" }}>Vendita di animali</h3>
              <p style={{ color: "#0085B5" }}>
                Trova il tuo nuovo compagno nella nostra selezione di animali
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
