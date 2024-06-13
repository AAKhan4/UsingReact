import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";

function App() {
  const initState = {
    tickets: [],
  };

  const [state, dispatch] = useReducer(ticketReducer, initState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Report</h1>
        <TicketForm dispatch={dispatch} />

        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <TicketList tickets={state.tickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
