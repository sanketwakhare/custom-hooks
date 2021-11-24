import './App.css';
import { ToggleComponent } from './hooks/01useToggle/ToggleComponent';
import { CounterComponent } from './react-hooks-usage/01useState/CounterComponent';
import { PersonComponent } from './react-hooks-usage/02useEffect/PersonComponent';
import { UseMemoComponent } from './react-hooks-usage/03useMemo/UseMemoComponent';


function App() {
  return (
    <div>
      <p className="center">
        Useful React Hooks
      </p>
      <ToggleComponent />
      <CounterComponent />
      <PersonComponent />
      <UseMemoComponent />
    </div>
  );
}

export default App;
