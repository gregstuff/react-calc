import './App.css';
import CalculatorBody from './components/CalculatorBody';
import { Provider } from 'react-redux';
import { store } from './lib/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <CalculatorBody />
      </div>
    </Provider>

  );
}

export default App;
