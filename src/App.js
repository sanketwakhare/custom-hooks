import './App.css';
import { ToggleComponent } from './hooks/01useToggle/ToggleComponent';
import { CounterComponent } from './react-hooks-usage/01useState/CounterComponent';

function App() {
  return (
    <div>
      <p>
        Learn React Hooks
      </p>
      <ToggleComponent />
      <CounterComponent />
    </div>
  );
}

export default App;
