import './App.css';
import './styles.css';
import  Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
      </div>
      <footer className="footer">
        <p>Footer content here</p>
      </footer>
    </div>
  );
}

export default App;