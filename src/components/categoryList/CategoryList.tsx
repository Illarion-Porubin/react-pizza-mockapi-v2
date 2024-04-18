import React from "react";
import s from "./CategoryList.module.scss";
import { useCustomDispatch } from "../../hooks/store";
import { fetchFilterPizzas, fetchGetPizzas } from "../../redux/slices/pizzaSlice";

export const CategoryList: React.FC = () => {
  const dispatch = useCustomDispatch();
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const categories: string[] = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
  ];

  const menu = (id: number) => {
    setActiveIndex(id);
    dispatch(fetchFilterPizzas(String(id)));
  };

  return (
    <div className={s.categories}>
      <ul>
        {categories.map((value, index: number) =>
          value === "Все" ? (
            <li
              className={activeIndex === index ? s.active : " "}
              onClick={() => dispatch(fetchGetPizzas())}
              key={value}
            >
              {value}
            </li>
          ) : (
            <li
              className={activeIndex === index ? s.active : " "}
              onClick={() => menu(index)}
              key={value}
            >
              {value}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
