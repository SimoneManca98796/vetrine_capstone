import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../HomePage.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("homepage");
    return () => {
      document.body.classList.remove("homepage");
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <div className="intro-section">
        <motion.div
          className="intro-caption"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="intro-text">Benvenuti nel nostro portale agricolo</h1>
          <p>
            Rimani aggiornato sui prezzi di mercato, compra e vendi prodotti
            agricoli, e tieniti al passo con le tendenze del settore.
          </p>
        </motion.div>
        <motion.img
          src="/Vetrine.png"
          alt="Logo App"
          className="intro-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>

      <motion.h4
        className="text-center mb-4"
        style={{ color: "#0085B5", marginTop: "20px" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tieniti aggiornato sui prezzi del mercato :
      </motion.h4>
      <div className="carousel-container">
        <Carousel className="responsive-carousel">
          <Carousel.Item>
            <motion.img
              className="d-block w-100 carousel-image"
              src="/latte.png"
              alt="Prezzi del Latte"
              style={{
                opacity: 0.8,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                border: "2px solid #fff",
                maxWidth: "100%",
                height: "auto",
                cursor: "pointer",
              }}
              onClick={() => handleNavigation("/PrezziLatte")}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <Carousel.Caption className="carousel-caption">
              <h3>Prezzi del Latte</h3>
              <p>Informazioni aggiornate sui prezzi del latte</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <motion.img
              className="d-block w-100 carousel-image"
              src="/ovini.png"
              alt="Prezzi degli Ovini"
              style={{
                opacity: 0.8,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                border: "2px solid #fff",
                maxWidth: "100%",
                height: "auto",
                cursor: "pointer",
              }}
              onClick={() => handleNavigation("/PrezziOvini")}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <Carousel.Caption className="carousel-caption">
              <h3>Prezzi degli Ovini</h3>
              <p>Novità e tendenze riguardanti allevamento degli ovini</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <motion.img
              className="d-block w-100 carousel-image"
              src="/suini.png"
              alt="Prezzi dei Suini"
              style={{
                opacity: 0.8,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                border: "2px solid #fff",
                maxWidth: "100%",
                height: "auto",
                cursor: "pointer",
              }}
              onClick={() => handleNavigation("/PrezziSuini")}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <Carousel.Caption className="carousel-caption">
              <h3>Prezzi dei Suini</h3>
              <p>Ultime notizie dal mercato suino</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <motion.img
              className="d-block w-100 carousel-image"
              src="/bovini.png"
              alt="Prezzi dei Bovini"
              style={{
                opacity: 0.8,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                border: "2px solid #fff",
                maxWidth: "100%",
                height: "auto",
                cursor: "pointer",
              }}
              onClick={() => handleNavigation("/PrezziAmericani")}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <Carousel.Caption className="carousel-caption">
              <h3>Prezzi dei Bovini</h3>
              <p>Aggiornamenti e prezzi del settore bovino</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="info-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Benvenuti nel nostro portale per agricoltori
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Scopri le ultime novità sui prezzi del mercato, vendi e compra
          prodotti agricoli, e rimani aggiornato sulle tendenze del settore.
        </motion.p>
        <motion.img
          src="/HomePagePrima.webp"
          alt="Agricoltura"
          style={{ width: "170px", height: "170px" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <button
          className="cta-button"
          onClick={() => handleNavigation("/Prodotti")}
        >
          Scopri i nostri prodotti <FaArrowRight />
        </button>
      </div>
      <div className="second-carousel-container">
        <h4 className="text-center mb-4" style={{ color: "#0085B5" }}>
          Metti in vendita e/o compra prodotti della tua terra:
        </h4>
        <div className="carousel-container">
          <Carousel className="responsive-carousel">
            <Carousel.Item>
              <motion.img
                className="d-block w-100 carousel-image"
                src="/caserecci.png"
                alt="Vendita di prodotti caserecci"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  cursor: "pointer",
                }}
                onClick={() => handleNavigation("/Artigianali")}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Vendita di prodotti caserecci</h3>
                <p>
                  Trova e vendi prodotti fatti in casa direttamente dalla tua
                  terra
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <motion.img
                className="d-block w-100 carousel-image"
                src="/piantine.png"
                alt="Vendita di piantine"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  cursor: "pointer",
                }}
                onClick={() => handleNavigation("/Piantine")}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Vendita di piantine</h3>
                <p>
                  Scopri una vasta selezione di piantine per il tuo giardino o
                  orto
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <motion.img
                className="d-block w-100 carousel-image"
                src="/venditeAnimali.png"
                alt="Vendita di animali"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  cursor: "pointer",
                }}
                onClick={() => handleNavigation("/Animali")}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Vendita di animali</h3>
                <p>
                  Trova il tuo nuovo compagno nella nostra selezione di animali
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="info-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Esplora le nostre funzionalità
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Il nostro portale offre una varietà di servizi per gli agricoltori,
          inclusi aggiornamenti sui prezzi, una piattaforma per vendere e
          comprare prodotti agricoli, e molto altro. Visita la sezione Aziende
          per leggere annunci che potrebbero interessarti o per farli
          direttamente tu!
        </motion.p>
        <motion.img
          src="/HomePageSeconda.webp"
          alt="Mercato agricolo"
          style={{ width: "400px", height: "400px" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <button
          className="cta-button"
          onClick={() => handleNavigation("/Aziende")}
        >
          Vedi gli annunci! <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
