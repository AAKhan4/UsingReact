import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import TicketForm from "./components/TicketForm";

function App() {
  const initState = {
    tickets: [],
  };

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
