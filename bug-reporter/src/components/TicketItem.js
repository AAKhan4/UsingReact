import React from "react";

export default function TicketItem({ ticket, dispatch }) {
  const { id, title, description, priority } = ticket;

  const priorities = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorities[ticket.priority]}`}></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        className="button"
        onClick={() => dispatch({ type: "DELETE_TICKET", payload: id })}
      >Delete</button>
      <button
        className="button"
        // onClick={() => dispatch({ type: "UPDATE", payload: id })}
      ></button>
    </div>
  );
}
