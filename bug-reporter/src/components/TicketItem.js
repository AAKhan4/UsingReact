import React from "react";

export default function TicketItem({ ticket, dispatch }) {
  const { id, title, description, priority } = ticket;

  const priorities = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TICKET", payload: id });
  };

  const handleUpdate = () => {
    dispatch({
      type: "UPDATE_TICKET",
      payload: {
        ...ticket,
        title: "Updated Title",
        description: "Updated Description",
        priority: "3",
      },
    });
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorities[priority]}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
}
