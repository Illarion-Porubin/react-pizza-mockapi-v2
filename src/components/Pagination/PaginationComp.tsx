import React from 'react'
import ReactPaginate from 'react-paginate';
import s from './PaginationComp.module.scss';


interface Props {
  setCurentPage: React.Dispatch<number>;
  allPages: number;
}

export const Pagination: React.FC<Props> = ({allPages, setCurentPage}) => {

  return (
    <>
    <ReactPaginate
      className={s.root}
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e: {selected: number}) => setCurentPage(e.selected) }
      pageCount={allPages ? allPages : 0  }
      marginPagesDisplayed={0}
    />
  </>
  )
}
