import logo from "./logo.svg";
import "./App.css";
import { BooksProvider } from "./contexts/BooksContext";
import Books from "./components/Books";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";
import SecretBooks from "./components/SecretBooks";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BooksProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/books" element={<Navigate to="/" />} />
            <Route path="/books/:bid" element={<BookDetails />} />
            <Route
              path="/secret"
              element={<PrivateRoute component={<SecretBooks />} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </BooksProvider>
  );
}

export default App;
