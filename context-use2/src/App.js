import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "./context/ThemeProvider";
import ContentComponent from "./components/ContentComponent";

function App() {
  return (
    <ThemeProvider>
      <ContentComponent />
    </ThemeProvider>
  );
}

export default App;
