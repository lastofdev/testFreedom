import './App.css';
import { Navbar } from './layout/Navbar';
import { HomePage } from './page/HomePage';


function App(): JSX.Element {

  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
