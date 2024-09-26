import React from "react";
import s from "./Home.module.scss";
import { Sort } from "../../components/sort/Sort";
import { useCustomSelector } from "../../hooks/store";
import { Pagination } from "../../components/pagination/Pagination";
import { selectCurrentData } from "../../redux/selectors";
import { PizzaList } from "../../components/pizzaList/PizzaList";
import { CategoryList } from "../../components/categoryList/CategoryList";
import { usePaginate } from "../../hooks/usePaginate";

export const Home: React.FC = React.memo(() => {
  const test = (document.getElementsByName("test" )).offsetWidth;

  const pizzaState = useCustomSelector(selectCurrentData);
  const [page, setPage] = React.useState<number>(0);
  const { paginate } = usePaginate({quantityItems: 8, dataList: pizzaState.pizzas, currentPage: page}); 

  return (
    <div className="test">
      <div className={s.content__top}>
        <CategoryList />
        <Sort />  
      </div>
      <h2 className={s.content__title}>Все пиццы</h2> 
      <article className={s.content__list}>
        <PizzaList data={paginate.newDataList} />
      </article>
      <Pagination setPage={setPage}/>
    </div>
  );
});