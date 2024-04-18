import React from "react";
import pizaLogo from "../../assets/img/pizza-logo.svg";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import { Search } from "../../components/search/Search";
import { useCustomSelector } from "../../hooks/store";
import { selectCartData } from "../../redux/selectors";
import { CartIcon } from "../../ui/cart/CartIcon";
import { Mobile } from "../mobileMenu/Mobile";


type CurrentType = {
  price: number;
  pizzasCount: number;
};

export const Header: React.FC = () => {
  const cart = useCustomSelector(selectCartData);
  const [active, setActive] = React.useState<boolean>(false);
  const menuList = [
    { value: "Главная", link: "/" },
    { value: "Обо мне", link: "/about" },
  ];

  const totalPrice = cart.items?.reduce(
    (sum: number, current: CurrentType) =>
      sum + current.price * current.pizzasCount,
    0
  );
  const totalCount = cart.items?.reduce(
    (sum: number, current: CurrentType) => sum + current.pizzasCount,
    0
  );

  return (
    <section className={s.header}>
      <div className={s.content}>
        <Link to="/">
          <div className={s.header__logo}>
            <img width="38" src={pizaLogo} alt="Pizza logo" />
            <div className={s.logo__title}>
              <h1>Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Search />
        <nav className={s.header__menu}>
          <ul className={s.header__menu_list}>
            {menuList.map((item: { value: string; link: string }) => (
              <li key={item.value} className={s.header__menu_li}>
                <Link to={item.link} className={s.header__menu_item}>
                  {item.value}
                </Link>
              </li>
            ))}

            <li className={s.header__menu_li}>
              <Link to="/cart">
                <CartIcon totalPrice={totalPrice} totalCount={totalCount} />
              </Link>
            </li>
          </ul>
        </nav>
        <Mobile
          active={active}
          menuList={menuList}
          setActive={setActive}
          totalPrice={totalPrice}
          totalCount={totalCount}
        />
      </div>
    </section>
  );
};
