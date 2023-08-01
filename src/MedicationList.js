import React from "react";

const MedicationList = ({ medications, deleteMedication }) => {
  // Function to format time to AM/PM format
  const formatTime = (time, ampm) => {
    const [hours, minutes] = time.split(":");
    let formattedTime = `${Number(hours) % 12}:${minutes}`;
    formattedTime += ` ${ampm}`;
    return formattedTime;
  };

  return (
    <div className="medication-list">
      <h2>Medication List</h2>
      <ul>
        {medications.map((medication) => (
          <li key={medication.id}>
            <input type="checkbox" />
            <span>{medication.name}</span> - <span>{medication.dosage} mg</span> -{" "}
            <span>{formatTime(medication.time, medication.ampm)}</span>
            <button onClick={() => deleteMedication(medication.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;
