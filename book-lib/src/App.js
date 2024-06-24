import logo from "./logo.svg";
import "./App.css";
import { BooksProvider } from "./contexts/BooksContext";
import Books from "./components/Books";

function App() {
  return (
    <BooksProvider>
      <div className="App">
        <Books />
      </div>
    </BooksProvider>
  );
}

export default App;
