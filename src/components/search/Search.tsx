import React from "react";
import s from "./Search.module.scss";
import useDebounce from "../../hooks/useDebounce";
import { useCustomDispatch } from "../../hooks/store";
import {
  fetchGetPizzas,
  fetchSearchPizzas,
} from "../../redux/slices/pizzaSlice";

export const Search: React.FC = () => {
  const dispatch = useCustomDispatch();
  const [value, setValue] = React.useState<string>(``);
  const search = React.useRef<HTMLInputElement>(null);
  const debounce = useDebounce(value, 400);

  React.useEffect(() => {
    if (debounce) {
      dispatch(fetchSearchPizzas(debounce));
    } else {
      dispatch(fetchGetPizzas());
    }
  }, [dispatch, debounce]);

  return (
    <>
      <div className={s.search_wrap}>
        <input
          className={s.search}
          ref={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          placeholder="Поиск"
          value={value}
        />
      </div>
    </>
  );
};
