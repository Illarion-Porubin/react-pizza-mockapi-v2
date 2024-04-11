import React from "react";
import { PizzaTypes } from "../../types/types";
import { Pizza } from "../pizza/Pizza";
import { Skeleton } from "@mui/material";

interface Props {
    data: PizzaTypes[]
}

export const DataList: React.FC<Props> = ({data}) => {
  return (
    <>
      {data.length
        ? data.map((data: PizzaTypes) => (
            <Pizza data={data} key={data.id} />
          ))
        : [...new Array(6)].map((_, index) => <Skeleton key={index} />)}
    </>
  );
};
