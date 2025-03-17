import React, { useState, useRef } from "react";
import "../style/Tableau.scss";
import data from "./data.json"; 

export const Exposition = () => {
  const [reservations, setReservations] = useState(data.reservations);

  const handleDelete = (e) => {
    e.preventDefault();
    const idToDelete = Number(e.target.value);
    setReservations(reservations.filter((r) => r.id !== idToDelete));
  };

  const RefRefreshIcon = useRef(null);
  const buttonRefresh = useRef(null);

  const handleRefresh = () => {
    if (buttonRefresh.current.disabled) return;
    buttonRefresh.current.disabled = true;
    RefRefreshIcon.current.style.transition = "transform 0.8s ease-in-out";
    RefRefreshIcon.current.style.transform = "rotate(360deg)";
    setTimeout(() => {
      RefRefreshIcon.current.style.transition = "none";
      RefRefreshIcon.current.style.transform = "rotate(0deg)";
      buttonRefresh.current.disabled = false;
    }, 1000);
  };

  return (
    <>
      <div className="refresh-table">
        <button onClick={handleRefresh} ref={buttonRefresh}>
          🔄
        </button>
      </div>
      {reservations.length === 0 ? (
        <div className="resaTable__noResa">
          <p>Aucune réservation pour le moment</p>
        </div>
      ) : (
        <table className="resaTable">
          <caption>Réservations de l'exposition</caption>
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Date de réservation</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => {
              const optionsDate = {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              };

              const dateReservation = new Date(r.date_reservation).toLocaleDateString(
                "fr-FR",
                optionsDate
              );
              const dateCreation = new Date(r.date_creation_reservation).toLocaleDateString(
                "fr-FR",
                optionsDate
              );

              return (
                <tr key={r.id}>
                  <td>{r.prenom_reservation}</td>
                  <td>{r.nom_reservation}</td>
                  <td>{dateReservation}</td>
                  <td>
                    <button onClick={handleDelete} value={r.id}>
                      ❌
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Exposition;
