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
    </div>
  );
};

export default HomePage;
