import './App.css';
import { ToggleComponent } from './hooks/01useToggle/ToggleComponent';
import { CounterComponent } from './react-hooks-usage/01useState/CounterComponent';
import { PersonComponent } from './react-hooks-usage/02useEffect/PersonComponent';

function App() {
  return (
    <div>
      <p>
        Learn React Hooks
      </p>
      <ToggleComponent />
      <CounterComponent />
      <PersonComponent />
    </div>
  );
}

export default App;
