import React from "react";
import s from "./MobileMenuNav.module.scss";
import { Link } from "react-router-dom";
import { CartIcon } from "../../../ui/cart/CartMainBtn";

interface Props {
  menuList: { value: string; link: string }[];
  active: boolean;
  totalPrice: number;
  totalCount: number;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setLink:  React.Dispatch<React.SetStateAction<string>>;
}

export const MobileMenuNav: React.FC<Props> = ({ menuList, active, totalPrice, totalCount, setActive, setLink }) => {
  const menuActive = active
    ? `${s.mainClasName} ${s.active} `
    : `${s.mainClasName}`;

  const action = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setLink(window.location.href)
    e.stopPropagation()
  }

  return (
    <div className={menuActive} style={{ zIndex: active ? 10 : 9 }} >
      <nav className={s.menu} onClick={() => setActive(false)}>
        <ul className={s.list}>
          {menuList.map((item, id: number) => (
            <li className={s.item} key={id} onClick={e => action(e)} >
              <Link className={s.link} to={item.link}>
                {item.value}
              </Link>
            </li>
          ))}
          <li className={s.item} onClick={e => action(e)}>
            <Link to="/cart" className={s.link}>
              <CartIcon totalPrice={totalPrice} totalCount={totalCount} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
