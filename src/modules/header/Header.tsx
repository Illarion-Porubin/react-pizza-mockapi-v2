import React from "react";
import pizaLogo from "../../assets/img/pizza-logo.svg";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Search } from "../../components/search/Search";
import { useCustomSelector } from "../../hooks/store";
import { selectAuthData, selectCartData } from "../../redux/selectors";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { authSlice, AuthState } from "../../redux/slices/authSlice";
import { CartIcon } from "../../ui/cart/CartIcon";
import { Container } from "../../components/container/Container";

type CurrentType = {
  price: number;
  pizzasCount: number;
};

export const HeaderContent: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useCustomSelector(selectCartData);
  const userAuth = useCustomSelector<AuthState>(selectAuthData);

  const totalPrice = cart.items?.reduce(
    (sum: number, current: CurrentType) =>
      sum + current.price * current.pizzasCount,
    0
  );
  const totalCount = cart.items?.reduce(
    (sum: number, current: CurrentType) => sum + current.pizzasCount,
    0
  );

  const userLogout = () => {
    if (window.confirm(`Вы точно хотите выйти?`)) {
      dispatch(authSlice.actions.logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.container}>
          <Link to="/">
            <div className={s.header__logo}>
              <img width="38" src={pizaLogo} alt="Pizza logo" />
              <div className={s.logo__title}>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </Link>
          <Search />
          <div className={s.header__cart}>
            <Link to="/about" className={s.header__user_wrapp}>
              <Button className={s.userEnter}>Обо мне</Button>
            </Link>
            <Link to="/account">
              <Button>Кабинет</Button>
            </Link>
            <Link to="/login" className={s.header__user_wrapp}>
              {userAuth.data ? (
                <Button onClick={() => userLogout()} className={s.userEnter}>
                  Выйти
                </Button>
              ) : (
                <Button className={s.userEnter}>Войти</Button>
              )}
            </Link>
            <Link to="/cart">
              <CartIcon totalPrice={totalPrice} totalCount={totalCount} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header: React.FC = () => {
  return <Container child={<HeaderContent />} />;
};
