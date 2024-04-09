import React from "react";
import s from "./ItemList.module.scss";
import { PizzaTypes } from "../../types/types";
import { PizzasComp } from "../item/Item";
import { Skeleton } from "@mui/material";

interface Props {
    data: {
        newDataList: PizzaTypes[];
        allPages: number;
        items: number;
    } 
}

export const DataList: React.FC<Props> = ({data}) => {
  return (
    <div className={s.content}>
      {data.newDataList.length
        ? data.newDataList.map((data: PizzaTypes) => (
            <PizzasComp data={data} key={data.id} />
          ))
        : [...new Array(6)].map((_, index) => <Skeleton key={index} />)}
    </div>
  );
};
