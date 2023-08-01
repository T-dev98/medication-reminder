import React, { useState } from "react";
import MedicationForm from "./MedicationForm";
import MedicationList from "./MedicationList";
import "./App.css";

function App() {
  const [medications, setMedications] = useState([]);

  // Function to add a new medication
  const addMedication = (medication) => {
    setMedications([...medications, medication]);
  };

  // Function to delete a medication
  const deleteMedication = (id) => {
    setMedications(medications.filter((medication) => medication.id !== id));
  };

  return (
    <div className="app">
      <h1>Medication Reminder App</h1>
      <MedicationForm addMedication={addMedication} />
      <MedicationList medications={medications} deleteMedication={deleteMedication} />
    </div>
  );
}

export default App;
