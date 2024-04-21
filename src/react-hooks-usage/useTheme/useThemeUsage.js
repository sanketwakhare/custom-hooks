import { useTheme } from "../../hooks/useTheme/useTheme";

const UseThemeUsage = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="box--component">
      <div>{theme.toString()}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
export default UseThemeUsage;
