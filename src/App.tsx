import Header from "./components/header/Header";
import { useTheme } from "./context/ThemeContext";
import Main from "./pages/Main/Main";

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark && "dark"}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
