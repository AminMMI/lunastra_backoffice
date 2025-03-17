import React from 'react';
import Tableau from './components/TableauExpo.jsx'; 
import StatsResa from './components/StatsResa.jsx';
import Graph from './components/Graph.jsx';
import './App.css';

const reservations = [
  {
    date: '2025-03-10',
    heure: '14:00',
    visiteurs: 5,
    nom: 'Ghmir',
    prenom: 'Alexandre',
    email: 'alexandre@gmail.com',
  },
  {
    date: '2025-03-11',
    heure: '10:00',
    visiteurs: 3,
    nom: 'Benazzouz',
    prenom: 'Amin',
    email: 'amin@gmail.com',
  },
  {
    date: '2025-03-15',
    heure: '13:00',
    visiteurs: 2,
    nom: 'Dior',
    prenom: 'Christian',
    email: 'christian@gmail.com',
  }
];

function App() {
  return (
    <div className="app-container">
      <h1>Back Office</h1>
      <StatsResa/>
      <Tableau reservations={reservations} />
      <Graph/>
    </div>
  );
}

export default App;
