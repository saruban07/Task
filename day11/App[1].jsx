import React, { useState } from "react";
import "./App.css";

const timeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedSlot(null); // Reset selected slot when day changes
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleConfirm = () => {
    if (selectedDay && selectedSlot) {
      alert(`Meeting scheduled on ${selectedDay} during ${selectedSlot}`);
    } else {
      alert("Please select a day and time slot.");
    }
  };

  return (
    <div className="scheduler">
      <h1>Interactive Meeting Scheduler</h1>

      <div className="calendar">
        <h2>Select a Day</h2>
        <div className="days">
          {days.map((day) => (
            <button
              key={day}
              className={`day-button ${selectedDay === day ? "active" : ""}`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {selectedDay && (
        <div className="time-slots">
          <h2>Select a Time Slot for {selectedDay}</h2>
          <div className="slots">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`slot-button ${selectedSlot === slot ? "active" : ""}`}
                onClick={() => handleSlotClick(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="confirmation">
        <button className="confirm-button" onClick={handleConfirm}>
          Confirm Meeting
        </button>
      </div>
    </div>
  );
};

export default App;
