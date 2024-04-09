import React from "react";
import s from "./HomePage.module.scss";
import { Categories } from "../../components/categories/CategoriesComp";
import { Sort } from "../../components/sort/SortComp";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { PizzaState, fetchGetPizzas } from "../../redux/slices/pizzaSlice";
import { Pagination } from "../../components/pagination/PaginationComp";
import { usePaginate } from "../../hooks/usePaginate";
import { selectCurrentData } from "../../redux/selectors";
import { DataList } from "../../components/itemList/ItemList";

export const HomePage: React.FC = () => {
  const dispatch = useCustomDispatch();
  const pizzaState = useCustomSelector<PizzaState>(selectCurrentData);
  const [currentPage, setCurentPage] = React.useState<number>(0);
  const { data } = usePaginate({
    items: 8,
    dataList: pizzaState.pizzas,
    currentPage,
  });

  React.useEffect(() => {
    dispatch(fetchGetPizzas());
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <>
      <div className={s.content__top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={s.content__title}>Все пиццы</h2>
      <div className={s.content__list}>
        <DataList data={data} />
      </div>
      <Pagination allPages={data.allPages} setCurentPage={setCurentPage} />
    </>
  );
};
