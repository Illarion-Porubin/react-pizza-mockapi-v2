import s from "./shared/styles/_app.module.scss";
import "react-phone-input-2/lib/style.css";
import "./shared/libs/_normalize.scss";
import { Header } from "./modules/header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Cart } from "./pages/cart/Cart";
import { NotFoundPage } from "./pages/notFound/NotFound";
import { About } from "./pages/about/About";

function App() {


  return (
    <>
      <div className={s.wrapper}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
