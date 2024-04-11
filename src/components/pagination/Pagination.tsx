import React from 'react'
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchPaginationPizzas } from '../../redux/slices/pizzaSlice';
import { selectCurrentData } from '../../redux/selectors';


export const Pagination: React.FC = () => {
  const dispatch = useCustomDispatch();
  const pizzaState = useCustomSelector(selectCurrentData);

  return (
    <>
      <ReactPaginate
        className={s.root}
        previousLabel="<"
        nextLabel=">"
        onPageChange={(e: {selected: number}) => dispatch(fetchPaginationPizzas(e.selected + 1)) }
        pageCount={pizzaState.pages}
        marginPagesDisplayed={0}
      />
  </>
  )
}
