import React from "react";
import s from "./BurgerBtn.module.scss";

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerBtn: React.FC<Props> = ({active, setActive}) => {
  return (
    <>
      <button className={active ? `${s.burger} ${s.active}` : `${s.burger}`}  onClick={() => setActive(!active)}>
        <span className={s.burger__line_first}></span>
        <span className={s.burger__line_second}></span>
        <span className={s.burger__line_last}></span>
      </button>
    </>
  );
};
