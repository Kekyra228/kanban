import { Route, Routes } from "react-router-dom";
import { paths } from "./lib/constsns";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import ExitPage from "./pages/ExitPage";
import LoginPage from "./pages/LoginPage";
import CardPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoutes from "./components/routes/PrivateRoutes";
import CreatedPage from "./pages/CreatedPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={paths.MAIN} element={<MainPage />}>
            <Route path={paths.EXIT} element={<ExitPage />} />
            <Route path={paths.CARD} element={<CardPage />} />
            <Route path={paths.CREATE} element={<CreatedPage />} />
          </Route>
        </Route>

        <Route path={paths.ERROR} element={<NotFoundPage />} />
        <Route path={paths.LOGIN} element={<LoginPage />} />
        <Route path={paths.REGISTER} element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
