import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";

function App() {
  const initState = {
    tickets: [],
  };

  const [state, dispatch] = useReducer(ticketReducer, initState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Report</h1>
        <TicketForm />
      </div>
    </div>
  );
}

export default App;
