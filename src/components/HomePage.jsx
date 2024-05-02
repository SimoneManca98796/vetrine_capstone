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
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/latte.png"
            alt="Prezzi del Latte"
            width="300px"
            height="300px"
          />
          <Carousel.Caption>
            <h3 style={{ color: "#0085B5" }}>Prezzi del Latte</h3>
            <p style={{ color: "#0085B5" }}>
              Informazioni aggiornate sui prezzi del latte
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/ovini.png"
            alt="Ovini"
            width="300px"
            height="300px"
          />
          <Carousel.Caption>
            <h3 style={{ color: "#0085B5" }}>Ovini</h3>
            <p style={{ color: "#0085B5" }}>
              Novità e tendenze riguardanti allevamento degli ovini
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/suini.png"
            alt="Suini"
            width="300px"
            height="300px"
          />
          <Carousel.Caption>
            <h3 style={{ color: "#0085B5" }}>Suini</h3>
            <p style={{ color: "#0085B5" }}>Ultime notizie dal mercato suino</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/bovini.png"
            alt="Bovini"
            width="300px"
            height="300px"
          />
          <Carousel.Caption>
            <h3 style={{ color: "#0085B5" }}>Bovini</h3>
            <p style={{ color: "#0085B5" }}>
              Aggiornamenti e prezzi del settore bovino
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Distanza per i due caroselli */}
      <div style={{ marginBottom: "120px" }}></div>
      {/* Distanza per i due caroselli */}
      {/* INIZIO NUOVO CAROUSEL: */}
      <h4 className="text-center mb-4" style={{ color: "#0085B5" }}>
        METTI IN VENDITA E/O COMPRA I PRODOTTI DELLA TUA TERRA:
      </h4>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/caserecci.png"
            alt="Vendita di prodotti caserecci"
            width="300px"
            height="300px"
          />
          <Carousel.Caption>
            <h3 style={{ color: "#0085B5" }}>Vendita di prodotti caserecci</h3>
            <p style={{ color: "#0085B5" }}>
              Trova e vendi prodotti fatti in casa direttamente dalla tua terra
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/piantine.png"
            alt="Vendita di piantine"
            width="300px"
            height="300px"
          />
          <Carousel.Caption>
            <h3 style={{ color: "#0085B5" }}>Vendita di piantine</h3>
            <p style={{ color: "#0085B5" }}>
              Scopri una vasta selezione di piantine per il tuo giardino o orto
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/venditeAnimali.png"
            alt="Vendita di animali"
            width="300px"
            height="300px"
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
  );
};

export default HomePage;
