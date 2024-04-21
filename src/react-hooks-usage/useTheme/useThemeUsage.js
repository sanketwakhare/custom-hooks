import { useTheme } from "../../hooks/useTheme/useTheme";

const UseThemeUsage = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="box--component">
      <h3>useTheme</h3>
      <div>{theme.toString()}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
export default UseThemeUsage;
