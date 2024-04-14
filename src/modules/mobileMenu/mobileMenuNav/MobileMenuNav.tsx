import React from "react";
import s from "./MobileMenuNav.module.scss";
import { Link } from "react-router-dom";
import { CartIcon } from "../../../ui/cart/CartIcon";

interface Props {
  menuList: { value: string; link: string }[];
  active: boolean;
  totalPrice: number;
  totalCount: number;
}

export const MobileMenuNav: React.FC<Props> = ({ menuList, active, totalPrice, totalCount }) => {
  const menuActive = active
    ? `${s.mainClasName} ${s.active} `
    : `${s.mainClasName}`;

  return (
    <div className={menuActive} style={{ zIndex: active ? 10 : 9 }}>
      <nav className={s.menu}>
        <ul className={s.list}>
          {menuList.map((item, id: number) => (
            <li className={s.item} key={id}>
              <Link className={s.link} to={item.link}>
                {item.value}
              </Link>
            </li>
          ))}
          <li className={s.item}>
            <Link to="/cart" className={s.link} >
              <CartIcon totalPrice={totalPrice} totalCount={totalCount} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
