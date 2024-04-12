import React from "react";
import s from "./Home.module.scss";
import { Sort } from "../../components/sort/Sort";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { fetchGetPizzas } from "../../redux/slices/pizzaSlice";
import { Pagination } from "../../components/pagination/Pagination";
import { selectCurrentData } from "../../redux/selectors";
import { DataList } from "../../components/pizzaList/PizzaList";
import { CategoryList } from "../../components/categoryList/CategoryList";

export const Home: React.FC = () => {
  const dispatch = useCustomDispatch();
  const pizzaState = useCustomSelector(selectCurrentData);

  React.useEffect(() => {
    dispatch(fetchGetPizzas());
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <>
      <div className={s.content__top}>
        <CategoryList />
        <Sort />  
      </div>
      <h2 className={s.content__title}>Все пиццы</h2>
      <article className={s.content__list}>
        <DataList data={pizzaState.pizzas} />
      </article>
      <Pagination/>
    </>
  );
};
