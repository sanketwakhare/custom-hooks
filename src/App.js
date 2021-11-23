import './App.css';
import { ToggleComponent } from './hooks/01useToggle/ToggleComponent';
import { Counter } from './react-hooks-usage/01useState/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learn React Hooks
        </p>
        <ToggleComponent />
        <Counter />
      </header>
    </div>
  );
}

export default App;
