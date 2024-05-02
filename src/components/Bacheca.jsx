import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Bacheca = () => {
  return (
    <div className="mt-0">
      <div
        className="table-container"
        style={{
          padding: "20px",
          backgroundColor: "#F0F0F0",
          borderRadius: "10px",
        }}
      >
        <table style={{ width: "100%", borderSpacing: "0 20px" }}>
          <tbody>
            <tr>
              <td style={{ textAlign: "center" }}>
                <h4>Prezzi Latte</h4>
                <Link to="/PrezziLatte">
                  <button
                    className="btn btn-primary rounded-circle"
                    style={{ padding: 0 }}
                  >
                    <img
                      src="/latte.png"
                      alt="Latte"
                      width="50px"
                      height="50px"
                      style={{ borderRadius: "50%" }}
                    />
                  </button>
                </Link>
              </td>
              <td>
                <p className="text-no-underline centered-text">
                  Dettagli sui prezzi del latte disponibili qui.
                </p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <hr />
              </td>
            </tr>

            <tr>
              <td style={{ textAlign: "center" }}>
                <h4>Prezzi Ovini</h4>
                <Link to="/PrezziOvini">
                  <button
                    className="btn btn-primary rounded-circle"
                    style={{ padding: 0 }}
                  >
                    <img
                      src="/ovini.png"
                      alt="Ovini"
                      width="50px"
                      height="50px"
                      style={{ borderRadius: "50%" }}
                    />
                  </button>
                </Link>
              </td>
              <td>
                <p className="text-no-underline centered-text">
                  Dettagli sui prezzi degli ovini disponibili qui.
                </p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <hr />
              </td>
            </tr>

            <tr>
              <td style={{ textAlign: "center" }}>
                <h4>Prezzi Suini</h4>
                <Link to="/PrezziSuini">
                  <button
                    className="btn btn-primary rounded-circle"
                    style={{ padding: 0 }}
                  >
                    <img
                      src="/suini.png"
                      alt="Suini"
                      width="50px"
                      height="50px"
                      style={{ borderRadius: "50%" }}
                    />
                  </button>
                </Link>
              </td>
              <td>
                <p className="text-no-underline centered-text">
                  Dettagli sui prezzi dei suini disponibili qui.
                </p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <hr />
              </td>
            </tr>

            <tr>
              <td style={{ textAlign: "center" }}>
                <h4>Prezzi Bovini</h4>
                <Link to="/PrezziBovini">
                  <button
                    className="btn btn-primary rounded-circle"
                    style={{ padding: 0 }}
                  >
                    <img
                      src="/bovini.png"
                      alt="Bovini"
                      width="50px"
                      height="50px"
                      style={{ borderRadius: "50%" }}
                    />
                  </button>
                </Link>
              </td>
              <td>
                <p className="text-no-underline centered-text">
                  Dettagli sui prezzi dei bovini disponibili qui.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bacheca;
