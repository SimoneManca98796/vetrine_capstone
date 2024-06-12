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
        Tieniti aggiornato sui prezzi del mercato:
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

      {/* Nuovo Carosello per le organizzazioni agricole */}
      <div className="ultimaSezione">
        <div className="carousel-container">
          <h4 className="text-center mb-4" style={{ color: "#0085B5" }}>
            Tieniti aggiornato sulle principali organizzazioni agricole:
          </h4>
          <Carousel className="responsive-carousel">
            <Carousel.Item>
              <motion.img
                className="d-block w-100 carousel-image"
                src="/coldiretti.png"
                alt="Coldiretti"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open("https://www.coldiretti.it", "_blank")
                }
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Coldiretti</h3>
                <p>Scopri i servizi e le iniziative di Coldiretti</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <motion.img
                className="d-block w-100 carousel-image"
                src="/cia.png"
                alt="CIA"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  cursor: "pointer",
                }}
                onClick={() => window.open("https://www.cia.it", "_blank")}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <Carousel.Caption className="carousel-caption">
                <h3>CIA</h3>
                <p>Informazioni dalla Confederazione Italiana Agricoltori</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <motion.img
                className="d-block w-100 carousel-image"
                src="/cofragricoltura.png"
                alt="Confagricoltura"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open("https://www.confagricoltura.it", "_blank")
                }
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <Carousel.Caption className="carousel-caption">
                <h3>Confagricoltura</h3>
                <p>Scopri le iniziative di Confagricoltura</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Lista delle regioni con i link agli enti di riferimento */}
      <div className="info-section">
        <h4 className="text-center mb-4" style={{ color: "#0085B5" }}>
          Ente di riferimento per i premi comunitari in ogni regione:
        </h4>
        <ul className="region-list">
          <li>
            <a
              href="https://www.regione.abruzzo.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/abruzzo.png"
                alt="Abruzzo Logo"
                className="region-logo"
              />
              Abruzzo: Dipartimento Agricoltura della Regione Abruzzo
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.basilicata.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/basilicata.png"
                alt="Basilicata Logo"
                className="region-logo"
              />
              Basilicata: Dipartimento Politiche Agricole e Forestali della
              Regione Basilicata
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.calabria.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/calabria.png"
                alt="Calabria Logo"
                className="region-logo"
              />
              Calabria: Dipartimento Agricoltura e Risorse Agroalimentari della
              Regione Calabria
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.campania.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/campania.png"
                alt="Campania Logo"
                className="region-logo"
              />
              Campania: Direzione Generale per le Politiche Agricole, Alimentari
              e Forestali della Regione Campania
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.emilia-romagna.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/emilia.png"
                alt="Emilia Romagna Logo"
                className="region-logo"
              />
              Emilia-Romagna: Direzione Generale Agricoltura, Caccia e Pesca
              della Regione Emilia-Romagna
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.fvg.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/friuli.png" alt="Fiuli Logo" className="region-logo" />
              Friuli Venezia Giulia: Direzione Centrale Risorse Agricole,
              Forestali e Ittiche della Regione Friuli Venezia Giulia
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.lazio.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/lazio.png" alt="Lazio Logo" className="region-logo" />
              Lazio: Direzione Agricoltura e Sviluppo Rurale della Regione Lazio
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.liguria.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/liguria.png"
                alt="Liguria Logo"
                className="region-logo"
              />
              Liguria: Dipartimento Agricoltura, Turismo, Formazione e Lavoro
              della Regione Liguria
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.lombardia.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/lombardia.png"
                alt="Lombardia Logo"
                className="region-logo"
              />
              Lombardia: Direzione Generale Agricoltura, Alimentazione e Sistemi
              Verdi della Regione Lombardia
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.marche.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/marche.png"
                alt="Marche Logo"
                className="region-logo"
              />
              Marche: Direzione Agricoltura e Sviluppo Rurale della Regione
              Marche
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.molise.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/molise.png"
                alt="Molise Logo"
                className="region-logo"
              />
              Molise: Assessorato alle Politiche Agricole della Regione Molise
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.piemonte.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/piemonte.png"
                alt="Piemonte Logo"
                className="region-logo"
              />
              Piemonte: Direzione Agricoltura e Cibo della Regione Piemonte
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.puglia.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/puglia.png"
                alt="Puglia Logo"
                className="region-logo"
              />
              Puglia: Dipartimento Agricoltura, Sviluppo Rurale e Ambientale
              della Regione Puglia
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.sardegna.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/sardegna.png"
                alt="Sardegna Logo"
                className="region-logo"
              />
              Sardegna: Agenzia Regionale per la Gestione e l&#39;Erogazione
              degli Aiuti in Agricoltura (ARGEA)
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.sicilia.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/sicilia.png"
                alt="Sicilia Logo"
                className="region-logo"
              />
              Sicilia: Assessorato Regionale dell&#39;Agricoltura, dello
              Sviluppo Rurale e della Pesca Mediterranea
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.toscana.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/toscana.png"
                alt="Toscana Logo"
                className="region-logo"
              />
              Toscana: Direzione Agricoltura e Sviluppo Rurale della Regione
              Toscana
            </a>
          </li>
          <li>
            <a
              href="https://www.provincia.tn.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/trento.png"
                alt="Trento Logo"
                className="region-logo"
              />
              Trentino-Alto Adige (Provincia di Trento): Agenzia Provinciale per
              i Pagamenti (APPAG)
            </a>
          </li>
          <li>
            <a
              href="https://www.provincia.bz.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/bolzano.png"
                alt="Bolzano Logo"
                className="region-logo"
              />
              Trentino-Alto Adige (Provincia di Bolzano): Agenzia per i
              Finanziamenti in Agricoltura (AFB)
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.umbria.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/umbria.png"
                alt="Umbria Logo"
                className="region-logo"
              />
              Umbria: Direzione Regionale Agricoltura e Ambiente della Regione
              Umbria
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.vda.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="aosta.png" alt="Aosta Logo" className="region-logo" />
              Valle d&#39;Aosta: Assessorato Agricoltura e Risorse Naturali
              della Regione Valle d&#39;Aosta
            </a>
          </li>
          <li>
            <a
              href="https://www.regione.veneto.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/veneto.png"
                alt="Veneto Logo"
                className="region-logo"
              />
              Veneto: Agenzia Veneta per i Pagamenti in Agricoltura (AVEPA)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
