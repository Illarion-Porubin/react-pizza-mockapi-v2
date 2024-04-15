import React from "react";
import s from "./BurgerBtn.module.scss";

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerBtn: React.FC<Props> = ({active, setActive}) => {

  const openMenu = () => {
    setActive(!active)
    !active ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  }



  return (
    <>
      <button className={active ? `${s.burger} ${s.active}` : `${s.burger}`}  onClick={() => openMenu()}>
        <span className={s.burger__line_first}></span>
        <span className={s.burger__line_second}></span>
        <span className={s.burger__line_last}></span>
      </button>
    </>
  );
};
