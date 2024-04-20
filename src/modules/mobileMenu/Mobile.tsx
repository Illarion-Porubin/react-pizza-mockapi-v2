import React from "react";
import { BurgerBtn } from "./burgerBtn/BurgerBtn";
import { MobileMenuNav } from "./mobileMenuNav/MobileMenuNav";

interface Props {
    menuList: {value: string, link: string}[];
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    totalPrice: number;
    totalCount: number;
    setLink: React.Dispatch<React.SetStateAction<string>>,
}

export const Mobile: React.FC<Props> = React.memo(({menuList, active, setActive, totalPrice, totalCount, setLink}) => {
  return (
    <>
      <BurgerBtn active={active} setActive={setActive}/>
      <MobileMenuNav menuList={menuList} active={active} totalPrice={totalPrice} totalCount={totalCount} setActive={setActive} setLink={setLink}/>
    </>
  );
});
