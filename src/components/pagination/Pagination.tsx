import React from 'react'
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';
import { useCustomSelector } from '../../hooks/store';
import { selectCurrentData } from '../../redux/selectors';

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination: React.FC<Props> = React.memo(({setPage}) => {
  const pizzaState = useCustomSelector(selectCurrentData);

  return (
    <>
      <ReactPaginate
        className={s.paginate}
        previousLabel="<"
        nextLabel=">"
        onPageChange={(e: {selected: number}) => setPage(e.selected) }
        pageCount={pizzaState.pages}
        marginPagesDisplayed={0}
        renderOnZeroPageCount={null}
      />
  </>
  )
})
