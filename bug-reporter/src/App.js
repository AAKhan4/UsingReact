import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";
import { sortTickets } from "./utilities/sortingUtils";

function App() {
  const initState = {
    tickets: [],
    editingTicket: null,
    sortRef: "a-z",
  };

  const [state, dispatch] = useReducer(ticketReducer, initState);

  const sortedTkts = sortTickets(state.tickets, state.sortPref);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Report</h1>

        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />

        {state.tickets.length > 0 && (
          <div className="results">
            <select
              value={state.sortPref}
              onChange={(e) =>
                dispatch({ type: "SORT_TICKETS", payload: e.target.value })
              }
            >
              <option value="high-low">Priority: High to Low</option>
              <option value="low-high">Priority: Low to High</option>
              <option value="a-z">Title: A to Z</option>
              <option value="z-a">Title: Z to A</option>
            </select>
            <h2>All Tickets</h2>
            <TicketList tickets={sortedTkts} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
