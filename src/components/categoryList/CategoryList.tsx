import React from "react";
import s from "./CategoryList.module.scss";
import { useCustomDispatch } from "../../hooks/store";
import { fetchFilterPizzas, fetchGetPizzas } from "../../redux/slices/pizzaSlice";

export const CategoryList: React.FC = React.memo(() => {
  const dispatch = useCustomDispatch();
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const categories: string[] = React.useMemo( () => [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
  ], []);

  const menu = React.useCallback( (id: number) => {
    if(!id) {
      setActiveIndex(id);
      dispatch(fetchGetPizzas())
    }
    setActiveIndex(id);
    dispatch(fetchFilterPizzas(String(id)));
  }, [dispatch,]);

  return (
    <div className={s.categories}>
      <ul>
        {categories.map((value, index: number) =>
          value === "Все" ? (
            <li
              className={activeIndex === index ? s.active : " "}
              onClick={() => menu(index)}
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
});
