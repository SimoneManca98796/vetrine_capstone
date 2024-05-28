import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../Bacheca.css";

const Bacheca = () => {
  useEffect(() => {
    document.body.classList.add("bacheca");
    return () => {
      document.body.classList.remove("bacheca");
    };
  }, []);

  return (
    <div className="bacheca-wrapper">
      <div className="bacheca-container">
        <div className="intro-section">
          <div className="intro-content">
            <h3>Bacheca dei Prezzi</h3>
            <p>
              Questa bacheca fornisce dettagli sui prezzi del mercato del latte,
              degli ovini, dei suini e dei bovini, con un confronto tra i prezzi
              in Italia e negli Stati Uniti.
            </p>
          </div>
          <div className="intro-image">
            <img
              src="pastoreBacheca.webp"
              alt="Bacheca Introduzione"
              className="intro-img"
            />
          </div>
        </div>

        <div className="table-container">
          <table className="price-table">
            <thead>
              <tr>
                <th>Prezzi Latte</th>
                <th>Prezzi Ovini</th>
                <th>Prezzi Suini</th>
                <th>Prezzi Bovini</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="icon-cell">
                  <Link to="/PrezziLatte">
                    <button className="btn btn-primary rounded-circle icon-button">
                      <img src="/latte.png" alt="Latte" className="icon-img" />
                    </button>
                  </Link>
                  <span className="arrow-up"></span>
                  <p className="text-no-underline centered-text">
                    Dettagli sui prezzi del latte disponibili qui.
                  </p>
                </td>
                <td className="icon-cell">
                  <Link to="/PrezziOvini">
                    <button className="btn btn-primary rounded-circle icon-button">
                      <img src="/ovini.png" alt="Ovini" className="icon-img" />
                    </button>
                  </Link>
                  <span className="arrow-up"></span>
                  <p className="text-no-underline centered-text">
                    Dettagli sui prezzi degli ovini disponibili qui.
                  </p>
                </td>
                <td className="icon-cell">
                  <Link to="/PrezziSuini">
                    <button className="btn btn-primary rounded-circle icon-button">
                      <img src="/suini.png" alt="Suini" className="icon-img" />
                    </button>
                  </Link>
                  <span className="arrow-up"></span>
                  <p className="text-no-underline centered-text">
                    Dettagli sui prezzi dei suini disponibili qui.
                  </p>
                </td>
                <td className="icon-cell">
                  <Link to="/PrezziBovini">
                    <button className="btn btn-primary rounded-circle icon-button">
                      <img
                        src="/bovini.png"
                        alt="Bovini"
                        className="icon-img"
                      />
                    </button>
                  </Link>
                  <span className="arrow-up"></span>
                  <p className="text-no-underline centered-text">
                    Dettagli sui prezzi dei bovini disponibili qui.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="american-prices-section">
          <h4 className="titoloAccentrato">Prezzi Americani</h4>
          <p className="didascalia">
            Confronta i prezzi italiani con quelli di altri stati. Per ora sono
            disponibili solo i prezzi degli Stati Uniti, ma verranno aggiunti
            altri paesi in futuro.
          </p>
          <div className="icon-cell">
            <Link to="/PrezziAmericani">
              <button className="btn btn-primary rounded-circle icon-button">
                <img src="/USA.png" alt="USA" className="icon-img" />
              </button>
            </Link>
          </div>
        </div>

        <div className="sources-section">
          <h4>Fonti delle Informazioni</h4>
          <ul>
            <li>
              Prezzi del latte:{" "}
              <a
                href="https://www.ismea.it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ISMEA
              </a>
            </li>
            <li>
              Prezzi degli ovini:{" "}
              <a
                href="https://www.ismea.it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ISMEA
              </a>
            </li>
            <li>
              Prezzi dei suini:{" "}
              <a
                href="http://www.crefis.it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CREFIS
              </a>
            </li>
            <li>
              Prezzi dei bovini:{" "}
              <a
                href="https://www.ismea.it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ISMEA
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bacheca;
