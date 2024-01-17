import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AddPages from "./pages/AddPages";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";
import Wishlist from "./pages/wishlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout></MainLayout>}>
            <Route path="/" element={<Home></Home>} />
            <Route path="/addpages" element={<AddPages></AddPages>} />
            <Route path="/basket" element={<Basket></Basket>} />
            <Route path="/wishlist" element={<Wishlist></Wishlist>} />

            <Route path="/detail/:id" element={<Detail></Detail>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
