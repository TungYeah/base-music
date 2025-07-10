
import Home from "@pages/Home";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound/clientNotFound.tsx";
import HomeLayout from "./layout/HomeLayout";
import "./styles/global.scss";
import "./styles/style.scss";
import SearchSongPage from './pages/SearchSongPage.tsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <HomeLayout>
                <Outlet />
              </HomeLayout>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/search/:tab" element={<SearchSongPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        draggable
        pauseOnFocusLoss
        autoClose={3000}
        hideProgressBar
        newestOnTop
        pauseOnHover
      />
    </>
  );
}

export default App;