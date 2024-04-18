import React from "react";
import { PizzaTypes } from "../../types/types";
import { Pizza } from "../pizza/Pizza";
import { Skeleton } from "../../components/skeleton/Skeleton";

interface Props {
    data: PizzaTypes[]
}

export const PizzaList: React.FC<Props> = ({data}) => {
  return (
    <>
      {
      data.length
        ? data.map((data: PizzaTypes) => (
            <Pizza data={data} key={data.id} />
          ))
        : 
        [...new Array(8)].map((_, id) => 
          <Skeleton key={id}/>
        )}
    </>
  );
};
