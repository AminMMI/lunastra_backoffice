import React, { useState, useEffect } from "react";
import { StatsCard } from "./StatsCard";
import "../style/Card.scss";
import data from "./data.json";


export const StatsResa = () => {
  const [pourcentage, setPourcentage] = useState(0);
  const [visiteurs, setVisiteurs] = useState(0);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    console.log("Données JSON chargées :", data);
    setReservations(data.reservations);
    setVisiteurs(data.stats.countPresence);
  }, []);

  return (
    <section className="statCards">
      <StatsCard
        title="Réservations cette semaine"
        value={reservations.length}
        type="pourcentage"
        pourcentage={pourcentage}
      />
      <StatsCard title="Total de réservations" value={reservations.length} />
      <StatsCard title="Visiteurs cette semaine" value={visiteurs} />
    
    </section>
  );
};

export default StatsResa;
