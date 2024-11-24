import { GlobalStyle } from "./components/Global.styled";
import AppRoutes from "./Routes";

function App() {
  console.log("App is rendering!");
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
