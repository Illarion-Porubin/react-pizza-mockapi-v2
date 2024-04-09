import { Header } from "./components/header/HeaderComp";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
// import { CartPage } from "./pages/Cart/CartPage";
// import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
// import { RegistrationPage } from "./pages/Auth/RegistrationPage";
// import { LoginPage } from "./pages/Auth/LoginPage";
// import { AccountPage } from "./pages/Account/AccountPage";
import { useEffect } from "react";
// import { fetchAuthMe } from "./redux/slices/authSlice";
import { useCustomDispatch } from "./hooks/store";
import s from "./scss/_app.module.scss";
// import "react-phone-input-2/lib/style.css"; 
import "./scss/libs/_normalize.scss"



function App() {
  const dispatch = useCustomDispatch();
  useEffect(() => {
    // dispatch(fetchAuthMe())
  }, [dispatch])

  
  return (
    <>
      <div className={s.wrapper}>
        <Header />
        <div className={s.content}>
          <div className={s.container}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/account" element={<AccountPage />} /> */}
              {/* <Route path="/regist" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
