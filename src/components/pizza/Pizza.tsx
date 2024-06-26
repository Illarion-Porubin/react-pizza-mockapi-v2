import React from "react";
import s from "./Pizza.module.scss";
import sb from "../../shared/styles/_button.module.scss";
import { PizzaTypes } from "../../types/types";
import { useOrder } from "../../hooks/useOrder";

interface Props {
  data: PizzaTypes;
}

export const Pizza: React.FC<Props> = ({ data }) => {
  const [indexSize, setIndexSize] = React.useState<number>(0);
  const [indexTypes, setIndexTypes] = React.useState<number>(0);
  const [pizzaCount, setPizzaCount] = React.useState<number>(0);
  const {options} = useOrder({data, indexSize, indexTypes, pizzaCount, setPizzaCount});

  return (
    <div className={s.pizza_block}>
      <img className={s.pizza_block__image} src={data.imageUrl} alt="Pizza" />
      <h4 className={s.pizza_block__title}>{data.title}</h4>
      <div className={s.pizza_block__selector}>
        <ul>
          {data.types.map((types, id) => (
            <li
              onClick={() => setIndexTypes(id)}
              className={indexTypes === types ? s.active : ""}
              key={types}
            >
              {types ? "традиционная" : "тонкая" }
            </li>
          ))}
        </ul>
        <ul>
          {data.sizes.map((sizes, index) => (
            <li
              onClick={() => setIndexSize(index)}
              className={data.sizes[indexSize] === sizes ? s.active : ""}
              key={sizes}
            >
              {sizes} см
            </li>
          ))}
        </ul>
      </div>
      <div className={s.pizza_block__bottom}>
        <div className={s.pizza_block__price}>{options.priceOnePizza} ₽</div>
        <div className={s.pizzaBlockValue}>
          <button
            className={s.countValue}
            onClick={() => setPizzaCount((prev) => prev + 1)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="#fe5f1e"
                />
              </g>
            </svg>
          </button>
          <button
            className={s.countValue}
            onClick={() =>
              setPizzaCount((prev) => (prev === 0 ? prev : prev - 1))
            }
          >
            <svg
              width="18"
              height="18"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 52.161 52.161"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M52.161,26.081c0,3.246-2.63,5.875-5.875,5.875H5.875C2.63,31.956,0,29.327,0,26.081l0,0c0-3.245,2.63-5.875,5.875-5.875
		              h40.411C49.531,20.206,52.161,22.835,52.161,26.081L52.161,26.081z"
                  fill="#fe5f1e"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className={`${sb.button} ${sb.button__outline} ${sb.button__add}`} onClick={() => options.orderPizza(data)}>
          <span>Добавить</span>
          <i>{pizzaCount}</i>
        </div>
      </div>
    </div>
  );
};