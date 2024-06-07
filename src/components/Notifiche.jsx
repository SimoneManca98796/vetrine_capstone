import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "../redux/actions";
import { Table } from "react-bootstrap";
import "../Notifiche.css";

const Notifiche = () => {
  const dispatch = useDispatch();
  const notifiche = useSelector((state) => state.notifiche.allNotifications);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  return (
    <div className="notifiche-container container">
      <h1 className="notifiche-header">Notifiche</h1>
      <Table striped bordered hover className="notifiche-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titolo</th>
            <th>Messaggio</th>
            <th>Tipo</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {notifiche.map((notifica) => (
            <tr key={notifica.id}>
              <td>{notifica.id}</td>
              <td>{notifica.titolo}</td>
              <td>{notifica.messaggio}</td>
              <td>{notifica.tipo}</td>
              <td>
                {notifica.url && (
                  <a
                    href={notifica.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Notifiche;
