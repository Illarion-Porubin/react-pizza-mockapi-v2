import React from "react";
import { PizzaTypes } from "../../types/types";
import { Pizza } from "../pizza/Pizza";
import ContentLoader from "react-content-loader";

interface Props {
    data: PizzaTypes[]
}

export const PizzaList: React.FC<Props> = ({data}) => {
  return (
    <>
      {data.length
        ? data.map((data: PizzaTypes) => (
            <Pizza data={data} key={data.id} />
          ))
        : 
        [...new Array(8)].map((_, id) => 
        <ContentLoader 
          key={id}
          speed={0}
          width={280}
          height={500}
          viewBox="0 0 280 466"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          >
          <circle cx="128" cy="120" r="120" /> 
          <rect x="48" y="270" rx="10" ry="10" width="180" height="20" /> 
          <rect x="-2" y="310" rx="10" ry="10" width="280" height="80" /> 
          <rect x="0" y="419" rx="25" ry="25" width="93" height="36" /> 
          <rect x="125" y="412" rx="30" ry="30" width="155" height="50" />
        </ContentLoader>)
        }
    </>
  );
};
