import React from "react";
import { BurgerMenu } from "../../components/burgerMenu/BurgerMenu";
import { MobileMenu } from "../../components/mobileMenu/MobileMenu";

interface Props {
    menuList: {value: string, link: string}[],
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
}

export const Mobile: React.FC<Props> = ({menuList, active, setActive}) => {
  return (
    <>
      <BurgerMenu active={active} setActive={setActive}/>
      <MobileMenu menuList={menuList} active={active} setActive={setActive}/>
    </>
  );
};
