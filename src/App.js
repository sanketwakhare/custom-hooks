import "./App.css";
import { ThemeProvider } from "./hooks/useTheme/ThemeContext";
import { ToggleComponent } from "./hooks/useToggle/ToggleComponent";
import { PersonComponent } from "./react-hooks-usage/useEffect/PersonComponent";
import { UseMemoComponent } from "./react-hooks-usage/useMemo/UseMemoComponent";
import { CounterComponent } from "./react-hooks-usage/useState/CounterComponent";
import UseThemeUsage from "./react-hooks-usage/useTheme/useThemeUsage";

function App() {
  return (
    <ThemeProvider>
      <div>
        <p className="center">Useful React Hooks</p>
        <ToggleComponent />
        <CounterComponent />
        <PersonComponent />
        <UseMemoComponent />
        <UseThemeUsage />
      </div>
    </ThemeProvider>
  );
}

export default App;
