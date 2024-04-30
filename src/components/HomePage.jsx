import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const HomePage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/latte.png"
          alt="Prezzi del Latte"
        />
        <Carousel.Caption>
          <h3>Prezzi del Latte</h3>
          <p>Informazioni aggiornate sui prezzi del latte.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/ovini.png" alt="Ovini" />
        <Carousel.Caption>
          <h3>Ovini</h3>
          <p>Novità e tendenze riguardanti allevamento degli ovini.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/suini.png" alt="Suini" />
        <Carousel.Caption>
          <h3>Suini</h3>
          <p>Ultime notizie dal mercato suino.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/bovini.png" alt="Bovini" />
        <Carousel.Caption>
          <h3>Bovini</h3>
          <p>Aggiornamenti e prezzi del settore bovino.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePage;
