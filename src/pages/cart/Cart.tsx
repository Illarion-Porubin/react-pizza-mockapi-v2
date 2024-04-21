import React from "react";
import sb from "../../shared/styles/_button.module.scss";
import s from "./Cart.module.scss";
import { v1 } from "uuid";
import { Link } from "react-router-dom";
import { CartTypes } from "../../types/types";
import { PizzaCart } from "../../components/pizzaCart/PizzaCart";
import { useCart } from "../../hooks/useCart";
////////////mui////////////
import Stack from "@mui/material/Stack";
import CatrSvg from "../../assets/svg/cart.svg";
import TrashIcon from "../../assets/svg/trash.svg";
import OrederProduct from "../../modules/orderProduct/OrederProduct";

export const Cart: React.FC = React.memo(() => {
  const [phone, setPhone] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const [eroorPhone, setErrorPhone] = React.useState<boolean>(false);
  const { data } = useCart({ phone, setErrorPhone, setOpen });

  return (
    <>
      <h1 className={s.cart_empty}>
        {data.cart.items?.length ? "" : "Корзина пуста"}
      </h1>
      <Stack>
        <div className={`${s.container} ${s.container__cart}`}>
          <div className={s.cart}>
            <div className={s.cart__top}>
              <h2 className={s.content__title}>
                <img className={s.cartIcon} src={CatrSvg} alt="cart" />
                <span className={s.cart__title}>Корзина</span>
              </h2>
              <div onClick={data.onClickClear} className={`${s.cart__clear}`}>
                <img src={TrashIcon} alt="trash" />
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className={`${s.content__items}`}>
              {React.useMemo(() => {
                return data.cart.items?.map((item: CartTypes) => (
                  <PizzaCart key={v1()} {...item} />
                ));
              }, [data.cart.items])}
            </div>
            <div className={`${s.cart__bottom}`}>
              <div className={`${s.cart__bottom_details}`}>
                <span>
                  Всего пицц: <b>{data.totalCount} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b>{data.totalPrice} ₽</b>
                </span>
              </div>
              <div className={`${s.cart__bottom_buttons}`}>
                <Link className={s.buttons_link} to="/">
                  <button
                    className={`${sb.button} ${sb.button__outline} ${sb.button__add} ${s.button__back}`}
                  >
                    <svg width="18" height="12" viewBox="0 0 8 14" fill="none">
                      <path
                        d="M7 13L1 6.93015L6.86175 1"
                        stroke="#D3D3D3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Вернуться назад</span>
                  </button>
                </Link>
                {data.cart.items?.length ? (
                  <OrederProduct
                    createOrder={data.createOrder}
                    eroorPhone={eroorPhone}
                    open={open}
                    phone={phone}
                    setOpen={setOpen}
                    setPhone={setPhone}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Stack>
    </>
  );
});
