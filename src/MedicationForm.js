import React, { useState } from "react";

const MedicationForm = ({ addMedication }) => {
  const [medication, setMedication] = useState({ name: "", dosage: 0, time: "", ampm: "AM" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedication({ ...medication, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!medication.name || !medication.dosage || !medication.time || !medication.ampm) {
      alert("Please fill all fields");
      return;
    }
    // Generate a random ID for the medication
    const id = Math.floor(Math.random() * 10000);
    addMedication({ ...medication, id });
    setMedication({ name: "", dosage: 0, time: "", ampm: "AM" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Medication Name"
        value={medication.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="dosage"
        placeholder="Dosage in mg"
        value={medication.dosage}
        onChange={handleChange}
      />
      <div className="time-input-container">
        <input
          type="time"
          name="time"
          placeholder="Time"
          value={medication.time}
          onChange={handleChange}
        />
        <select
          name="ampm"
          value={medication.ampm}
          onChange={handleChange}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
      <button type="submit">Add Medication</button>
    </form>
  );
};

export default MedicationForm;
