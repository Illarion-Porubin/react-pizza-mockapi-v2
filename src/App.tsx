import s from "./scss/_app.module.scss";
import "react-phone-input-2/lib/style.css";
import "./scss/libs/_normalize.scss";
import { Header } from "./modules/header/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { useEffect } from "react";
import { useCustomDispatch } from "./hooks/store";
import { Account } from "./pages/account/Account";
import { Registration } from "./pages/auth/Registration";
import { Login } from "./pages/auth/Login";
import { Cart } from "./pages/cart/Cart";
import { NotFoundPage } from "./pages/notFound/NotFound";
import { About } from "./pages/about/About";

function App() {
  const dispatch = useCustomDispatch();

  useEffect(() => {
    // dispatch(fetchAuthMe())
  }, [dispatch]);

  return (
    <>
      <div className={s.wrapper}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/regist" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
