import React, { useState } from "react";

export default function TicketForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const prorities = {
    1: "low",
    2: "medium",
    3: "high",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const ticket = {
      id: new Date().toISOString(),
      title,
      description,
      priority,
    };

    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="ticket-form">
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          value={description}
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <fieldset className="priotity-fieldset">
        <legend>Priority</legend>
        {Object.entries(prorities).map(([key, value]) => (
          <label key={key} className="priority-label">
            <input
              type="radio"
              value={key}
              className="priority-input"
              checked={priority === key}
              onChange={(e) => setPriority(e.target.value)}
            />
            {value}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}
